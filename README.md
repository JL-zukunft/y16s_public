# 燕云情报库（y16s_deal-hunting_calc）

燕云十六声微氪玩家个人情报库：**优惠计算器 + 外观图鉴 + 采集录入**三件套。图鉴与采集录入共享数据源 `yysls-db/`，计算器自包含、不依赖外部数据。
纯静态 HTML + Vanilla JS，无框架、无构建，浏览器直接打开；数据写入靠 File System Access API（Edge/Chrome）。

| 页面 | 入口 | 说明 |
|------|------|------|
| 🧮 优惠计算器 | `index.html` | 大促充值/消费方案计算（自包含，不依赖 yysls-db；2026-09-23 已摘除图鉴联动） |
| 📖 外观图鉴 | `index-pedia.html` | 套装/发型/武器外观/全部 Tab，筛选搜索详情，个人收藏记录；默认只读，`?owner=1` 进入管理模式（连接后卡片 ✏️ / 详情卡可编辑全字段 + 替换图片 + 拥有状态 + 评论，所见即所得） |
| 🎣 采集录入 | `capture/index.html` | 手动字段录入 → 待入库 → 确认入库（含进度条 + 队列图片自动取回） |

---

## 目录结构

```
y16s_deal-hunting_calc/
├── index.html                 ← 🧮 计算器（2026-09-12 由 index-v3.html v3.9 更名，旧 v1 已删）
├── index-pedia.html           ← 📖 外观图鉴（修复过 fixOrient 死循环，含自愈逻辑）
├── capture/                   ← 采集录入工具
│   ├── index.html             ← 免服务版采集工具（FSA 直写项目文件）
│   ├── server.mjs             ← 可选本地服务（图片下载绕过 CORS 的加速通道）
│   ├── update_imgmeta.py      ← 按磁盘实际图片刷新 imageMeta（PIL）
│   ├── 启动采集工具.bat        ← 启动可选本地服务（非必需）
│   ├── 下载队列图片.bat        ← 手动取回 pending-images.txt 队列（node fetch，无 CORS，最终兜底）
│   ├── 刷新图片尺寸.bat        ← 人工裁剪图片后双击：刷新 imageMeta + 重建 data.js
│   ├── pending-images.txt     ← 图片下载队列（运行时文件，已 gitignore）
│   └── _preview/              ← 页面预览截图（1-grid / 2-modal / 3-narrow）
├── yysls-db/                  ← 📦 数据层（canonical）
│   ├── yysls-db.json          ← 主数据库（items/events/articles/currencies/channels/imageMeta）
│   ├── yysls-data.js          ← 自动生成的消费端包（window.YYSLS_DB，勿手改）
│   ├── yysls-schema.json      ← 数据结构定义（JSON Schema，人机共读文档）
│   ├── yysls-mine.json / .js  ← 个人收藏记录（owner 模式写入，.js 为只读版）
│   └── yysls-pending.json     ← 扫描候选（工作文件，scan 每次覆盖）
├── scripts/
│   ├── yysls_scan.mjs         ← 官网扫描器：scan（拉取+抽候选）/ merge（审核后入库）/ build / stats
│   ├── dl_queue.mjs           ← 下载 pending-images.txt 队列（sharp 转 png → 刷 imageMeta → 重建 data.js）
│   ├── scan_orphans.mjs       ← 孤儿图片/悬空引用健康检查
│   └── img2png.mjs            ← 非 png 图片全量转 png（幂等，更新引用与 meta）
├── assets/燕云外观/            ← 外观图片（统一 png，107 张，~306MB）
├── _archive/                  ← 归档区（数据清洗前的完整备份 yysls-db.backup.2026-09-11.json）
├── package.json               ← npm scripts：scan/merge/build/stats/queue/imgmeta/orphans/img2png
└── .gitignore                 ← node_modules/ + capture/pending-*.txt
```

---

## 数据结构（yysls-db.json）

Schema 见 `yysls-db/yysls-schema.json`（v1.1）。要点：

| 表 | 说明 |
|----|------|
| `meta` | schemaVersion / game / updatedAt（精确到分钟，图鉴右上角展示）/ options.series（系列候选项，`inited` 防复活） |
| `currencies` | 19 种代币字典：id → {name, kind, note}。kind: paid(充值)/earned(玩法产出)/event(活动限定)。**14 种为奖励追踪器共用参考数据，图鉴当前只用 5 种**（长鸣珠/长鸣玉/八音窍/音玉/元） |
| `channels` | 23 个渠道字典：id → {name, kind}。7 个被 items 实际使用（shop_direct/heming/heming_wenyin/lingyin_gacha/lingyin_shop/zhanling/xiayuan_shop），其余为奖励追踪器共用参考 |
| `items` | **核心表（108 条）**。必填：id(name 去空白加 `it-` 前缀)/name/type/channel/window/images/source |
| `events` | 活动事件（7 条）：id/name/window/relatedItemIds |
| `articles` | 已收录文章台账（595 条），按 URL 去重；`imageOnly=true` 为纯长图公告（108 条，待人工处理）；itemIds 仅作索引，已清理悬空引用 |
| `imageMeta` | 图片路径 → {w, h}，消费端判断横竖卡。**注意：人工裁剪图片覆盖同名文件后需双击「刷新图片尺寸.bat」** |

### items 字段口径

- `type`：套装 52 / 武器外观 22 / 发型 14 / 伙伴配饰 7 / 特效 6 / 配饰 3 / 余息化影 2 / 玩具 2。采集工具只录前三类
- `price`：当前价；null = 非直售（战令/免费/概率掉落）。`regularPrice`：原价；两者不等即有折扣
- `window`：上架/下架时间，`end=null` 为常驻
- `listings`：**历次上架快照（不含当前，schema 1.2 起）**。返场时旧 window/price/regularPrice/discount/discountEndsAt/channel/source 推入此处，当前字段=最近一次上架；图鉴详情页展示返场史、卡片显示「🔄 返场中」徽标
- `channel`：渠道 id → `channels` 字典
- `origin`：来源分类 8 项（战令|和鸣|聆音转盘|联动|玉池|商城直售|节日|其他）；为空时图鉴按 channel/note 自动推导
- `features`：canonical 3 项（染色|裁造|上下拆分），采集工具固定勾选
- `series`：游戏内系列（风雅集/羽衣楼/兵武库/山花子/幽明录/星织东方 + 小系列）
- `confidence`：L1 机器解析待核 / L2 人工从官方公告整理 / L3 截图游戏内金标准。**库内 107 条 L2 + 1 条 L1**（it-赤焰其华炎炀，扫描入库暂无图）
- `images`：项目相对路径 `assets/燕云外观/...`，统一 png

---

## 数据流转

```
官网公告 ──scan──▶ yysls-pending.json ──人工审核 importItems──▶ merge ──▶ yysls-db.json ──build──▶ yysls-data.js
微信推文 ──ingest─▶（人工投喂链接）─── 返场/新品鉴别 ────────────┘（merge 支持 rerunOf → listings 返场史）
                                                                                         │
采集工具（FSA 直写）────── 字段 + 图片即时下载 ────────────────────────────────────────┘
     │ 即时下载失败 → pending-images.txt → 入库收尾自动重试 → 仍失败留队列（双击 bat 兜底）
     └─ 写 db.json + data.js（含 imageMeta），进度条全程可见
消费页 index-pedia.html 通过 <script src="yysls-db/yysls-data.js"> 读取 window.YYSLS_DB（index.html 计算器自包含，不读库）
```

> 返场史（listings）三条写入路径已对齐并去重（按上架时间）：采集工具（勾 🔄 返场，战令返场价按库内返场史自动判定——首次返场 68 / 二次及以后 98，无需手选档位；无同名条目入库时提示未入返场史）、图鉴编辑（改时间未勾返场会 confirm 拦截）、scan merge（rerunOf，快照带 note）。

---

## 维护操作

| 操作 | 命令 / 入口 |
|------|-------------|
| 微信推文投喂（主情报源） | 把公众号文章链接贴给 Afu（Claude 对话）→ `node scripts/yysls_scan.mjs ingest <url...>` 抓正文 → 返场/新品鉴别 → 审核清单 → merge |
| 官网增量扫描（兜底源） | `npm run scan`（或 `node scripts/yysls_scan.mjs scan 3`）→ 人工审核 pending → `npm run merge` |
| 库概况 | `npm run stats` |
| 手动重建消费端包 | `npm run build` |
| 图片队列取回 | `npm run queue` 或双击 `capture/下载队列图片.bat` |
| 裁剪后刷尺寸 | 双击 `capture/刷新图片尺寸.bat`（update_imgmeta + build） |
| 孤儿/悬空健康检查 | `npm run orphans` |
| 非 png 转 png | `npm run img2png` |
| 录入新外观 | 双击 `capture/index.html` → 连接项目文件夹 → 填表 → 确认入库（进度条 + 队列自动取回）。战令勾 🔄 返场按返场史自动定价（首次返场 68 / 二次及以后 98）；队列内显示同名匹配/⚠️无匹配警示；固有字段留空不覆盖库内旧值 |

> **例行流程（2026-09-16 定版，纯手动形态）**：官网不是最新情报源，微信官方公众号推文为主、由 Futura 在对话中投喂链接，Afu 用 `ingest` 抓取解析；官网扫描保留为兜底（存档 + 高清图）。不设定时任务。scan/ingest 为合并式 pending（保留审核状态），扫描日志 `scripts/scan-history.log` 连续 3 次 0 新文章时告警。

---

## 2026-09-12 清理记录

- **数据修复**：18 条 imageMeta 按磁盘实际尺寸刷新；features 归一（上下装拆分→上下拆分 5 条、裁造→「银浦流星」→裁造 1 条、武器重铸5种样式→并入 note 2 条）；articles.itemIds 移除悬空 151 条、events.relatedItemIds 移除悬空 8 条；schemaVersion → 1.1
- **文件清理**：删除 `assets/_trash_20260912/`（99 张孤儿图，710MB，无任何引用）；删除 `capture/pending-links.txt`（链接采集流已废弃，链接未入库）；删除旧版 `index.html`（v1，已由 index-v3 v3.9 取代）
- **结构整理**：`index-v3.html` → `index.html`（计算器成为仓库默认入口，图鉴内链接同步更新）；`yysls-db.backup.json`（清洗前 262 条完整备份）归档至 `_archive/`；`yysls-pending.json` 重置为空状态；package.json 补描述与 npm scripts；.gitignore 补队列文件
- **审计结论**：108 items / 7 events / 595 articles / 107 图 全部引用完整、无重复 id、无同名冲突、data.js 与 db.json 逐字节同步

## 已知事项（待办）

- **weapon 字段待补**：17 件武器外观缺武器类型（万籁·斩寒鳞、一念之叉、牡丹骨、相思遮、血铃铛、以荷为贵、万籁·枕翠山、万籁·游碧峰、故关万里、心狠手辣、游鳞飞浪、大满贯、清音晓、出竹意、长安不见、吹冷秋霜、粽不粽）——需游戏内核对
- **醉魂濯玉**：官网公告为限时 87 天上架（约 2026-12-07 下架），库内 `window.end` 仍为 null
- **长图文章**：108 篇 `imageOnly` 公告待人工看图整理（Futura 裁剪工作流）
- **it-赤焰其华炎炀**：L1 扫描入库，暂无图片，待采集工具补图
- **.git 历史臃肿**：仓库历史含大图（740MB），如介意可考虑重建仓库历史（需另作决定）

---

*维护者：Futura & Afu · 详细操作日志见 vault 的 [[0-help/wiki-日志.md]]*
