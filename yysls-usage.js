// ============================================================
// 燕云穿搭利用率共享计算 · window.YYSLS_USAGE
// ------------------------------------------------------------
// 只读纯计算，不写任何数据。图鉴（index-pedia.html）与穿搭库（index-style.html）共用。
// 数据源：yysls-style.js（穿搭 wearing 引用）· 调用方传入拥有的条目 id 做分层
// 口径：score = Σ穿搭[ 场景权值 × 部位系数 ]
//   场景权值 = tags 中命中的场景粗词权重取 max（防标签堆叠刷分）；
//             无粗词命中时前缀降级（主线·/江湖百态·），再无则兜底 1
//   部位系数 = full 整套 2（整穿加权）/ hair·top·bottom 散件 1
//   归一    = 同穿搭内同一 itemId 若 full 与散件并存，full 吃掉散件（冗余）；
//             top+bottom 等散件组合各计一次（真实部件贡献）
// 分层（动态比例制）：压箱底 = Bottom BOXED_PCT（同分同档）；百搭棒 = 剩余条目 Top PCT（同分同档）；可食 = 其余
// 调整权重/占比只改本文件顶部常量。
// ============================================================
window.YYSLS_USAGE = (function(){
  const SCENE_W   = {'主线':4,'大世界跑图':4,'残章':3,'江湖百态':2,'打架':2,'戏乐':1};
  const PREFIX_W  = {'主线·':4,'江湖百态·':2};
  const PART_W    = {full:2, hair:1, top:1, bottom:1};
  const PCT       = 0.15;   // 百搭棒目标占比（按已拥有条目总数，Top 15%）
  const BOXED_PCT = 0.30;   // 压箱底目标占比（按已拥有条目总数，Bottom 30%，同分同档）
  const RMB_TO_ZHU= 10;     // 货币换算：1 元 = 10 长鸣珠（性价比榜折珠计价用）
  const FALLBACK  = 1;      // 无场景标签兜底权重
  const FALLBACK_NAME = '其他';
  const TIERS     = {BEST:'百搭棒', GOOD:'可食', BOXED:'压箱底'};

  // 命中场景词（精确匹配粗词；无命中时前缀降级；均无 → [FALLBACK_NAME]）
  function hitScenes(tags){
    const hit=tags.filter(t=>SCENE_W[t]!=null);
    if(hit.length)return hit;
    const phit=tags.filter(t=>Object.keys(PREFIX_W).some(p=>t.startsWith(p)));
    return phit.length?phit:[FALLBACK_NAME];
  }
  function sceneWeight(tags){
    const hit=tags.filter(t=>SCENE_W[t]!=null);
    if(hit.length)return Math.max(...hit.map(t=>SCENE_W[t]));
    for(const p in PREFIX_W)if(tags.some(t=>t.startsWith(p)))return PREFIX_W[p];
    return FALLBACK;
  }

  // 聚合：outfits → Map<itemId,{score,full,part,scenes:{场景名:次数}}>
  function computeUsage(outfits){
    const score=new Map(), full=new Map(), part=new Map(), scenes=new Map();
    for(const o of outfits){
      const ws=(o.wearing||[]).filter(w=>w.itemId);
      const fullIds=new Set(ws.filter(w=>w.part==='full').map(w=>w.itemId));
      const norm=ws.filter(w=>!(fullIds.has(w.itemId)&&w.part!=='full'));
      const sw=sceneWeight(o.tags||[]);
      const scNames=hitScenes(o.tags||[]);
      for(const w of norm){
        const pw=PART_W[w.part]||1;
        score.set(w.itemId,(score.get(w.itemId)||0)+sw*pw);
        if(w.part==='full')full.set(w.itemId,(full.get(w.itemId)||0)+1);
        else part.set(w.itemId,(part.get(w.itemId)||0)+1);
        const sc=scenes.get(w.itemId)||{};
        for(const n of scNames)sc[n]=(sc[n]||0)+1;
        scenes.set(w.itemId,sc);
      }
    }
    const out=new Map();
    for(const [id,s] of score){
      out.set(id,{score:s,full:full.get(id)||0,part:part.get(id)||0,scenes:scenes.get(id)||{}});
    }
    return out;
  }

  // 分层：ownedIds → Map<itemId, 档名>。
  // 压箱底 = 升序 Bottom BOXED_PCT（同分同档：比例线落点分数整体并入）；
  // 百搭棒 = 压箱底之外按 score 降序 Top PCT（同分同档）；可食 = 其余
  function assignTiers(ownedIds,usage){
    const rows=ownedIds.map(id=>({id,s:usage.get(id)?usage.get(id).score:0}))
      .sort((a,b)=>b.s-a.s);
    const n=rows.length;
    const asc=[...rows].reverse();
    const bk=n?Math.min(n,Math.max(1,Math.round(n*BOXED_PCT))):0;
    const bThr=bk?asc[bk-1].s:Infinity;
    const eligible=rows.filter(r=>r.s>bThr);
    const k=eligible.length?Math.min(eligible.length,Math.max(1,Math.round(n*PCT))):0;
    const thr=k?eligible[k-1].s:0;
    const out=new Map();
    for(const r of rows){
      if(r.s<=bThr)out.set(r.id,TIERS.BOXED);
      else if(r.s>=thr)out.set(r.id,TIERS.BEST);
      else out.set(r.id,TIERS.GOOD);
    }
    return out;
  }

  // 分解行（人类可读，不暴露加权分数）：整套 ×N · 散件 ×N · 主线×2 · 大世界跑图×1
  // 场景构成按权重降序输出（主线/跑图在前，戏乐殿后），与权重语义一致
  function decompHtml(u){
    if(!u||u.score===0)return '从未入镜';
    const parts=[];
    if(u.full)parts.push('整套 ×'+u.full);
    if(u.part)parts.push('散件 ×'+u.part);
    const ord=n=>SCENE_W[n]!=null?SCENE_W[n]:0;
    const sc=Object.entries(u.scenes).sort((a,b)=>ord(b[0])-ord(a[0])).map(([k,v])=>k+'×'+v).join(' · ');
    return parts.join(' · ')+(sc?' · '+sc:'');
  }

  return {SCENE_W, PREFIX_W, PART_W, PCT, BOXED_PCT, RMB_TO_ZHU, FALLBACK, TIERS, computeUsage, assignTiers, decompHtml};
})();
