// ============================================================
// 燕云穿搭库数据 · window.YYSLS_STYLE
// ------------------------------------------------------------
// 写入方：index-style.html 编辑模式（?edit=1）自动写回本文件
// 手动编辑：也可以，注意保持 JSON 合法、colors 色表勿删改
// 字段说明：
//   outfits[].id        "ot-" + 序号，唯一
//   outfits[].name      穿搭名字（主色+场景+记忆点，如 月白·雪地）
//   outfits[].image     assets/穿搭/ 下的截图路径
//   outfits[].wearing   关联穿着（按部位，数组）：
//                       [{part,name,itemId}] · part: hair|top|bottom|full
//                       hair=头发 top=上衣 bottom=下装（上下拆分时） full=整套（无拆分时）
//                       itemId 非空 = 外观图鉴有该条目（可跳转）；空 = 图鉴没有，仅记名字
//   outfits[].palette   主题色卡 [{color:"#RRGGBB", name:"色名"}]
//   outfits[].hues      色系桶手动覆盖（可选；缺省时展示版自动归类）
//   outfits[].dyeCode   万象集染色码（发布过才填/空字符串）
//   outfits[].outfitCode 万象集搭配分享码（发布过才填/空字符串）
//   outfits[].note      备注，自由写（模糊检索 + 快捷词的数据源）
//   outfits[].w / .h    图片原始宽高（自动填，用于卡片比例）
//   outfits[].ctime     创建时间 YYYY-MM-DD
// ============================================================
window.YYSLS_STYLE = {
  "meta": {
    "schemaVersion": "1.0",
    "game": "燕云十六声",
    "updatedAt": "2026-10-28T21:06",
    "note": "穿搭库：与外观图鉴（index-pedia.html）关联的个人穿搭检索。主题色提取 + 传统色名匹配自动完成，可手动微调。"
  },
  "colors": [
    {
      "name": "月白",
      "hex": "#D6ECF0"
    },
    {
      "name": "霜色",
      "hex": "#E9F1F6"
    },
    {
      "name": "雪白",
      "hex": "#F0FCFF"
    },
    {
      "name": "荼白",
      "hex": "#F3F9F1"
    },
    {
      "name": "缟色",
      "hex": "#F2ECDE"
    },
    {
      "name": "鹅黄",
      "hex": "#FFF143"
    },
    {
      "name": "缃黄",
      "hex": "#F0C239"
    },
    {
      "name": "杏黄",
      "hex": "#FFA631"
    },
    {
      "name": "橘黄",
      "hex": "#F28E00"
    },
    {
      "name": "琥珀",
      "hex": "#CA6924"
    },
    {
      "name": "明黄",
      "hex": "#FFDD00"
    },
    {
      "name": "姜黄",
      "hex": "#E2C027"
    },
    {
      "name": "朱红",
      "hex": "#FF4C00"
    },
    {
      "name": "绯红",
      "hex": "#C83C23"
    },
    {
      "name": "银朱",
      "hex": "#BF242A"
    },
    {
      "name": "石榴红",
      "hex": "#F20C00"
    },
    {
      "name": "枣红",
      "hex": "#7C1823"
    },
    {
      "name": "胭脂",
      "hex": "#9D2933"
    },
    {
      "name": "绛红",
      "hex": "#8B1A1A"
    },
    {
      "name": "绛紫",
      "hex": "#8C4356"
    },
    {
      "name": "桃红",
      "hex": "#F47983"
    },
    {
      "name": "粉红",
      "hex": "#FFB3A7"
    },
    {
      "name": "藕荷",
      "hex": "#E4C6D0"
    },
    {
      "name": "丁香",
      "hex": "#CCA4E3"
    },
    {
      "name": "紫檀",
      "hex": "#4C221B"
    },
    {
      "name": "黛紫",
      "hex": "#574266"
    },
    {
      "name": "靛蓝",
      "hex": "#065279"
    },
    {
      "name": "宝蓝",
      "hex": "#4B5CC4"
    },
    {
      "name": "群青",
      "hex": "#4C8DAE"
    },
    {
      "name": "藏青",
      "hex": "#2E4E7E"
    },
    {
      "name": "黛蓝",
      "hex": "#425066"
    },
    {
      "name": "石青",
      "hex": "#1685A9"
    },
    {
      "name": "天青",
      "hex": "#2DCFCA"
    },
    {
      "name": "竹青",
      "hex": "#789262"
    },
    {
      "name": "松绿",
      "hex": "#057748"
    },
    {
      "name": "石绿",
      "hex": "#16A951"
    },
    {
      "name": "湖绿",
      "hex": "#26C6DA"
    },
    {
      "name": "碧色",
      "hex": "#1BD1A5"
    },
    {
      "name": "玉色",
      "hex": "#2EDFA3"
    },
    {
      "name": "青白",
      "hex": "#C0EBD7"
    },
    {
      "name": "天水碧",
      "hex": "#9BE3D8"
    },
    {
      "name": "缥色",
      "hex": "#7FECAD"
    },
    {
      "name": "葱绿",
      "hex": "#9ED900"
    },
    {
      "name": "豆绿",
      "hex": "#96CE54"
    },
    {
      "name": "艾绿",
      "hex": "#A4E2C6"
    },
    {
      "name": "秋香",
      "hex": "#D9B611"
    },
    {
      "name": "墨色",
      "hex": "#50616D"
    },
    {
      "name": "玄色",
      "hex": "#622A1D"
    },
    {
      "name": "乌黑",
      "hex": "#392F41"
    },
    {
      "name": "鸦青",
      "hex": "#424C50"
    },
    {
      "name": "苍色",
      "hex": "#75878A"
    },
    {
      "name": "青灰",
      "hex": "#2B333E"
    },
    {
      "name": "银灰",
      "hex": "#918E86"
    },
    {
      "name": "驼色",
      "hex": "#B26F46"
    },
    {
      "name": "赭石",
      "hex": "#845A33"
    },
    {
      "name": "棕褐",
      "hex": "#6C4E3A"
    },
    {
      "name": "栗色",
      "hex": "#60281E"
    },
    {
      "name": "檀色",
      "hex": "#B36D61"
    },
    {
      "name": "蜜合",
      "hex": "#F2B99C"
    },
    {
      "name": "藕色",
      "hex": "#EDD1D8"
    },
    {
      "name": "蟹壳青",
      "hex": "#81776E"
    },
    {
      "name": "竹月",
      "hex": "#7F9FAF"
    },
    {
      "name": "缥碧",
      "hex": "#A6CFC8"
    },
    {
      "name": "天缥",
      "hex": "#A9D1D7"
    },
    {
      "name": "银红",
      "hex": "#F05654"
    },
    {
      "name": "海棠红",
      "hex": "#DB5A6B"
    },
    {
      "name": "鹅冠红",
      "hex": "#D11A2D"
    },
    {
      "name": "曙色",
      "hex": "#BD6758"
    },
    {
      "name": "铜绿",
      "hex": "#549688"
    },
    {
      "name": "枇杷黄",
      "hex": "#FCA106"
    },
    {
      "name": "松花",
      "hex": "#BCE672"
    },
    {
      "name": "库金",
      "hex": "#A48945"
    },
    {
      "name": "泥金",
      "hex": "#B77D41"
    },
    {
      "name": "银白",
      "hex": "#F1F0ED"
    },
    {
      "name": "素色",
      "hex": "#E0F0E9"
    }
  ],
  "outfits": [
    {
      "id": "ot-002",
      "name": "新燕",
      "image": "assets/穿搭/ot-202610081541-江湖新燕-清河剧情.png",
      "wearing": [
        {
          "part": "hair",
          "name": "侠声清霁",
          "itemId": "it-侠声清霁"
        },
        {
          "part": "full",
          "name": "游侠子",
          "itemId": null
        }
      ],
      "tags": [
        "主线",
        "大世界跑图",
        "清河",
        "主线·神仙不渡·又见新来燕",
        "主线·神仙不渡·匹马映林嘶·上",
        "主线·神仙不渡·匹马映林嘶·下",
        "主线·神仙不渡·菱花尘满",
        "主线·神仙不渡·为谁归去"
      ],
      "palette": [
        {
          "color": "#91817D",
          "name": "银灰"
        },
        {
          "color": "#F3EFED",
          "name": "银白"
        },
        {
          "color": "#2D2622",
          "name": "青灰"
        }
      ],
      "hues": [
        "黑",
        "白"
      ],
      "dyeCode": "",
      "outfitCode": "SHAREd8042e65754959b5",
      "note": "就这样穿着初始赠送套跑清河过剧情，我们就是最靓的瓜~",
      "w": 1350,
      "h": 1800,
      "ctime": "2026-10-08"
    },
    {
      "id": "ot-003",
      "name": "秋江兰",
      "image": "assets/穿搭/ot-202610081551-清河跑图穿.png",
      "wearing": [
        {
          "part": "full",
          "name": "秋江兰",
          "itemId": null
        },
        {
          "part": "hair",
          "name": "发型一",
          "itemId": null
        }
      ],
      "tags": [
        "清河",
        "大世界跑图"
      ],
      "palette": [
        {
          "color": "#E6E0DD",
          "name": "缟色"
        },
        {
          "color": "#625B61",
          "name": "墨色"
        },
        {
          "color": "#6E7882",
          "name": "苍色"
        }
      ],
      "hues": [
        "白"
      ],
      "dyeCode": "",
      "outfitCode": "SHARE625863467d399d32",
      "note": "小瓜衣服放大版，初出茅庐的感觉特别对，利落跑图升探索，清河衣服+1",
      "w": 1350,
      "h": 1800,
      "ctime": "2026-10-08"
    },
    {
      "id": "ot-008",
      "name": "回乡",
      "image": "assets/穿搭/ot-202610081554-清河-再回乡.png",
      "wearing": [
        {
          "part": "hair",
          "name": "颂吉呈祥",
          "itemId": "it-颂吉呈祥"
        },
        {
          "part": "full",
          "name": "侠声清霁",
          "itemId": "it-侠声清霁"
        }
      ],
      "tags": [
        "大世界跑图",
        "残章",
        "清河"
      ],
      "palette": [
        {
          "color": "#998366",
          "name": "蟹壳青"
        },
        {
          "color": "#CCB7AF",
          "name": "蜜合"
        }
      ],
      "hues": [
        "绿"
      ],
      "dyeCode": "",
      "outfitCode": "SHARE586a34b447a00359",
      "note": "清河探索套，偏山野乡下的感觉，再回清河过剧情的时候用了一下",
      "w": 1350,
      "h": 1800,
      "ctime": "2026-10-08"
    },
    {
      "id": "ot-004",
      "name": "繁花谍影",
      "image": "assets/穿搭/ot-202610081605-开封-繁花谍影限定.png",
      "wearing": [
        {
          "part": "hair",
          "name": "长歌羡鱼",
          "itemId": "it-长歌羡鱼"
        },
        {
          "part": "full",
          "name": "上青云",
          "itemId": "it-上青云"
        }
      ],
      "tags": [
        "开封",
        "残章"
      ],
      "palette": [
        {
          "color": "#EDBE47",
          "name": "缃黄"
        },
        {
          "color": "#CA7E18",
          "name": "琥珀"
        }
      ],
      "hues": [
        "黄"
      ],
      "dyeCode": "",
      "outfitCode": "SHARE3f4328bd39b38515",
      "note": "开封繁花谍影限定仿色搭配，俺是贵少爷",
      "w": 1350,
      "h": 1800,
      "ctime": "2026-10-08"
    },
    {
      "id": "ot-005",
      "name": "开封客",
      "image": "assets/穿搭/ot-202610081601-开封主线.png",
      "wearing": [
        {
          "part": "hair",
          "name": "骊山猎",
          "itemId": "it-骊山猎"
        },
        {
          "part": "full",
          "name": "上青云",
          "itemId": "it-上青云"
        }
      ],
      "tags": [
        "主线",
        "开封",
        "大世界跑图",
        "主线·天地熔炉·群英荟萃",
        "主线·天地熔炉·故人重逢",
        "主线·天地熔炉·平地风波",
        "主线·天地熔炉·大义熔炉·上",
        "主线·天地熔炉·大义熔炉·中",
        "主线·天地熔炉·大义熔炉·下"
      ],
      "palette": [
        {
          "color": "#7D7578",
          "name": "蟹壳青"
        },
        {
          "color": "#7D6654",
          "name": "蟹壳青"
        },
        {
          "color": "#C79E6E",
          "name": "檀色"
        },
        {
          "color": "#090A0B",
          "name": "紫檀"
        }
      ],
      "hues": [
        "绿",
        "蓝"
      ],
      "dyeCode": "",
      "outfitCode": "SHARE5e8fe864f38a5155",
      "note": "开封剧情专用，相当适配，既有游侠的潇洒同时也有进城的板正搭配",
      "w": 1350,
      "h": 1800,
      "ctime": "2026-10-08"
    },
    {
      "id": "ot-006",
      "name": "大内",
      "image": "assets/穿搭/ot-202610081609-进皇宫.png",
      "wearing": [
        {
          "part": "hair",
          "name": "赤心一寸",
          "itemId": "it-赤心一寸"
        },
        {
          "part": "full",
          "name": "上青云",
          "itemId": "it-上青云"
        }
      ],
      "tags": [
        "开封皇宫",
        "大世界跑图",
        "开封皇宫·前朝",
        "残章"
      ],
      "palette": [
        {
          "color": "#71332D",
          "name": "玄色"
        },
        {
          "color": "#150F0E",
          "name": "紫檀"
        }
      ],
      "dyeCode": "",
      "outfitCode": "SHARE3afd878ceb9b78c3",
      "note": "开封皇宫剧情穿搭，利落的同时不是文气",
      "w": 1350,
      "h": 1800,
      "ctime": "2026-10-08"
    },
    {
      "id": "ot-007",
      "name": "文辰",
      "image": "assets/穿搭/ot-202610101652-20261010163026.png",
      "wearing": [
        {
          "part": "top",
          "name": "财星高照",
          "itemId": "it-财星高照"
        },
        {
          "part": "bottom",
          "name": "纵横",
          "itemId": "it-纵横"
        },
        {
          "part": "hair",
          "name": "小富为安",
          "itemId": "it-小富为安"
        }
      ],
      "tags": [
        "江湖百态",
        "开封皇宫",
        "开封皇宫·后寝",
        "开封皇宫·内诸司",
        "江湖百态·闲情"
      ],
      "palette": [
        {
          "color": "#DED6D6",
          "name": "藕色"
        },
        {
          "color": "#CDAE7A",
          "name": "蜜合"
        }
      ],
      "hues": [
        "紫"
      ],
      "dyeCode": "",
      "outfitCode": "",
      "note": "皇宫宫墙内漫步一下，COS下文臣，拍拍照感觉不错",
      "w": 1218,
      "h": 1624,
      "ctime": "2026-10-08"
    },
    {
      "id": "ot-009",
      "name": "孟春",
      "image": "assets/穿搭/ot-202610142143-20261014195442.png",
      "wearing": [
        {
          "part": "hair",
          "name": "棠棣映夏",
          "itemId": "it-棠棣映夏"
        },
        {
          "part": "top",
          "name": "茯尘无寄",
          "itemId": "it-茯尘无寄"
        },
        {
          "part": "bottom",
          "name": "南风熏",
          "itemId": "it-南风熏"
        }
      ],
      "tags": [
        "江湖百态",
        "江南",
        "江南·杭州",
        "开封皇宫",
        "开封皇宫·后寝",
        "江湖百态·闲情"
      ],
      "palette": [
        {
          "color": "#EFDDC4",
          "name": "藕色"
        },
        {
          "color": "#EFD8DC",
          "name": "藕色"
        },
        {
          "color": "#BB99A9",
          "name": "银灰"
        },
        {
          "color": "#939DA1",
          "name": "竹月"
        }
      ],
      "hues": [
        "红"
      ],
      "dyeCode": "SHARE7d80885b5e390e3b",
      "outfitCode": "SHAREf530e7c3b972a333",
      "note": "粉嫩穿搭 · 有，温婉系春意盎然，拍照专属",
      "w": 1282,
      "h": 1710,
      "ctime": "2026-10-14"
    },
    {
      "id": "ot-010",
      "name": "刺客",
      "image": "assets/穿搭/ot-202610142147-20261014195547.png",
      "wearing": [
        {
          "part": "hair",
          "name": "玉宇璇玑",
          "itemId": "it-玉宇璇玑"
        },
        {
          "part": "full",
          "name": "赤沙",
          "itemId": "it-赤沙"
        },
        {
          "part": "top",
          "name": "听天命",
          "itemId": "it-听天命"
        }
      ],
      "tags": [
        "打架"
      ],
      "palette": [
        {
          "color": "#C59451",
          "name": "泥金"
        },
        {
          "color": "#3F362D",
          "name": "乌黑"
        }
      ],
      "hues": [
        "黑"
      ],
      "dyeCode": "SHARE5cad17fad97b5674",
      "outfitCode": "",
      "note": "重生之我在大宋当刺客，兜帽下是绝美露背和超绝腰臀腿建模",
      "w": 1282,
      "h": 1710,
      "ctime": "2026-10-14"
    },
    {
      "id": "ot-011",
      "name": "舞春",
      "image": "assets/穿搭/ot-202610142150-20261014195915.png",
      "wearing": [
        {
          "part": "hair",
          "name": "舞春裳",
          "itemId": "it-舞春裳"
        },
        {
          "part": "top",
          "name": "舞春裳",
          "itemId": "it-舞春裳"
        },
        {
          "part": "bottom",
          "name": "纵横",
          "itemId": "it-纵横"
        }
      ],
      "tags": [
        "戏乐"
      ],
      "palette": [
        {
          "color": "#D0DCD8",
          "name": "青白"
        },
        {
          "color": "#F2F1F2",
          "name": "银白"
        }
      ],
      "hues": [
        "蓝"
      ],
      "dyeCode": "",
      "outfitCode": "SHARE29e810eda5258f83",
      "note": "一些美丽的水袖，古风抒情舞蹈服",
      "w": 1282,
      "h": 1710,
      "ctime": "2026-10-14"
    },
    {
      "id": "ot-012",
      "name": "胡璇",
      "image": "assets/穿搭/ot-202610142152-20261014204420.png",
      "wearing": [
        {
          "part": "hair",
          "name": "旋舞流华",
          "itemId": "it-旋舞流华"
        },
        {
          "part": "full",
          "name": "旋舞流华",
          "itemId": "it-旋舞流华"
        }
      ],
      "tags": [
        "河西",
        "戏乐",
        "河西·玉门关",
        "河西·凉州"
      ],
      "palette": [
        {
          "color": "#850002",
          "name": "绛红"
        },
        {
          "color": "#DFC388",
          "name": "蜜合"
        },
        {
          "color": "#B57322",
          "name": "琥珀"
        },
        {
          "color": "#C3A15E",
          "name": "库金"
        }
      ],
      "hues": [
        "黄"
      ],
      "dyeCode": "",
      "outfitCode": "SHAREf801f171009f9146",
      "note": "河西探索套，美丽胡风，大漠上的舞姬（虽然到凉州才拿到doge",
      "w": 1282,
      "h": 1710,
      "ctime": "2026-10-14"
    },
    {
      "id": "ot-013",
      "name": "穷奇师",
      "image": "assets/穿搭/ot-202610142154-20261014204510.png",
      "wearing": [
        {
          "part": "hair",
          "name": "风入画",
          "itemId": "it-风入画"
        },
        {
          "part": "top",
          "name": "染青苍",
          "itemId": "it-染青苍"
        },
        {
          "part": "bottom",
          "name": "染青苍",
          "itemId": "it-染青苍"
        }
      ],
      "tags": [
        "江湖百态",
        "不见山",
        "江湖百态·行当职业"
      ],
      "palette": [
        {
          "color": "#4D6953",
          "name": "墨色"
        },
        {
          "color": "#524741",
          "name": "鸦青"
        },
        {
          "color": "#5E4A36",
          "name": "棕褐"
        }
      ],
      "hues": [
        "绿"
      ],
      "dyeCode": "",
      "outfitCode": "SHARE8f46e516d4392f02",
      "note": "COS一下穷奇师",
      "w": 1282,
      "h": 1710,
      "ctime": "2026-10-14"
    },
    {
      "id": "ot-014",
      "name": "女娲",
      "image": "assets/穿搭/ot-202610142156-20261014204753.png",
      "wearing": [
        {
          "part": "hair",
          "name": "松花玉兰",
          "itemId": "it-松花玉兰"
        },
        {
          "part": "top",
          "name": "茯尘无寄",
          "itemId": "it-茯尘无寄"
        },
        {
          "part": "bottom",
          "name": "茯尘无寄",
          "itemId": "it-茯尘无寄"
        }
      ],
      "tags": [
        "江湖百态",
        "江湖百态·配色COS"
      ],
      "palette": [
        {
          "color": "#E3DABC",
          "name": "藕荷"
        },
        {
          "color": "#F3E4CB",
          "name": "缟色"
        },
        {
          "color": "#A6B227",
          "name": "库金"
        }
      ],
      "hues": [
        "绿"
      ],
      "dyeCode": "SHARE358d0408993d0977",
      "outfitCode": "SHARE0fd4eb49f7ed0561",
      "note": "COS下女娲，make松花玉兰的头发great again，灵感来源：东方神娃",
      "w": 1218,
      "h": 1624,
      "ctime": "2026-10-14"
    },
    {
      "id": "ot-015",
      "name": "影",
      "image": "assets/穿搭/ot-202610142201-20261014204853.png",
      "wearing": [
        {
          "part": "hair",
          "name": "霜寒天泉",
          "itemId": "it-霜寒天泉"
        },
        {
          "part": "full",
          "name": "剑影藏心",
          "itemId": "it-剑影藏心"
        }
      ],
      "tags": [
        "打架",
        "残章",
        "江南",
        "江南·杭州"
      ],
      "palette": [
        {
          "color": "#842624",
          "name": "枣红"
        },
        {
          "color": "#000000",
          "name": "紫檀"
        },
        {
          "color": "#D3CDCA",
          "name": "藕荷"
        }
      ],
      "hues": [
        "黑"
      ],
      "dyeCode": "SHAREbba516b48c18e0a5",
      "outfitCode": "SHARE4d349632b7e99bb0",
      "note": "剑影藏心和竹林就是最搭的！！！原色或者黑白过大雾幽篁打铃铃，这个武侠吃美了，还有这个京娘的帽子也是，仿佛本就是一套一般",
      "w": 1282,
      "h": 1710,
      "ctime": "2026-10-14"
    },
    {
      "id": "ot-016",
      "name": "力",
      "image": "assets/穿搭/ot-202610142207-20261014205024.png",
      "wearing": [
        {
          "part": "hair",
          "name": "野镖",
          "itemId": "it-野镖"
        },
        {
          "part": "top",
          "name": "无拘",
          "itemId": "it-无拘"
        },
        {
          "part": "bottom",
          "name": "连衍墨山",
          "itemId": "it-墨山道"
        }
      ],
      "tags": [
        "打架"
      ],
      "palette": [
        {
          "color": "#872F26",
          "name": "绛红"
        },
        {
          "color": "#895321",
          "name": "赭石"
        },
        {
          "color": "#C4B180",
          "name": "蜜合"
        }
      ],
      "hues": [
        "红"
      ],
      "dyeCode": "",
      "outfitCode": "SHARE8f89afbaed326123",
      "note": "已成为止戈专用套，这套打架太利索了，+头饰山君不见+背饰矢箙，俺就是十里八乡最权威的猎手",
      "w": 1218,
      "h": 1624,
      "ctime": "2026-10-14"
    },
    {
      "id": "ot-017",
      "name": "八仙",
      "image": "assets/穿搭/ot-202610142213-八仙.png",
      "wearing": [
        {
          "part": "hair",
          "name": "探梅逢春",
          "itemId": "it-探梅逢春"
        },
        {
          "part": "top",
          "name": "雁还乡",
          "itemId": "it-雁还乡"
        },
        {
          "part": "bottom",
          "name": "雁还乡",
          "itemId": "it-雁还乡"
        }
      ],
      "tags": [
        "残章",
        "青州",
        "青州·东岳"
      ],
      "palette": [
        {
          "color": "#2A83AB",
          "name": "石青"
        },
        {
          "color": "#B8BEBD",
          "name": "缥碧"
        },
        {
          "color": "#175C7C",
          "name": "靛蓝"
        },
        {
          "color": "#7F3532",
          "name": "胭脂"
        }
      ],
      "hues": [
        "青",
        "蓝"
      ],
      "dyeCode": "SHARE89cf1b34dbc12072",
      "outfitCode": "SHARE12325cf062353f1c",
      "note": "侠迹卷二 · 八仙过海咩~很适合海边的一套\nPS：空山寻梅这个头利用率太高了",
      "w": 1350,
      "h": 1800,
      "ctime": "2026-10-14"
    },
    {
      "id": "ot-018",
      "name": "镇远",
      "image": "assets/穿搭/ot-202610142215-镖局.png",
      "wearing": [
        {
          "part": "hair",
          "name": "霜寒天泉",
          "itemId": "it-霜寒天泉"
        },
        {
          "part": "top",
          "name": "颂吉呈祥",
          "itemId": "it-颂吉呈祥"
        },
        {
          "part": "bottom",
          "name": "无拘",
          "itemId": "it-无拘"
        }
      ],
      "tags": [
        "江湖百态",
        "江南",
        "江南·杭州",
        "江湖百态·行当职业"
      ],
      "palette": [
        {
          "color": "#514232",
          "name": "棕褐"
        },
        {
          "color": "#A5A382",
          "name": "银灰"
        },
        {
          "color": "#6A6A4C",
          "name": "棕褐"
        },
        {
          "color": "#756553",
          "name": "蟹壳青"
        }
      ],
      "hues": [
        "绿"
      ],
      "dyeCode": "",
      "outfitCode": "SHAREcc64792e079fd1b0",
      "note": "镇远镖局走镖了嘿~接单了接单了，童叟无欺哈",
      "w": 1350,
      "h": 1800,
      "ctime": "2026-10-14"
    },
    {
      "id": "ot-019",
      "name": "滹沱",
      "image": "assets/穿搭/ot-202610142218-不见山-滹沱.png",
      "wearing": [
        {
          "part": "hair",
          "name": "枯风夜阑",
          "itemId": "it-枯风夜阑"
        },
        {
          "part": "top",
          "name": "枯风夜阑",
          "itemId": "it-枯风夜阑"
        },
        {
          "part": "bottom",
          "name": "枯风夜阑",
          "itemId": "it-枯风夜阑"
        }
      ],
      "tags": [
        "不见山",
        "大世界跑图",
        "不见山·滹沱",
        "残章"
      ],
      "palette": [
        {
          "color": "#896989",
          "name": "蟹壳青"
        },
        {
          "color": "#2D2018",
          "name": "紫檀"
        }
      ],
      "hues": [
        "紫"
      ],
      "dyeCode": "",
      "outfitCode": "SHAREe219745f29fd1c9e",
      "note": "滹沱地图特定服装，啊中渡桥，啊又开始不得劲了，这是一套设计的很好但是因为剧情过于刀人而在平时根本不会穿的衣服，其实很利落",
      "w": 1350,
      "h": 1800,
      "ctime": "2026-10-14"
    },
    {
      "id": "ot-020",
      "name": "入门",
      "image": "assets/穿搭/ot-202610142224-不见山-入山门.png",
      "wearing": [
        {
          "part": "hair",
          "name": "霜寒天泉",
          "itemId": "it-霜寒天泉"
        },
        {
          "part": "top",
          "name": "岁时安",
          "itemId": "it-岁时安"
        },
        {
          "part": "bottom",
          "name": "岁时安",
          "itemId": "it-岁时安"
        }
      ],
      "tags": [
        "不见山",
        "大世界跑图",
        "主线",
        "主线·金乌衔枝·离人故事",
        "不见山·天陉",
        "不见山·绥乡",
        "主线·金乌衔枝·桃源迷津"
      ],
      "palette": [
        {
          "color": "#827454",
          "name": "蟹壳青"
        },
        {
          "color": "#4E3629",
          "name": "紫檀"
        },
        {
          "color": "#6B4A38",
          "name": "棕褐"
        },
        {
          "color": "#585D4E",
          "name": "鸦青"
        }
      ],
      "hues": [
        "绿"
      ],
      "dyeCode": "",
      "outfitCode": "SHARE56d2fd9b42b592fb",
      "note": "不见山入山，过主线开头剧情和侠迹一二三，清地图跑起来也很利索很融入，老墨门游客了哈哈哈哈",
      "w": 1350,
      "h": 1800,
      "ctime": "2026-10-14"
    },
    {
      "id": "ot-021",
      "name": "采荷",
      "image": "assets/穿搭/ot-202610142228-采莲女.png",
      "wearing": [
        {
          "part": "hair",
          "name": "南风熏",
          "itemId": "it-南风熏"
        },
        {
          "part": "top",
          "name": "粽叶青黄",
          "itemId": "it-粽叶青黄"
        },
        {
          "part": "bottom",
          "name": "粽叶青黄",
          "itemId": "it-粽叶青黄"
        }
      ],
      "tags": [
        "大世界跑图",
        "江南",
        "江南·杭州"
      ],
      "palette": [
        {
          "color": "#F2E6D9",
          "name": "缟色"
        },
        {
          "color": "#D26533",
          "name": "琥珀"
        },
        {
          "color": "#517475",
          "name": "墨色"
        },
        {
          "color": "#D2862E",
          "name": "琥珀"
        },
        {
          "color": "#584B04",
          "name": "玄色"
        }
      ],
      "hues": [
        "橙"
      ],
      "dyeCode": "",
      "outfitCode": "SHARE1aa13dc2affe560b",
      "note": "江南地图采集套，江南可采莲，莲叶何田田，鱼戏莲叶间~荷叶和小鱼头饰更配哦~",
      "w": 1350,
      "h": 1800,
      "ctime": "2026-10-14"
    },
    {
      "id": "ot-022",
      "name": "钰山",
      "image": "assets/穿搭/ot-202610142231-陈叔.png",
      "wearing": [
        {
          "part": "hair",
          "name": "玉山松",
          "itemId": "it-玉山松"
        },
        {
          "part": "top",
          "name": "山君啸林",
          "itemId": "it-山君啸林"
        },
        {
          "part": "bottom",
          "name": "少年行",
          "itemId": "it-少年行"
        }
      ],
      "tags": [
        "残章",
        "江南",
        "江南·杭州"
      ],
      "palette": [
        {
          "color": "#969477",
          "name": "银灰"
        },
        {
          "color": "#AB8061",
          "name": "檀色"
        }
      ],
      "hues": [
        "绿"
      ],
      "dyeCode": "",
      "outfitCode": "SHARE06b1bb38af4b6a1c",
      "note": "无明春山镇守开头过剧情来着，实现和陈叔穿的华丽度差不多，不愧是我们回春堂，江南老钱就是不一样",
      "w": 1350,
      "h": 1800,
      "ctime": "2026-10-14"
    },
    {
      "id": "ot-023",
      "name": "厨娘",
      "image": "assets/穿搭/ot-202610142234-厨娘.png",
      "wearing": [
        {
          "part": "hair",
          "name": "春庭归鹤",
          "itemId": "it-春庭归鹤"
        },
        {
          "part": "top",
          "name": "山中人",
          "itemId": "it-山中人"
        },
        {
          "part": "bottom",
          "name": "锦绣烟波",
          "itemId": "it-锦绣烟波"
        }
      ],
      "tags": [
        "江湖百态",
        "江南",
        "江南·杭州",
        "江湖百态·行当职业"
      ],
      "palette": [
        {
          "color": "#EFE6E1",
          "name": "缟色"
        },
        {
          "color": "#895B2B",
          "name": "赭石"
        },
        {
          "color": "#160F0B",
          "name": "紫檀"
        },
        {
          "color": "#BF903F",
          "name": "泥金"
        }
      ],
      "hues": [
        "黄"
      ],
      "dyeCode": "",
      "outfitCode": "SHARE81e19558fa90b2f0",
      "note": "美味震撼小游戏穿搭~俺是这里最严厉也是嘴最刁的厨娘",
      "w": 1350,
      "h": 1800,
      "ctime": "2026-10-14"
    },
    {
      "id": "ot-024",
      "name": "小衙",
      "image": "assets/穿搭/ot-202610142238-官衙.png",
      "wearing": [
        {
          "part": "hair",
          "name": "赤心一寸",
          "itemId": "it-赤心一寸"
        },
        {
          "part": "top",
          "name": "财星高照",
          "itemId": "it-财星高照"
        },
        {
          "part": "bottom",
          "name": "赤心一寸",
          "itemId": "it-赤心一寸"
        }
      ],
      "tags": [
        "江湖百态",
        "江南",
        "江南·杭州",
        "江湖百态·行当职业"
      ],
      "palette": [
        {
          "color": "#808850",
          "name": "竹青"
        },
        {
          "color": "#3D431F",
          "name": "紫檀"
        },
        {
          "color": "#CBAC75",
          "name": "蜜合"
        }
      ],
      "hues": [
        "绿"
      ],
      "dyeCode": "",
      "outfitCode": "SHARE91b52731fc71c822",
      "note": "背上小包去上衙，今日怎么还要上班啊",
      "w": 1350,
      "h": 1800,
      "ctime": "2026-10-14"
    },
    {
      "id": "ot-025",
      "name": "闺中",
      "image": "assets/穿搭/ot-202610142241-闺中.png",
      "wearing": [
        {
          "part": "hair",
          "name": "南风熏",
          "itemId": "it-南风熏"
        },
        {
          "part": "top",
          "name": "南风熏",
          "itemId": "it-南风熏"
        },
        {
          "part": "bottom",
          "name": "茯尘无寄",
          "itemId": "it-茯尘无寄"
        }
      ],
      "tags": [
        "江湖百态",
        "江南",
        "江南·杭州",
        "江湖百态·闲情"
      ],
      "palette": [
        {
          "color": "#F0CD86",
          "name": "蜜合"
        },
        {
          "color": "#ED0F17",
          "name": "石榴红"
        },
        {
          "color": "#C05449",
          "name": "曙色"
        },
        {
          "color": "#DB7065",
          "name": "海棠红"
        },
        {
          "color": "#B4BEB1",
          "name": "缥碧"
        },
        {
          "color": "#3DA77B",
          "name": "铜绿"
        }
      ],
      "hues": [
        "红"
      ],
      "dyeCode": "",
      "outfitCode": "SHARE0da42c63b71dfd94",
      "note": "适合江南荡秋千~走走路还行",
      "w": 1350,
      "h": 1800,
      "ctime": "2026-10-14"
    },
    {
      "id": "ot-026",
      "name": "寒姨",
      "image": "assets/穿搭/ot-202610142243-寒姨.png",
      "wearing": [
        {
          "part": "hair",
          "name": "发型·二",
          "itemId": null
        },
        {
          "part": "top",
          "name": "燕燕于飞",
          "itemId": "it-燕燕于飞"
        },
        {
          "part": "bottom",
          "name": "燕燕于飞",
          "itemId": "it-燕燕于飞"
        }
      ],
      "tags": [
        "江湖百态",
        "江湖百态·配色COS"
      ],
      "palette": [
        {
          "color": "#B82F31",
          "name": "银朱"
        },
        {
          "color": "#5D030C",
          "name": "紫檀"
        },
        {
          "color": "#BA935B",
          "name": "库金"
        }
      ],
      "hues": [
        "红"
      ],
      "dyeCode": "",
      "outfitCode": "SHARE535a380e5b4a7b7e",
      "note": "COS一下寒姨，记得叫老板，不要叫老板娘，啊家慈你在哪~",
      "w": 1350,
      "h": 1800,
      "ctime": "2026-10-14"
    },
    {
      "id": "ot-027",
      "name": "凉州",
      "image": "assets/穿搭/ot-202610142247-河西-凉州.png",
      "wearing": [
        {
          "part": "hair",
          "name": "苍狼",
          "itemId": "it-苍狼"
        },
        {
          "part": "full",
          "name": "蝎心蛟影",
          "itemId": "it-蝎心蛟影"
        },
        {
          "part": "top",
          "name": "骊山猎",
          "itemId": "it-骊山猎"
        }
      ],
      "tags": [
        "大世界跑图",
        "河西",
        "主线",
        "主线·问月长安·凉州曲",
        "主线·问月长安·纸月亮",
        "河西·凉州"
      ],
      "palette": [
        {
          "color": "#293B6F",
          "name": "藏青"
        },
        {
          "color": "#A73435",
          "name": "胭脂"
        },
        {
          "color": "#E8E1DD",
          "name": "缟色"
        }
      ],
      "hues": [
        "蓝",
        "白"
      ],
      "dyeCode": "ARTaRyRRQ4wv4Qdqj63",
      "outfitCode": "SHARE3f840194ef39d23b",
      "note": "江湖侠气很好的一套，适配凉州雪景过剧情\n蓝白红色搭配就是最棒的，蝎心把蛇去掉之后跑图很舒适啊",
      "w": 1350,
      "h": 1800,
      "ctime": "2026-10-14"
    },
    {
      "id": "ot-028",
      "name": "秦川",
      "image": "assets/穿搭/ot-202610142250-河西-秦川.png",
      "wearing": [
        {
          "part": "hair",
          "name": "霜寒天泉",
          "itemId": "it-霜寒天泉"
        },
        {
          "part": "top",
          "name": "雁还乡",
          "itemId": "it-雁还乡"
        },
        {
          "part": "bottom",
          "name": "雁还乡",
          "itemId": "it-雁还乡"
        }
      ],
      "tags": [
        "河西",
        "大世界跑图",
        "河西·秦川",
        "残章"
      ],
      "palette": [
        {
          "color": "#93A189",
          "name": "银灰"
        },
        {
          "color": "#2F413C",
          "name": "青灰"
        },
        {
          "color": "#9FB99E",
          "name": "竹月"
        },
        {
          "color": "#CEB37D",
          "name": "蜜合"
        }
      ],
      "hues": [
        "绿",
        "青"
      ],
      "dyeCode": "SHARE428b17cb9e4dae53",
      "outfitCode": "SHARE47955ce44a7d06f2",
      "note": "雁还乡太适合大草原了，我的秦川专属套，行路客的帽子很适合最后过剧情",
      "w": 1350,
      "h": 1800,
      "ctime": "2026-10-14"
    },
    {
      "id": "ot-029",
      "name": "入梦",
      "image": "assets/穿搭/ot-202610142252-河西入梦.png",
      "wearing": [
        {
          "part": "hair",
          "name": "玉宇璇玑",
          "itemId": "it-玉宇璇玑"
        },
        {
          "part": "full",
          "name": "红尘书",
          "itemId": "it-红尘书"
        }
      ],
      "tags": [
        "河西",
        "河西·载梦枕",
        "江湖百态",
        "残章",
        "江湖百态·角色同款"
      ],
      "palette": [
        {
          "color": "#EFE6E3",
          "name": "缟色"
        },
        {
          "color": "#C8B3AC",
          "name": "蜜合"
        },
        {
          "color": "#0B0708",
          "name": "紫檀"
        }
      ],
      "hues": [
        "白"
      ],
      "dyeCode": "",
      "outfitCode": "SHARE88c5720ae975c39b",
      "note": "一块钱交个朋友，其实是河西入梦开头的剧情动画同款染色",
      "w": 1350,
      "h": 1800,
      "ctime": "2026-10-14"
    },
    {
      "id": "ot-030",
      "name": "玉门关",
      "image": "assets/穿搭/ot-202610142256-河西-玉门关.png",
      "wearing": [
        {
          "part": "hair",
          "name": "骊山猎",
          "itemId": "it-骊山猎"
        },
        {
          "part": "full",
          "name": "骊山猎",
          "itemId": "it-骊山猎"
        }
      ],
      "tags": [
        "主线",
        "大世界跑图",
        "河西",
        "河西·玉门关",
        "主线·问月长安·麻布袋"
      ],
      "palette": [
        {
          "color": "#91A3AA",
          "name": "竹月"
        },
        {
          "color": "#B6C6CC",
          "name": "缥碧"
        },
        {
          "color": "#810C11",
          "name": "绛红"
        },
        {
          "color": "#DC9A33",
          "name": "杏黄"
        }
      ],
      "hues": [
        "蓝"
      ],
      "dyeCode": "",
      "outfitCode": "SHARE4a76b3df1ebc31b5",
      "note": "我的玉门关专属套，黄沙大漠的跑商小设定，唐圆领袍太适合这种撞色了",
      "w": 1350,
      "h": 1800,
      "ctime": "2026-10-14"
    },
    {
      "id": "ot-031",
      "name": "稽查",
      "image": "assets/穿搭/ot-202610142258-稽查.png",
      "wearing": [
        {
          "part": "hair",
          "name": "霜寒天泉",
          "itemId": "it-霜寒天泉"
        },
        {
          "part": "full",
          "name": "静夜溶光",
          "itemId": "it-静夜溶光"
        }
      ],
      "tags": [
        "江湖百态",
        "江南",
        "江南·杭州",
        "江湖百态·行当职业"
      ],
      "palette": [
        {
          "color": "#46223E",
          "name": "乌黑"
        },
        {
          "color": "#DFD5CC",
          "name": "藕荷"
        }
      ],
      "hues": [
        "紫"
      ],
      "dyeCode": "",
      "outfitCode": "SHAREe52918f0e2d3ce33",
      "note": "入港稽查小玩法穿搭~就这样COS海关",
      "w": 1350,
      "h": 1800,
      "ctime": "2026-10-14"
    },
    {
      "id": "ot-032",
      "name": "家业",
      "image": "assets/穿搭/ot-202610142350-家业-清河.png",
      "wearing": [
        {
          "part": "hair",
          "name": "春庭归鹤",
          "itemId": "it-春庭归鹤"
        },
        {
          "part": "top",
          "name": "棠棣映夏",
          "itemId": "it-棠棣映夏"
        },
        {
          "part": "bottom",
          "name": "燕燕于飞",
          "itemId": "it-燕燕于飞"
        }
      ],
      "tags": [
        "江湖百态",
        "江湖百态·闲情"
      ],
      "palette": [
        {
          "color": "#FBF1DE",
          "name": "缟色"
        },
        {
          "color": "#77A084",
          "name": "苍色"
        }
      ],
      "hues": [
        "黄"
      ],
      "dyeCode": "",
      "outfitCode": "SHARE5179111cb5ec0096",
      "note": "家业老板套+1，装修的时候漫步一下还不错",
      "w": 1350,
      "h": 1800,
      "ctime": "2026-10-14"
    },
    {
      "id": "ot-033",
      "name": "锦绣",
      "image": "assets/穿搭/ot-202610142353-锦绣.png",
      "wearing": [
        {
          "part": "hair",
          "name": "锦绣烟波",
          "itemId": "it-锦绣烟波"
        },
        {
          "part": "top",
          "name": "锦绣烟波",
          "itemId": "it-锦绣烟波"
        },
        {
          "part": "bottom",
          "name": "锦绣烟波",
          "itemId": "it-锦绣烟波"
        }
      ],
      "tags": [
        "江湖百态",
        "江南",
        "江南·杭州",
        "江湖百态·闲情"
      ],
      "palette": [
        {
          "color": "#E6B764",
          "name": "缃黄"
        },
        {
          "color": "#EDD48C",
          "name": "蜜合"
        },
        {
          "color": "#285970",
          "name": "藏青"
        }
      ],
      "hues": [
        "黄"
      ],
      "dyeCode": "",
      "outfitCode": "SHARE74182057e47de0a1",
      "note": "江南探索套，富贵迷人眼啊，适合上香",
      "w": 1350,
      "h": 1800,
      "ctime": "2026-10-14"
    },
    {
      "id": "ot-034",
      "name": "不见山",
      "image": "assets/穿搭/ot-202610142356-剧情-不见山.png",
      "wearing": [
        {
          "part": "hair",
          "name": "岁时安",
          "itemId": "it-岁时安"
        },
        {
          "part": "top",
          "name": "连衍墨山",
          "itemId": "it-墨山道"
        },
        {
          "part": "bottom",
          "name": "连衍墨山",
          "itemId": "it-墨山道"
        }
      ],
      "tags": [
        "主线",
        "大世界跑图",
        "不见山",
        "主线·金乌衔枝·百鸟齐喑",
        "主线·金乌衔枝·矢落金乌",
        "主线·金乌衔枝·天灾人祸",
        "主线·金乌衔枝·坠日煮海",
        "不见山·绥乡",
        "不见山·深泽"
      ],
      "palette": [
        {
          "color": "#1F1C23",
          "name": "青灰"
        },
        {
          "color": "#7C4D27",
          "name": "赭石"
        }
      ],
      "hues": [
        "蓝"
      ],
      "dyeCode": "",
      "outfitCode": "SHAREeaaf3f145fd0056b",
      "note": "不见山后期，瓜已毕业，资深墨门，就是一个专业",
      "w": 1350,
      "h": 1800,
      "ctime": "2026-10-14"
    },
    {
      "id": "ot-035",
      "name": "鬼市子",
      "image": "assets/穿搭/ot-202610142358-开封鬼市子.png",
      "wearing": [
        {
          "part": "hair",
          "name": "啸月",
          "itemId": "it-啸月"
        },
        {
          "part": "top",
          "name": "啸月",
          "itemId": "it-啸月"
        },
        {
          "part": "bottom",
          "name": "岁时安",
          "itemId": "it-岁时安"
        }
      ],
      "tags": [
        "大世界跑图",
        "开封",
        "开封·鬼市子"
      ],
      "palette": [
        {
          "color": "#68A3A2",
          "name": "竹月"
        },
        {
          "color": "#1C5454",
          "name": "鸦青"
        },
        {
          "color": "#8F000C",
          "name": "绛红"
        }
      ],
      "hues": [
        "青"
      ],
      "dyeCode": "",
      "outfitCode": "SHAREe2aa24cf8afe334a",
      "note": "自带面具的鬼市子穿搭，拜托这种有设定的地图为什么不能有一个自动换装",
      "w": 1350,
      "h": 1800,
      "ctime": "2026-10-14"
    },
    {
      "id": "ot-036",
      "name": "武",
      "image": "assets/穿搭/ot-202610150001-开封皇宫-武.png",
      "wearing": [
        {
          "part": "hair",
          "name": "岁时安",
          "itemId": "it-岁时安"
        },
        {
          "part": "top",
          "name": "幽夜尘影",
          "itemId": "it-幽夜尘影"
        },
        {
          "part": "bottom",
          "name": "赤心一寸",
          "itemId": "it-赤心一寸"
        }
      ],
      "tags": [
        "大世界跑图",
        "开封皇宫",
        "江湖百态",
        "开封皇宫·内诸司",
        "江湖百态·行当职业"
      ],
      "palette": [
        {
          "color": "#000000",
          "name": "紫檀"
        },
        {
          "color": "#A4896B",
          "name": "檀色"
        }
      ],
      "hues": [
        "黑"
      ],
      "dyeCode": "",
      "outfitCode": "SHAREae7ab91a146b6886",
      "note": "武将轻便穿搭，跑图利落，高堂野客打戏看爽了",
      "w": 1350,
      "h": 1800,
      "ctime": "2026-10-15"
    },
    {
      "id": "ot-037",
      "name": "紫衣",
      "image": "assets/穿搭/ot-202610150003-开封皇宫-文.png",
      "wearing": [
        {
          "part": "hair",
          "name": "赤心一寸",
          "itemId": "it-赤心一寸"
        },
        {
          "part": "top",
          "name": "财星高照",
          "itemId": "it-财星高照"
        },
        {
          "part": "bottom",
          "name": "财星高照",
          "itemId": "it-财星高照"
        }
      ],
      "tags": [
        "江湖百态",
        "开封皇宫",
        "开封皇宫·前朝",
        "江湖百态·行当职业"
      ],
      "palette": [
        {
          "color": "#673353",
          "name": "黛紫"
        },
        {
          "color": "#C9A064",
          "name": "泥金"
        }
      ],
      "hues": [
        "紫"
      ],
      "dyeCode": "",
      "outfitCode": "SHARE5b29c19bd878277f",
      "note": "高官来的好叭，COS下开封府尹",
      "w": 1350,
      "h": 1800,
      "ctime": "2026-10-15"
    },
    {
      "id": "ot-038",
      "name": "撩湖兵",
      "image": "assets/穿搭/ot-202610150006-撩湖兵.png",
      "wearing": [
        {
          "part": "hair",
          "name": "青阳",
          "itemId": "it-青阳"
        },
        {
          "part": "full",
          "name": "青阳",
          "itemId": "it-青阳"
        },
        {
          "part": "top",
          "name": "萌主驾到",
          "itemId": "it-萌主驾到"
        }
      ],
      "tags": [
        "大世界跑图",
        "江湖百态",
        "江南",
        "江南·杭州",
        "江湖百态·行当职业"
      ],
      "palette": [
        {
          "color": "#83A792",
          "name": "竹月"
        },
        {
          "color": "#E6E1D4",
          "name": "藕色"
        },
        {
          "color": "#D05530",
          "name": "琥珀"
        }
      ],
      "hues": [
        "青",
        "白"
      ],
      "dyeCode": "SHAREe761bec632413679",
      "outfitCode": "SHARE30fdf24e549ff79a",
      "note": "直接上岗，超适合江南兵营还有湖边的好叭，青阳这样好的材质物理染色分区太难得了，燕子你不是会做传统纹样嘛",
      "w": 1350,
      "h": 1800,
      "ctime": "2026-10-15"
    },
    {
      "id": "ot-039",
      "name": "东岳",
      "image": "assets/穿搭/ot-202610150025-青州-东岳.png",
      "wearing": [
        {
          "part": "hair",
          "name": "双飞燕",
          "itemId": "it-双飞燕"
        },
        {
          "part": "full",
          "name": "墨竹轻衫",
          "itemId": null
        }
      ],
      "tags": [
        "大世界跑图",
        "青州",
        "青州·东岳"
      ],
      "palette": [
        {
          "color": "#F1EDEC",
          "name": "银白"
        },
        {
          "color": "#314446",
          "name": "青灰"
        }
      ],
      "hues": [
        "青"
      ],
      "dyeCode": "",
      "outfitCode": "SHAREeeb2f50323184c65",
      "note": "文能监考，武能跑图，自在任我行啊",
      "w": 1350,
      "h": 1800,
      "ctime": "2026-10-15"
    },
    {
      "id": "ot-040",
      "name": "蓬山",
      "image": "assets/穿搭/ot-202610150027-青州-蓬山.png",
      "wearing": [
        {
          "part": "hair",
          "name": "问道文津",
          "itemId": "it-问道文津"
        },
        {
          "part": "top",
          "name": "茯尘无寄",
          "itemId": "it-茯尘无寄"
        },
        {
          "part": "bottom",
          "name": "问道文津",
          "itemId": "it-问道文津"
        }
      ],
      "tags": [
        "青州",
        "大世界跑图",
        "青州·蓬山"
      ],
      "palette": [
        {
          "color": "#EDE8E6",
          "name": "缟色"
        },
        {
          "color": "#010101",
          "name": "紫檀"
        }
      ],
      "hues": [
        "白"
      ],
      "dyeCode": "SHARE281f947997f98b74",
      "outfitCode": "SHARE14e1d452c2b002ec",
      "note": "文津小生这边有礼了",
      "w": 1350,
      "h": 1800,
      "ctime": "2026-10-15"
    },
    {
      "id": "ot-041",
      "name": "染娘",
      "image": "assets/穿搭/ot-202610150028-染娘.png",
      "wearing": [
        {
          "part": "hair",
          "name": "茯尘无寄",
          "itemId": "it-茯尘无寄"
        },
        {
          "part": "full",
          "name": "松花玉兰",
          "itemId": "it-松花玉兰"
        }
      ],
      "tags": [
        "江湖百态",
        "江南",
        "江南·杭州",
        "江湖百态·行当职业"
      ],
      "palette": [
        {
          "color": "#0A386E",
          "name": "靛蓝"
        },
        {
          "color": "#EDD09A",
          "name": "蜜合"
        },
        {
          "color": "#80040E",
          "name": "绛红"
        }
      ],
      "hues": [
        "蓝"
      ],
      "dyeCode": "SHARE11fbece466e259ce",
      "outfitCode": "SHAREf4b3c5b171acf775",
      "note": "染坊有我",
      "w": 1350,
      "h": 1800,
      "ctime": "2026-10-15"
    },
    {
      "id": "ot-042",
      "name": "入江南",
      "image": "assets/穿搭/ot-202610150030-入江南.png",
      "wearing": [
        {
          "part": "hair",
          "name": "纵横",
          "itemId": "it-纵横"
        },
        {
          "part": "full",
          "name": "双飞燕",
          "itemId": "it-双飞燕"
        }
      ],
      "tags": [
        "主线",
        "江南",
        "主线·最忆江南·风景曾谙",
        "江南·杭州"
      ],
      "palette": [
        {
          "color": "#EBE6E1",
          "name": "缟色"
        },
        {
          "color": "#95A666",
          "name": "竹青"
        }
      ],
      "hues": [
        "绿",
        "白"
      ],
      "dyeCode": "",
      "outfitCode": "SHAREc82ca78b5b4ff806",
      "note": "入江南，第一章剧情走起，风景旧曾谙",
      "w": 1350,
      "h": 1800,
      "ctime": "2026-10-15"
    },
    {
      "id": "ot-043",
      "name": "入开封",
      "image": "assets/穿搭/ot-202610150031-入开封.png",
      "wearing": [
        {
          "part": "hair",
          "name": "骊山猎",
          "itemId": "it-骊山猎"
        },
        {
          "part": "full",
          "name": "江湖客",
          "itemId": "it-江湖客"
        }
      ],
      "tags": [
        "大世界跑图",
        "主线",
        "开封",
        "主线·天地熔炉·开封新客"
      ],
      "palette": [
        {
          "color": "#B8B9AF",
          "name": "缥碧"
        },
        {
          "color": "#EEEAE9",
          "name": "银白"
        }
      ],
      "hues": [
        "蓝"
      ],
      "dyeCode": "",
      "outfitCode": "SHARE520c0203e5d54c80",
      "note": "入开封，初入江湖，芸芸众生",
      "w": 1350,
      "h": 1800,
      "ctime": "2026-10-15"
    },
    {
      "id": "ot-044",
      "name": "侠者",
      "image": "assets/穿搭/ot-202610150033-侠客-百搭.png",
      "wearing": [
        {
          "part": "hair",
          "name": "探梅逢春",
          "itemId": "it-探梅逢春"
        },
        {
          "part": "top",
          "name": "颂吉呈祥",
          "itemId": "it-颂吉呈祥"
        },
        {
          "part": "bottom",
          "name": "颂吉呈祥",
          "itemId": "it-颂吉呈祥"
        }
      ],
      "tags": [
        "大世界跑图"
      ],
      "palette": [
        {
          "color": "#F0EBE9",
          "name": "银白"
        },
        {
          "color": "#AB0110",
          "name": "绛红"
        },
        {
          "color": "#6F6B8C",
          "name": "苍色"
        }
      ],
      "hues": [
        "白"
      ],
      "dyeCode": "SHARE946bb37d073f87f9",
      "outfitCode": "SHARE976e5708bc59268b",
      "note": "蓝白红经典配色，超绝百搭侠者套！春秋适用",
      "w": 1350,
      "h": 1800,
      "ctime": "2026-10-15"
    },
    {
      "id": "ot-045",
      "name": "回春",
      "image": "assets/穿搭/ot-202610150036-小师兄.png",
      "wearing": [
        {
          "part": "hair",
          "name": "问道文津",
          "itemId": "it-问道文津"
        },
        {
          "part": "top",
          "name": "少年行",
          "itemId": "it-少年行"
        },
        {
          "part": "bottom",
          "name": "玉宇璇玑",
          "itemId": "it-玉宇璇玑"
        }
      ],
      "tags": [
        "主线",
        "江南",
        "大世界跑图",
        "主线·最忆江南·泮水微澜",
        "江南·杭州",
        "主线·最忆江南·买月赠杭"
      ],
      "palette": [
        {
          "color": "#9CAB9B",
          "name": "竹月"
        },
        {
          "color": "#EEEAE8",
          "name": "银白"
        },
        {
          "color": "#CCCCC7",
          "name": "藕荷"
        }
      ],
      "hues": [
        "青",
        "白"
      ],
      "dyeCode": "SHARE72a1fc54e30f25cf",
      "outfitCode": "SHAREb0db0f36c5587340",
      "note": "小师兄同款配色，平澜书院读书标配",
      "w": 1348,
      "h": 1797,
      "ctime": "2026-10-15"
    },
    {
      "id": "ot-046",
      "name": "夜台",
      "image": "assets/穿搭/ot-202610150039-夜台.png",
      "wearing": [
        {
          "part": "hair",
          "name": "双飞燕",
          "itemId": "it-双飞燕"
        },
        {
          "part": "top",
          "name": "玉宇璇玑",
          "itemId": "it-玉宇璇玑"
        },
        {
          "part": "bottom",
          "name": "玉宇璇玑",
          "itemId": "it-玉宇璇玑"
        }
      ],
      "tags": [
        "残章",
        "青州",
        "青州·东岳"
      ],
      "palette": [
        {
          "color": "#F0EAE7",
          "name": "银白"
        },
        {
          "color": "#5A5352",
          "name": "鸦青"
        },
        {
          "color": "#282422",
          "name": "青灰"
        }
      ],
      "hues": [
        "白"
      ],
      "dyeCode": "SHARE83d2347edadf7236",
      "outfitCode": "SHARE601ab04dedd33e68",
      "note": "夜台良辰专属套，亮闪闪衣摆搭星空顶古墓刚刚好，黑黑的有光很安心",
      "w": 1350,
      "h": 1800,
      "ctime": "2026-10-15"
    },
    {
      "id": "ot-047",
      "name": "渔夏",
      "image": "assets/穿搭/ot-202610150041-渔乡.png",
      "wearing": [
        {
          "part": "hair",
          "name": "发型 · 三",
          "itemId": null
        },
        {
          "part": "full",
          "name": "渔歌子",
          "itemId": "it-渔歌子"
        }
      ],
      "tags": [
        "大世界跑图",
        "江南",
        "江南·杭州"
      ],
      "palette": [
        {
          "color": "#CEBFA5",
          "name": "蜜合"
        },
        {
          "color": "#2F4F51",
          "name": "鸦青"
        },
        {
          "color": "#C1A375",
          "name": "银灰"
        }
      ],
      "hues": [
        "黄"
      ],
      "dyeCode": "",
      "outfitCode": "SHARE466d2318af6256cd",
      "note": "夏天打渔的超轻便套装，轻快跑图值得拥有",
      "w": 1350,
      "h": 1800,
      "ctime": "2026-10-15"
    },
    {
      "id": "ot-048",
      "name": "符师",
      "image": "assets/穿搭/ot-202610150044-照影庙-符师.png",
      "wearing": [
        {
          "part": "hair",
          "name": "啸月",
          "itemId": "it-啸月"
        },
        {
          "part": "top",
          "name": "岁时安",
          "itemId": "it-岁时安"
        },
        {
          "part": "bottom",
          "name": "寻山野",
          "itemId": "it-寻山野"
        }
      ],
      "tags": [
        "江湖百态",
        "江南",
        "江南·照影庙",
        "江湖百态·行当职业"
      ],
      "palette": [
        {
          "color": "#E2C358",
          "name": "缃黄"
        },
        {
          "color": "#F2EEEB",
          "name": "银白"
        },
        {
          "color": "#C4010E",
          "name": "鹅冠红"
        }
      ],
      "hues": [
        "黄",
        "白"
      ],
      "dyeCode": "",
      "outfitCode": "SHAREc34979bd1903b864",
      "note": "中元节安心装",
      "w": 1157,
      "h": 1542,
      "ctime": "2026-10-15"
    },
    {
      "id": "ot-049",
      "name": "小道",
      "image": "assets/穿搭/ot-202610150046-照影庙-道士.png",
      "wearing": [
        {
          "part": "hair",
          "name": "少年行",
          "itemId": "it-少年行"
        },
        {
          "part": "top",
          "name": "半卷风烟",
          "itemId": "it-半卷风烟"
        },
        {
          "part": "bottom",
          "name": "岁时安",
          "itemId": "it-岁时安"
        }
      ],
      "tags": [
        "江湖百态",
        "江南",
        "江南·照影庙",
        "江湖百态·行当职业"
      ],
      "palette": [
        {
          "color": "#D7A538",
          "name": "姜黄"
        },
        {
          "color": "#100C0A",
          "name": "紫檀"
        },
        {
          "color": "#6C1018",
          "name": "枣红"
        }
      ],
      "hues": [
        "黄"
      ],
      "dyeCode": "",
      "outfitCode": "SHARE6543de9cc35bcc08",
      "note": "小道士，下山路，闯江湖~也是过起照影庙来很安心的一套",
      "w": 1157,
      "h": 1542,
      "ctime": "2026-10-15"
    },
    {
      "id": "ot-050",
      "name": "昭帝",
      "image": "assets/穿搭/ot-202610150049-昭帝.png",
      "wearing": [
        {
          "part": "hair",
          "name": "纵横",
          "itemId": "it-纵横"
        },
        {
          "part": "top",
          "name": "纵横",
          "itemId": "it-纵横"
        },
        {
          "part": "bottom",
          "name": "纵横",
          "itemId": "it-纵横"
        }
      ],
      "tags": [
        "江湖百态",
        "开封皇宫",
        "开封皇宫·前朝",
        "江湖百态·闲情"
      ],
      "palette": [
        {
          "color": "#100805",
          "name": "紫檀"
        },
        {
          "color": "#7D0D09",
          "name": "绛红"
        },
        {
          "color": "#98784E",
          "name": "库金"
        }
      ],
      "hues": [
        "黑"
      ],
      "dyeCode": "",
      "outfitCode": "SHARE05f0668e02bc3ee4",
      "note": "天凉了，该杯酒释兵权了hhhh（适合穿着观赏下赵大的结算动画or拍点帝王照",
      "w": 1218,
      "h": 1624,
      "ctime": "2026-10-15"
    },
    {
      "id": "ot-051",
      "name": "芸湘",
      "image": "assets/穿搭/ot-202610150050-芸湘.png",
      "wearing": [
        {
          "part": "hair",
          "name": "半卷风烟",
          "itemId": "it-半卷风烟"
        },
        {
          "part": "top",
          "name": "半卷风烟",
          "itemId": "it-半卷风烟"
        },
        {
          "part": "bottom",
          "name": "问道文津",
          "itemId": "it-问道文津"
        }
      ],
      "tags": [
        "江湖百态",
        "江湖百态·角色同款"
      ],
      "palette": [
        {
          "color": "#A2ACC6",
          "name": "缥碧"
        },
        {
          "color": "#DED7D3",
          "name": "藕色"
        }
      ],
      "hues": [
        "蓝",
        "白"
      ],
      "dyeCode": "",
      "outfitCode": "SHAREe0eb6def9dc14dbd",
      "note": "小芸湘COS",
      "w": 1350,
      "h": 1800,
      "ctime": "2026-10-15"
    },
    {
      "id": "ot-052",
      "name": "小福",
      "image": "assets/穿搭/ot-202610150052-小福-道主.png",
      "wearing": [
        {
          "part": "hair",
          "name": "山君啸林",
          "itemId": "it-山君啸林"
        },
        {
          "part": "top",
          "name": "半卷风烟",
          "itemId": "it-半卷风烟"
        },
        {
          "part": "bottom",
          "name": "岁时安",
          "itemId": "it-岁时安"
        }
      ],
      "tags": [
        "江湖百态",
        "江湖百态·配色COS"
      ],
      "palette": [
        {
          "color": "#9F3313",
          "name": "绛红"
        },
        {
          "color": "#778E79",
          "name": "苍色"
        },
        {
          "color": "#E1CA99",
          "name": "蜜合"
        }
      ],
      "hues": [
        "红",
        "黄"
      ],
      "dyeCode": "",
      "outfitCode": "SHAREec0494a8eb32aa35",
      "note": "道主COS，小孩组上大分",
      "w": 1218,
      "h": 1624,
      "ctime": "2026-10-15"
    },
    {
      "id": "ot-053",
      "name": "田叔",
      "image": "assets/穿搭/ot-202610150054-田叔.png",
      "wearing": [
        {
          "part": "hair",
          "name": "一心三藏",
          "itemId": "it-一心三藏"
        },
        {
          "part": "full",
          "name": "一心三藏",
          "itemId": "it-一心三藏"
        }
      ],
      "tags": [
        "江湖百态",
        "江湖百态·角色同款"
      ],
      "palette": [
        {
          "color": "#BD7C26",
          "name": "琥珀"
        },
        {
          "color": "#2D1F1B",
          "name": "紫檀"
        }
      ],
      "hues": [
        "黑"
      ],
      "dyeCode": "",
      "outfitCode": "SHARE455e59815779f129",
      "note": "田叔COS服，无缝融入世界寺庙成为方丈",
      "w": 1218,
      "h": 1624,
      "ctime": "2026-10-15"
    },
    {
      "id": "ot-054",
      "name": "瑞鹤",
      "image": "assets/穿搭/ot-202610150057-瑞鹤.png",
      "wearing": [
        {
          "part": "hair",
          "name": "静夜溶光",
          "itemId": "it-静夜溶光"
        },
        {
          "part": "top",
          "name": "枕寒流",
          "itemId": "it-枕寒流"
        },
        {
          "part": "bottom",
          "name": "枕寒流",
          "itemId": "it-枕寒流"
        }
      ],
      "tags": [
        "江南",
        "江湖百态",
        "大世界跑图",
        "江南·杭州"
      ],
      "palette": [
        {
          "color": "#73867D",
          "name": "苍色"
        },
        {
          "color": "#879C91",
          "name": "银灰"
        },
        {
          "color": "#D79E57",
          "name": "泥金"
        },
        {
          "color": "#D9763B",
          "name": "琥珀"
        }
      ],
      "hues": [
        "青"
      ],
      "dyeCode": "SHARE4193fe55f9c8fd4e",
      "outfitCode": "",
      "note": "宋风配色，可以散步",
      "w": 1218,
      "h": 1624,
      "ctime": "2026-10-15"
    },
    {
      "id": "ot-055",
      "name": "翩跹",
      "image": "assets/穿搭/ot-202610150059-翩跹.png",
      "wearing": [
        {
          "part": "hair",
          "name": "舞花间",
          "itemId": "it-舞花间"
        },
        {
          "part": "full",
          "name": "一人心",
          "itemId": "it-一人心"
        }
      ],
      "tags": [
        "江湖百态",
        "江湖百态·闲情"
      ],
      "palette": [
        {
          "color": "#E1D9D5",
          "name": "藕色"
        }
      ],
      "hues": [
        "白"
      ],
      "dyeCode": "",
      "outfitCode": "SHARE11ec9c52f1ed1e2d",
      "note": "闲来无事搭来欣赏白飘仙的结算动画来着",
      "w": 1218,
      "h": 1624,
      "ctime": "2026-10-15"
    },
    {
      "id": "ot-056",
      "name": "萌主",
      "image": "assets/穿搭/ot-202610150101-萌主-孩子王.png",
      "wearing": [
        {
          "part": "hair",
          "name": "颂吉呈祥",
          "itemId": "it-颂吉呈祥"
        },
        {
          "part": "full",
          "name": "萌主驾到",
          "itemId": "it-萌主驾到"
        }
      ],
      "tags": [
        "江湖百态",
        "江湖百态·闲情"
      ],
      "palette": [
        {
          "color": "#BF532F",
          "name": "琥珀"
        },
        {
          "color": "#768D6B",
          "name": "竹青"
        },
        {
          "color": "#D9C1A5",
          "name": "蜜合"
        }
      ],
      "hues": [
        "橙",
        "绿",
        "白"
      ],
      "dyeCode": "",
      "outfitCode": "SHAREede28e37ff3cd21a",
      "note": "我是孩子王，可可爱爱，招猫逗狗",
      "w": 1218,
      "h": 1624,
      "ctime": "2026-10-15"
    },
    {
      "id": "ot-057",
      "name": "狼卫",
      "image": "assets/穿搭/ot-202610150102-狼卫.png",
      "wearing": [
        {
          "part": "hair",
          "name": "苍狼",
          "itemId": "it-苍狼"
        },
        {
          "part": "full",
          "name": "苍狼",
          "itemId": "it-苍狼"
        }
      ],
      "tags": [
        "打架"
      ],
      "palette": [
        {
          "color": "#463D38",
          "name": "乌黑"
        },
        {
          "color": "#DCD0C9",
          "name": "藕荷"
        }
      ],
      "hues": [
        "黑"
      ],
      "dyeCode": "",
      "outfitCode": "SHARE35c1aa56e6c284dd",
      "note": "打架冬装+1",
      "w": 1218,
      "h": 1624,
      "ctime": "2026-10-15"
    },
    {
      "id": "ot-058",
      "name": "蓝莓",
      "image": "assets/穿搭/ot-202610150103-蓝莓.png",
      "wearing": [
        {
          "part": "hair",
          "name": "枕寒流",
          "itemId": "it-枕寒流"
        },
        {
          "part": "top",
          "name": "南风熏",
          "itemId": "it-南风熏"
        },
        {
          "part": "bottom",
          "name": "枕寒流",
          "itemId": "it-枕寒流"
        }
      ],
      "tags": [
        "江湖百态",
        "江南",
        "江南·杭州",
        "江湖百态·闲情"
      ],
      "palette": [
        {
          "color": "#2E5582",
          "name": "藏青"
        },
        {
          "color": "#E65850",
          "name": "银红"
        },
        {
          "color": "#D2C5C0",
          "name": "藕荷"
        }
      ],
      "hues": [
        "蓝"
      ],
      "dyeCode": "",
      "outfitCode": "",
      "note": "散步+1",
      "w": 1157,
      "h": 1542,
      "ctime": "2026-10-15"
    },
    {
      "id": "ot-059",
      "name": "金吾卫",
      "image": "assets/穿搭/ot-202610150104-金吾卫.png",
      "wearing": [
        {
          "part": "hair",
          "name": "幽夜尘影",
          "itemId": "it-幽夜尘影"
        },
        {
          "part": "full",
          "name": "金吾卫",
          "itemId": "it-金吾卫"
        }
      ],
      "tags": [
        "江湖百态",
        "江湖百态·行当职业"
      ],
      "palette": [
        {
          "color": "#000000",
          "name": "紫檀"
        },
        {
          "color": "#EAD06F",
          "name": "松花"
        }
      ],
      "hues": [
        "黑"
      ],
      "dyeCode": "",
      "outfitCode": "SHAREaeb307e28d2bcc40",
      "note": "金吾卫在此！",
      "w": 1218,
      "h": 1624,
      "ctime": "2026-10-15"
    },
    {
      "id": "ot-060",
      "name": "红线",
      "image": "assets/穿搭/ot-202610150106-红线.png",
      "wearing": [
        {
          "part": "hair",
          "name": "少年行",
          "itemId": "it-少年行"
        },
        {
          "part": "bottom",
          "name": "少年行",
          "itemId": "it-少年行"
        },
        {
          "part": "top",
          "name": "半卷风烟",
          "itemId": "it-半卷风烟"
        }
      ],
      "tags": [
        "江湖百态",
        "江湖百态·配色COS"
      ],
      "palette": [
        {
          "color": "#7F3C34",
          "name": "棕褐"
        },
        {
          "color": "#C09D92",
          "name": "银灰"
        },
        {
          "color": "#C24F2C",
          "name": "绯红"
        },
        {
          "color": "#404B5B",
          "name": "鸦青"
        }
      ],
      "hues": [
        "红"
      ],
      "dyeCode": "SHAREce05aa5c78385ea3",
      "outfitCode": "SHARE3bd5ac937e0c4fea",
      "note": "我是红线，是摇红女侠，是江湖上顶顶有名的大侠！",
      "w": 1218,
      "h": 1624,
      "ctime": "2026-10-15"
    },
    {
      "id": "ot-061",
      "name": "鬼神愁",
      "image": "assets/穿搭/ot-202610150107-鬼神愁.png",
      "wearing": [
        {
          "part": "hair",
          "name": "连衍墨山",
          "itemId": "it-墨山道"
        },
        {
          "part": "top",
          "name": "幽夜尘影",
          "itemId": "it-幽夜尘影"
        },
        {
          "part": "bottom",
          "name": "岁时安",
          "itemId": "it-岁时安"
        }
      ],
      "tags": [
        "戏乐"
      ],
      "palette": [
        {
          "color": "#D7BDA1",
          "name": "蜜合"
        },
        {
          "color": "#A00007",
          "name": "绛红"
        },
        {
          "color": "#536F61",
          "name": "墨色"
        },
        {
          "color": "#D7BB51",
          "name": "缃黄"
        }
      ],
      "dyeCode": "",
      "outfitCode": "SHARE3fef92e12db3b71b",
      "note": "适合跳大神嘿嘿嘿",
      "w": 1157,
      "h": 1542,
      "ctime": "2026-10-15"
    },
    {
      "id": "ot-062",
      "name": "禅道",
      "image": "assets/穿搭/ot-202610150109-禅道.png",
      "wearing": [
        {
          "part": "hair",
          "name": "金轮",
          "itemId": "it-金轮"
        },
        {
          "part": "top",
          "name": "风入画",
          "itemId": "it-风入画"
        },
        {
          "part": "bottom",
          "name": "山中人",
          "itemId": null
        }
      ],
      "tags": [
        "江湖百态",
        "江南",
        "江南·杭州",
        "江湖百态·行当职业"
      ],
      "palette": [
        {
          "color": "#58474B",
          "name": "鸦青"
        },
        {
          "color": "#71472E",
          "name": "棕褐"
        }
      ],
      "hues": [
        "黑"
      ],
      "dyeCode": "",
      "outfitCode": "SHAREedcce0e3bac02411",
      "note": "灵隐寺问禅入佛套装有",
      "w": 1218,
      "h": 1624,
      "ctime": "2026-10-15"
    },
    {
      "id": "ot-063",
      "name": "采茶",
      "image": "assets/穿搭/ot-202610150111-采茶.png",
      "wearing": [
        {
          "part": "hair",
          "name": "生杀面",
          "itemId": "it-生杀面"
        },
        {
          "part": "top",
          "name": "半卷风烟",
          "itemId": "it-半卷风烟"
        },
        {
          "part": "bottom",
          "name": "锦绣烟波",
          "itemId": "it-锦绣烟波"
        }
      ],
      "tags": [
        "江湖百态",
        "江南",
        "江南·杭州",
        "江湖百态·行当职业"
      ],
      "palette": [
        {
          "color": "#7F90AF",
          "name": "竹月"
        },
        {
          "color": "#E4DDDB",
          "name": "藕色"
        }
      ],
      "dyeCode": "",
      "outfitCode": "SHARE4003c52e35994c8b",
      "note": "采茶干活的朴素老百姓+1，太朴素了，不适合进城哈哈哈哈",
      "w": 1350,
      "h": 1800,
      "ctime": "2026-10-15"
    },
    {
      "id": "ot-064",
      "name": "镖客",
      "image": "assets/穿搭/ot-202610150114-镖客.png",
      "wearing": [
        {
          "part": "hair",
          "name": "野镖",
          "itemId": "it-野镖"
        },
        {
          "part": "top",
          "name": "卷黄沙",
          "itemId": null
        },
        {
          "part": "full",
          "name": "野镖",
          "itemId": "it-野镖"
        }
      ],
      "tags": [
        "打架",
        "江湖百态",
        "江湖百态·行当职业"
      ],
      "palette": [
        {
          "color": "#AD947C",
          "name": "银灰"
        },
        {
          "color": "#603428",
          "name": "玄色"
        },
        {
          "color": "#986D4D",
          "name": "驼色"
        }
      ],
      "hues": [
        "橙"
      ],
      "dyeCode": "",
      "outfitCode": "SHAREeb67fd19685f6222",
      "note": "这里是镖头，看起来就身经百战好叭，其实也很适合玉门关大地图",
      "w": 1350,
      "h": 1800,
      "ctime": "2026-10-15"
    },
    {
      "id": "ot-065",
      "name": "瀚海",
      "image": "assets/穿搭/ot-202610150116-202692535541.png",
      "wearing": [
        {
          "part": "hair",
          "name": "不尽狂澜",
          "itemId": "it-狂澜"
        },
        {
          "part": "top",
          "name": "半卷风烟",
          "itemId": "it-半卷风烟"
        },
        {
          "part": "bottom",
          "name": "岁时安",
          "itemId": "it-岁时安"
        }
      ],
      "tags": [
        "江南",
        "残章",
        "江南·杭州"
      ],
      "palette": [
        {
          "color": "#2B2A2F",
          "name": "青灰"
        },
        {
          "color": "#9E3F3D",
          "name": "胭脂"
        },
        {
          "color": "#B8AB9C",
          "name": "银灰"
        }
      ],
      "hues": [
        "青",
        "白"
      ],
      "dyeCode": "",
      "outfitCode": "SHARE2d38d708cf38a6e9",
      "note": "过捍海塘镇守！无缝融入人民群众",
      "w": 1282,
      "h": 1710,
      "ctime": "2026-10-15"
    },
    {
      "id": "ot-066",
      "name": "凤",
      "image": "assets/穿搭/ot-202610150118-20261014195622.png",
      "wearing": [
        {
          "part": "hair",
          "name": "穿花见",
          "itemId": "it-穿花见"
        },
        {
          "part": "top",
          "name": "啸月",
          "itemId": "it-啸月"
        },
        {
          "part": "bottom",
          "name": "颂吉呈祥",
          "itemId": "it-颂吉呈祥"
        }
      ],
      "tags": [
        "江湖百态",
        "戏乐",
        "江湖百态·配色COS"
      ],
      "palette": [
        {
          "color": "#B4251B",
          "name": "银朱"
        },
        {
          "color": "#E19187",
          "name": "桃红"
        },
        {
          "color": "#E4BCB7",
          "name": "藕荷"
        },
        {
          "color": "#C9A44B",
          "name": "泥金"
        }
      ],
      "hues": [
        "红"
      ],
      "dyeCode": "",
      "outfitCode": "",
      "note": "可爱不失力量的一套叭算，灵感来源：东方神娃-凤娃配色",
      "w": 1282,
      "h": 1710,
      "ctime": "2026-10-15"
    },
    {
      "id": "ot-067",
      "name": "活力",
      "image": "assets/穿搭/ot-202610150119-20261014195822.png",
      "wearing": [
        {
          "part": "hair",
          "name": "蝎心蛟影",
          "itemId": "it-蝎心蛟影"
        },
        {
          "part": "full",
          "name": "清河强者",
          "itemId": "it-清河强者"
        }
      ],
      "tags": [
        "戏乐"
      ],
      "palette": [
        {
          "color": "#DBAA53",
          "name": "缃黄"
        },
        {
          "color": "#CE9D66",
          "name": "泥金"
        },
        {
          "color": "#B6B676",
          "name": "松花"
        },
        {
          "color": "#D17739",
          "name": "琥珀"
        }
      ],
      "hues": [
        "黄"
      ],
      "dyeCode": "",
      "outfitCode": "SHAREeb07750972114103",
      "note": "跳点宅舞/活力可爱系舞蹈~",
      "w": 1282,
      "h": 1710,
      "ctime": "2026-10-15"
    },
    {
      "id": "ot-068",
      "name": "铃",
      "image": "assets/穿搭/ot-202610150122-20261014204948.png",
      "wearing": [
        {
          "part": "hair",
          "name": "有馀依",
          "itemId": "it-有馀依"
        },
        {
          "part": "top",
          "name": "绝障",
          "itemId": "it-绝障"
        },
        {
          "part": "bottom",
          "name": "绝障",
          "itemId": "it-绝障"
        }
      ],
      "tags": [
        "打架"
      ],
      "palette": [
        {
          "color": "#423024",
          "name": "紫檀"
        },
        {
          "color": "#A37F57",
          "name": "库金"
        }
      ],
      "hues": [
        "黑"
      ],
      "dyeCode": "",
      "outfitCode": "",
      "note": "就这个义肢! 感受杀手的无情叭",
      "w": 1157,
      "h": 1542,
      "ctime": "2026-10-15"
    },
    {
      "id": "ot-069",
      "name": "小蝴蝶",
      "image": "assets/穿搭/ot-202610150125-2026924151640.png",
      "wearing": [
        {
          "part": "hair",
          "name": "飞花聆诏",
          "itemId": null
        },
        {
          "part": "top",
          "name": "穿花见",
          "itemId": "it-穿花见"
        },
        {
          "part": "bottom",
          "name": "染青苍",
          "itemId": "it-染青苍"
        }
      ],
      "tags": [
        "江湖百态",
        "江湖百态·闲情"
      ],
      "palette": [
        {
          "color": "#7572AD",
          "name": "苍色"
        },
        {
          "color": "#AA72B2",
          "name": "银灰"
        },
        {
          "color": "#C5ACB4",
          "name": "丁香"
        },
        {
          "color": "#F0D6B7",
          "name": "藕荷"
        }
      ],
      "hues": [
        "紫"
      ],
      "dyeCode": "",
      "outfitCode": "SHAREe28df2c2fb7b0ae8",
      "note": "紫色小蝴蝶，试图拯救衣服的穿搭结果",
      "w": 1282,
      "h": 1710,
      "ctime": "2026-10-15"
    },
    {
      "id": "ot-070",
      "name": "未央",
      "image": "assets/穿搭/ot-202610180210-2026101761441.png",
      "wearing": [
        {
          "part": "hair",
          "name": "霜寒天泉",
          "itemId": "it-霜寒天泉"
        },
        {
          "part": "top",
          "name": "山君啸林",
          "itemId": "it-山君啸林"
        },
        {
          "part": "bottom",
          "name": "寻山野",
          "itemId": "it-寻山野"
        }
      ],
      "tags": [
        "未央城",
        "江湖百态",
        "江湖百态·闲情"
      ],
      "palette": [
        {
          "color": "#D1A363",
          "name": "泥金"
        },
        {
          "color": "#760613",
          "name": "枣红"
        },
        {
          "color": "#010000",
          "name": "紫檀"
        }
      ],
      "hues": [
        "黄",
        "黑"
      ],
      "dyeCode": "SHAREd4a92841973323b2",
      "outfitCode": "SHARE5ebf5f4e916f7d2d",
      "note": "欣赏结算，相当富贵的一套，俺是有钱人",
      "w": 1350,
      "h": 1800,
      "ctime": "2026-10-18"
    },
    {
      "id": "ot-071",
      "name": "妖女",
      "image": "assets/穿搭/ot-202610180418-2026101835955.png",
      "wearing": [
        {
          "part": "hair",
          "name": "逐红花",
          "itemId": "it-逐红花"
        },
        {
          "part": "full",
          "name": "逐红花",
          "itemId": "it-逐红花"
        }
      ],
      "tags": [
        "江湖百态",
        "江湖百态·角色同款"
      ],
      "palette": [
        {
          "color": "#8F0002",
          "name": "绛红"
        },
        {
          "color": "#1A1513",
          "name": "紫檀"
        }
      ],
      "hues": [
        "红",
        "黑"
      ],
      "dyeCode": "",
      "outfitCode": "",
      "note": "因为仇恨拉满而穿不上的美丽穿搭",
      "w": 1282,
      "h": 1710,
      "ctime": "2026-10-18"
    },
    {
      "id": "ot-072",
      "name": "棹舟",
      "image": "assets/穿搭/ot-202610180421-202610184932.png",
      "wearing": [
        {
          "part": "hair",
          "name": "遥夜行",
          "itemId": "it-遥夜行"
        },
        {
          "part": "top",
          "name": "钓雪",
          "itemId": "it-钓雪"
        },
        {
          "part": "bottom",
          "name": "渔歌子",
          "itemId": "it-渔歌子"
        }
      ],
      "tags": [
        "江湖百态",
        "江湖百态·行当职业",
        "江南",
        "江南·杭州"
      ],
      "palette": [
        {
          "color": "#5A8A8E",
          "name": "铜绿"
        },
        {
          "color": "#A57A58",
          "name": "檀色"
        }
      ],
      "hues": [
        "橙"
      ],
      "dyeCode": "",
      "outfitCode": "SHARE84b7dc5b13c3a475",
      "note": "职业船夫，荡舟湖上，绝不空军~",
      "w": 1282,
      "h": 1710,
      "ctime": "2026-10-18"
    },
    {
      "id": "ot-073",
      "name": "江叔",
      "image": "assets/穿搭/ot-202610180422-202610184054.png",
      "wearing": [
        {
          "part": "hair",
          "name": "晏平生",
          "itemId": "it-晏平生"
        },
        {
          "part": "full",
          "name": "晏平生",
          "itemId": "it-晏平生"
        }
      ],
      "tags": [
        "江湖百态",
        "江湖百态·角色同款"
      ],
      "palette": [
        {
          "color": "#454A5F",
          "name": "黛蓝"
        },
        {
          "color": "#2D1F1B",
          "name": "紫檀"
        }
      ],
      "hues": [
        "蓝"
      ],
      "dyeCode": "",
      "outfitCode": "",
      "note": "啊江叔你在哪",
      "w": 1282,
      "h": 1710,
      "ctime": "2026-10-18"
    },
    {
      "id": "ot-074",
      "name": "功夫熊猫",
      "image": "assets/穿搭/ot-202610180541-2026101853857.png",
      "wearing": [
        {
          "part": "full",
          "name": "熊有成竹",
          "itemId": "it-熊有成竹"
        }
      ],
      "tags": [
        "江湖百态",
        "江湖百态·闲情"
      ],
      "palette": [
        {
          "color": "#C8974B",
          "name": "泥金"
        }
      ],
      "hues": [
        "黄"
      ],
      "dyeCode": "SHAREfc63b8d928af5e08",
      "outfitCode": "SHAREc2f74b267678d1c6",
      "note": "我是阿宝~我是神龙大侠~",
      "w": 1350,
      "h": 1800,
      "ctime": "2026-10-18"
    },
    {
      "id": "ot-075",
      "name": "玉山",
      "image": "assets/穿搭/ot-202610180606-202610186341.png",
      "wearing": [
        {
          "part": "hair",
          "name": "骊山猎",
          "itemId": "it-骊山猎"
        },
        {
          "part": "full",
          "name": "玉山松",
          "itemId": "it-玉山松"
        }
      ],
      "tags": [
        "江湖百态",
        "江湖百态·角色同款"
      ],
      "palette": [
        {
          "color": "#EAE5E5",
          "name": "缟色"
        },
        {
          "color": "#84917E",
          "name": "银灰"
        }
      ],
      "dyeCode": "",
      "outfitCode": "SHARE258f4d02c03b2f18",
      "note": "陈叔啊美丽的玉山松你什么时候能裁剪呢",
      "w": 1282,
      "h": 1710,
      "ctime": "2026-10-18"
    },
    {
      "id": "ot-076",
      "name": "黄金路",
      "image": "assets/穿搭/ot-202610241411-20261023225658.png",
      "wearing": [
        {
          "part": "hair",
          "name": "长歌羡鱼",
          "itemId": "it-长歌羡鱼"
        },
        {
          "part": "top",
          "name": "玉宇璇玑",
          "itemId": "it-玉宇璇玑"
        },
        {
          "part": "bottom",
          "name": "纵横",
          "itemId": "it-纵横"
        }
      ],
      "tags": [
        "残章",
        "未央城"
      ],
      "palette": [
        {
          "color": "#F9AE3C",
          "name": "杏黄"
        },
        {
          "color": "#C5650F",
          "name": "琥珀"
        },
        {
          "color": "#FFDA78",
          "name": "蜜合"
        }
      ],
      "hues": [
        "黄"
      ],
      "dyeCode": "",
      "outfitCode": "",
      "note": "黄金路赌城严选，适合未央城这个金银满地的室内",
      "w": 1350,
      "h": 1800,
      "ctime": "2026-10-24"
    },
    {
      "id": "ot-077",
      "name": "漱",
      "image": "assets/穿搭/ot-202610241413-20261023225513.png",
      "wearing": [
        {
          "part": "hair",
          "name": "探梅逢春",
          "itemId": "it-探梅逢春"
        },
        {
          "part": "top",
          "name": "雁还乡",
          "itemId": "it-雁还乡"
        },
        {
          "part": "bottom",
          "name": "雁还乡",
          "itemId": "it-雁还乡"
        }
      ],
      "tags": [
        "未央城",
        "残章"
      ],
      "palette": [
        {
          "color": "#3F7B9D",
          "name": "群青"
        },
        {
          "color": "#B8B2B2",
          "name": "缥碧"
        }
      ],
      "hues": [
        "蓝"
      ],
      "dyeCode": "SHARE89cf1b34dbc12072",
      "outfitCode": "",
      "note": "蜃楼海底世界啊，这套染色就是适合海边和海底",
      "w": 1350,
      "h": 1800,
      "ctime": "2026-10-24"
    },
    {
      "id": "ot-078",
      "name": "九流",
      "image": "assets/穿搭/ot-202610241415-20261023225435.png",
      "wearing": [
        {
          "part": "hair",
          "name": "自在九流",
          "itemId": "it-自在九流"
        },
        {
          "part": "full",
          "name": "自在九流",
          "itemId": "it-自在九流"
        }
      ],
      "tags": [
        "未央城",
        "大世界跑图"
      ],
      "palette": [
        {
          "color": "#496256",
          "name": "鸦青"
        },
        {
          "color": "#352822",
          "name": "紫檀"
        },
        {
          "color": "#8D7E7B",
          "name": "蟹壳青"
        }
      ],
      "hues": [
        "绿"
      ],
      "dyeCode": "",
      "outfitCode": "",
      "note": "未央城这么多小钱钱最适合我们九流鼠了~",
      "w": 1350,
      "h": 1800,
      "ctime": "2026-10-24"
    },
    {
      "id": "ot-079",
      "name": "海",
      "image": "assets/穿搭/ot-202610251844-2026102517452.png",
      "wearing": [
        {
          "part": "hair",
          "name": "寻山野",
          "itemId": "it-寻山野"
        },
        {
          "part": "top",
          "name": "枕寒流",
          "itemId": "it-枕寒流"
        },
        {
          "part": "bottom",
          "name": "寻山野",
          "itemId": "it-寻山野"
        }
      ],
      "tags": [
        "大世界跑图",
        "戏乐",
        "未央城"
      ],
      "palette": [
        {
          "color": "#E9E4E0",
          "name": "缟色"
        },
        {
          "color": "#3573AA",
          "name": "群青"
        },
        {
          "color": "#BF4A34",
          "name": "绯红"
        }
      ],
      "hues": [
        "蓝",
        "白"
      ],
      "dyeCode": "SHARE8c7054908035caa6",
      "outfitCode": "SHAREb542894eb28fd3df",
      "note": "这配色适合海底，简直海的女儿",
      "w": 1350,
      "h": 1800,
      "ctime": "2026-10-25"
    },
    {
      "id": "ot-080",
      "name": "苏丹",
      "image": "assets/穿搭/ot-202610252037-20261025203335.png",
      "wearing": [
        {
          "part": "hair",
          "name": "连衍墨山",
          "itemId": "it-墨山道"
        },
        {
          "part": "full",
          "name": "舞花间",
          "itemId": "it-舞花间"
        }
      ],
      "tags": [
        "江湖百态",
        "江湖百态·配色COS"
      ],
      "palette": [
        {
          "color": "#72141D",
          "name": "枣红"
        },
        {
          "color": "#D19F58",
          "name": "泥金"
        },
        {
          "color": "#556D5D",
          "name": "墨色"
        }
      ],
      "hues": [
        "橙"
      ],
      "dyeCode": "",
      "outfitCode": "SHAREe49f91088adabbdf",
      "note": "重生之我在大宋当苏丹，灵感来源：苏丹的游戏",
      "w": 1350,
      "h": 1800,
      "ctime": "2026-10-25"
    }
  ]
};
