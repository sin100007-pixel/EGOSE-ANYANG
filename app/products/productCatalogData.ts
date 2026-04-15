export type ProductCatalogCell = {
  code: string | null;
  price: string | number | null;
};

export type ProductCatalog = {
  key: "samsung" | "younglim" | "yelim";
  title: string;
  meta: string;
  cols: number;
  rows: ProductCatalogCell[][];
};

export const PRODUCT_CATALOGS: ProductCatalog[] = [
  {
    "key": "yelim",
    "title": "예림",
    "meta": "8×12 · 96개",
    "cols": 8,
    "rows": [
      [
        {
          "code": "HSM01",
          "price": 25
        },
        {
          "code": "HSM02",
          "price": 25
        },
        {
          "code": "HSM03",
          "price": 25
        },
        {
          "code": "HSM04",
          "price": 25
        },
        {
          "code": "HSM21",
          "price": 25
        },
        {
          "code": "HSM29",
          "price": 25
        },
        {
          "code": "HSM30",
          "price": 25
        },
        {
          "code": "HSM31",
          "price": 25
        }
      ],
      [
        {
          "code": "HE403",
          "price": 19
        },
        {
          "code": "HE404",
          "price": 25
        },
        {
          "code": "HS001",
          "price": 25
        },
        {
          "code": "HS009",
          "price": 25
        },
        {
          "code": "HS010",
          "price": 25
        },
        {
          "code": "HS013",
          "price": 25
        },
        {
          "code": "HS014",
          "price": 25
        },
        {
          "code": "HS015",
          "price": 25
        }
      ],
      [
        {
          "code": "HS029",
          "price": 25
        },
        {
          "code": "HS030",
          "price": 25
        },
        {
          "code": "HS031",
          "price": 25
        },
        {
          "code": "HS034",
          "price": 19.4
        },
        {
          "code": "HS043",
          "price": 21
        },
        {
          "code": "HS046",
          "price": 25
        },
        {
          "code": "HS053",
          "price": 25
        },
        {
          "code": "HC802",
          "price": 25
        }
      ],
      [
        {
          "code": "HC803",
          "price": 25
        },
        {
          "code": "HC804",
          "price": 25
        },
        {
          "code": "HA911",
          "price": 15
        },
        {
          "code": "HP507",
          "price": 25
        },
        {
          "code": "HP508",
          "price": 25
        },
        {
          "code": "HP514",
          "price": 20
        },
        {
          "code": "HP523",
          "price": 20.7
        },
        {
          "code": "HP524",
          "price": 25
        }
      ],
      [
        {
          "code": "HS 002",
          "price": 25
        },
        {
          "code": "HS004",
          "price": 25
        },
        {
          "code": "HS004",
          "price": 25
        },
        {
          "code": "HS005",
          "price": 25
        },
        {
          "code": "HE401",
          "price": 25
        },
        {
          "code": "HP506",
          "price": 9.1
        },
        {
          "code": "HC801",
          "price": 17.3
        },
        {
          "code": "HP521",
          "price": 25
        }
      ],
      [
        {
          "code": "HS002",
          "price": 25
        },
        {
          "code": "HS004",
          "price": 25
        },
        {
          "code": "HS004",
          "price": 25
        },
        {
          "code": "HS005",
          "price": 25
        },
        {
          "code": "HE401",
          "price": 25
        },
        {
          "code": "HP506",
          "price": 25
        },
        {
          "code": "HC801",
          "price": 25
        },
        {
          "code": "HP521",
          "price": 25
        }
      ],
      [
        {
          "code": "HS002",
          "price": 25
        },
        {
          "code": "HS004",
          "price": 25
        },
        {
          "code": "HS004",
          "price": 25
        },
        {
          "code": "HS042",
          "price": 22.8
        },
        {
          "code": "HE401",
          "price": 25
        },
        {
          "code": "HP506",
          "price": 25
        },
        {
          "code": "HC801",
          "price": 25
        },
        {
          "code": "HP521",
          "price": 25
        }
      ],
      [
        {
          "code": "HP522",
          "price": 25
        },
        {
          "code": "HP522",
          "price": 25
        },
        {
          "code": "HP525",
          "price": "20+17"
        },
        {
          "code": "HP540",
          "price": 25
        },
        {
          "code": "HW1011",
          "price": 25
        },
        {
          "code": "HW1003",
          "price": 25
        },
        {
          "code": "HW1004",
          "price": 25
        },
        {
          "code": "HW1005",
          "price": 25
        }
      ],
      [
        {
          "code": "HP522",
          "price": 25
        },
        {
          "code": "HP522",
          "price": 25
        },
        {
          "code": "HP521",
          "price": 25
        },
        {
          "code": "HP525",
          "price": 17
        },
        {
          "code": "HW1003",
          "price": 18.5
        },
        {
          "code": "HW1013",
          "price": 10.3
        },
        {
          "code": "HW1016",
          "price": 10
        },
        {
          "code": "HW1017",
          "price": 20
        }
      ],
      [
        {
          "code": "HP522",
          "price": 25
        },
        {
          "code": "HP522",
          "price": 25
        },
        {
          "code": "HP523",
          "price": 12.7
        },
        {
          "code": "HP524",
          "price": 22.5
        },
        {
          "code": "HW1018",
          "price": 16.4
        },
        {
          "code": "HW1019",
          "price": 15
        },
        {
          "code": "HW1021",
          "price": 13.1
        },
        {
          "code": "HW1036",
          "price": 18
        }
      ],
      [
        {
          "code": "HW1028",
          "price": 15.9
        },
        {
          "code": "HW1029",
          "price": 16.2
        },
        {
          "code": "HW1042",
          "price": 22.7
        },
        {
          "code": "HW1031",
          "price": 25
        },
        {
          "code": "HW1034",
          "price": 17.9
        },
        {
          "code": "HW1044",
          "price": 25
        },
        {
          "code": "HW1056",
          "price": 22.4
        },
        {
          "code": "HW1050",
          "price": 17.6
        }
      ],
      [
        {
          "code": "HW1060",
          "price": 25
        },
        {
          "code": "HW1063",
          "price": 25
        },
        {
          "code": "HW1064",
          "price": 25
        },
        {
          "code": "HW1068",
          "price": 16.6
        },
        {
          "code": "HW1069",
          "price": 20
        },
        {
          "code": "HW1081",
          "price": 11.7
        },
        {
          "code": "HN2003",
          "price": 18.5
        },
        {
          "code": "HN2002",
          "price": 15.9
        }
      ]
    ]
  },
  {
    "key": "younglim",
    "title": "영림",
    "meta": "9×12 · 108개",
    "cols": 9,
    "rows": [
      [
        {
          "code": "영림05",
          "price": 25
        },
        {
          "code": "PS003",
          "price": 25
        },
        {
          "code": "PS011",
          "price": 25
        },
        {
          "code": "PS012",
          "price": 25
        },
        {
          "code": "PS022",
          "price": 25
        },
        {
          "code": "PS025",
          "price": 25
        },
        {
          "code": "PS027",
          "price": 25
        },
        {
          "code": "PS028",
          "price": 25
        },
        {
          "code": "PS034",
          "price": 25
        }
      ],
      [
        {
          "code": "PS035",
          "price": 25
        },
        {
          "code": "PS037",
          "price": 25
        },
        {
          "code": "PS041",
          "price": 25
        },
        {
          "code": "PS047",
          "price": 25
        },
        {
          "code": "PS048",
          "price": 25
        },
        {
          "code": "PS049",
          "price": 25
        },
        {
          "code": "PS050",
          "price": 25
        },
        {
          "code": "PS061",
          "price": 25
        },
        {
          "code": "PS063",
          "price": 25
        }
      ],
      [
        {
          "code": "PS065",
          "price": 25
        },
        {
          "code": "PS066",
          "price": 25
        },
        {
          "code": "PS070",
          "price": 25
        },
        {
          "code": "PS072",
          "price": 25
        },
        {
          "code": "PS073",
          "price": 25
        },
        {
          "code": "PS080",
          "price": 25
        },
        {
          "code": "PS094",
          "price": 25
        },
        {
          "code": "PS095",
          "price": 25
        },
        {
          "code": "PS098",
          "price": 25
        }
      ],
      [
        {
          "code": "PS122",
          "price": 25
        },
        {
          "code": "PS123",
          "price": 15
        },
        {
          "code": "PS132",
          "price": 25
        },
        {
          "code": "PS134",
          "price": 20
        },
        {
          "code": "PS136",
          "price": 25
        },
        {
          "code": "PS137",
          "price": 25
        },
        {
          "code": "PS138",
          "price": 25
        },
        {
          "code": "PS139",
          "price": 25
        },
        {
          "code": "PS140",
          "price": 25
        }
      ],
      [
        {
          "code": "PS010",
          "price": 25
        },
        {
          "code": "PS010",
          "price": 25
        },
        {
          "code": "PS120",
          "price": 25
        },
        {
          "code": "PS130",
          "price": 25
        },
        {
          "code": "PS160",
          "price": 25
        },
        {
          "code": "PS170",
          "price": 25
        },
        {
          "code": "PSM180",
          "price": 25
        },
        {
          "code": "PSM182",
          "price": 25
        },
        {
          "code": "PSM185",
          "price": 25
        }
      ],
      [
        {
          "code": "PS010",
          "price": 25
        },
        {
          "code": "PS010",
          "price": 25
        },
        {
          "code": "PS120",
          "price": 25
        },
        {
          "code": "PS130",
          "price": 25
        },
        {
          "code": "PS160",
          "price": 25
        },
        {
          "code": "PS170",
          "price": 25
        },
        {
          "code": "PSM180",
          "price": 25
        },
        {
          "code": "PSM183",
          "price": 25
        },
        {
          "code": "PSM190",
          "price": 25
        }
      ],
      [
        {
          "code": "PS010",
          "price": 25
        },
        {
          "code": "PS010",
          "price": 25
        },
        {
          "code": "PS120",
          "price": 25
        },
        {
          "code": "PS130",
          "price": 25
        },
        {
          "code": "PS160",
          "price": 25
        },
        {
          "code": "PS170",
          "price": 25
        },
        {
          "code": "PSM181",
          "price": 22.5
        },
        {
          "code": "PSM184",
          "price": 25
        },
        {
          "code": "PSM190",
          "price": 25
        }
      ],
      [
        {
          "code": "PX449",
          "price": 25
        },
        {
          "code": "PX449-1",
          "price": 25
        },
        {
          "code": "PX450",
          "price": 25
        },
        {
          "code": "PX450-1",
          "price": 25
        },
        {
          "code": "PX450-4",
          "price": 25
        },
        {
          "code": "PX451",
          "price": 25
        },
        {
          "code": "PX452",
          "price": 25
        },
        {
          "code": "PSM182",
          "price": 25
        },
        {
          "code": "PSM191",
          "price": 25
        }
      ],
      [
        {
          "code": "PX449",
          "price": 25
        },
        {
          "code": "PX449-2",
          "price": 25
        },
        {
          "code": "PX450",
          "price": 25
        },
        {
          "code": "PX450-2",
          "price": 25
        },
        {
          "code": "PX450-5",
          "price": 24.5
        },
        {
          "code": "PX451-1",
          "price": 25
        },
        {
          "code": "PX452-1",
          "price": 25
        },
        {
          "code": "PSM183",
          "price": 25
        },
        {
          "code": "PSM194",
          "price": 25
        }
      ],
      [
        {
          "code": "PX449",
          "price": 25
        },
        {
          "code": "PX449-3",
          "price": 25
        },
        {
          "code": "PX450",
          "price": 25
        },
        {
          "code": "PX450-3",
          "price": 25
        },
        {
          "code": "PX451",
          "price": 25
        },
        {
          "code": "PX451-2",
          "price": 25
        },
        {
          "code": "PX454",
          "price": 25
        },
        {
          "code": "PSM184",
          "price": 25
        },
        {
          "code": "PSM198",
          "price": 25
        }
      ],
      [
        {
          "code": "PW801",
          "price": 25
        },
        {
          "code": "PW803",
          "price": 25
        },
        {
          "code": "PW810",
          "price": 25
        },
        {
          "code": "PW811",
          "price": 25
        },
        {
          "code": "PW812",
          "price": 25
        },
        {
          "code": "PW814",
          "price": 25
        },
        {
          "code": "PW835",
          "price": 25
        },
        {
          "code": "PW845",
          "price": 25
        },
        {
          "code": "PW847",
          "price": 25
        }
      ],
      [
        {
          "code": "PW905",
          "price": 25
        },
        {
          "code": "PW924-1",
          "price": 25
        },
        {
          "code": "PW937",
          "price": 25
        },
        {
          "code": "PW957",
          "price": 25
        },
        {
          "code": "PW961",
          "price": 25
        },
        {
          "code": "PW961-1",
          "price": 25
        },
        {
          "code": "PW966-1",
          "price": 25
        },
        {
          "code": "PW968",
          "price": 25
        },
        {
          "code": "PW969",
          "price": 25
        }
      ]
    ]
  },
  {
    "key": "samsung",
    "title": "삼성",
    "meta": "9×12 · 108개",
    "cols": 9,
    "rows": [
      [
        {
          "code": "안개120",
          "price": 25
        },
        {
          "code": "MG50",
          "price": 25
        },
        {
          "code": "SG54",
          "price": 25
        },
        {
          "code": "SG72",
          "price": 25
        },
        {
          "code": "SG81",
          "price": 25
        },
        {
          "code": "SG84",
          "price": 25
        },
        {
          "code": "SG86",
          "price": 25
        },
        {
          "code": "SG87",
          "price": 25
        },
        {
          "code": "SG89",
          "price": 25
        }
      ],
      [
        {
          "code": "SG91",
          "price": 25
        },
        {
          "code": "SG97",
          "price": 25
        },
        {
          "code": "SG104",
          "price": 25
        },
        {
          "code": "SG105",
          "price": 25
        },
        {
          "code": "SG107",
          "price": 25
        },
        {
          "code": "SG113",
          "price": 25
        },
        {
          "code": "SG114",
          "price": 25
        },
        {
          "code": "SG119",
          "price": 25
        },
        {
          "code": "SG119",
          "price": 25
        }
      ],
      [
        {
          "code": "SG121",
          "price": 25
        },
        {
          "code": "SG122",
          "price": 25
        },
        {
          "code": "MG123",
          "price": 25
        },
        {
          "code": "MG125",
          "price": 25
        },
        {
          "code": "SG128",
          "price": 25
        },
        {
          "code": "SG134",
          "price": 25
        },
        {
          "code": "SG153",
          "price": 25
        },
        {
          "code": "SG153",
          "price": 25
        },
        {
          "code": "SG165",
          "price": 25
        }
      ],
      [
        {
          "code": "SG181",
          "price": 25
        },
        {
          "code": "NG250",
          "price": 25
        },
        {
          "code": "SG270",
          "price": 25
        },
        {
          "code": "NG400",
          "price": 25
        },
        {
          "code": "MG499",
          "price": 25
        },
        {
          "code": "SG1102",
          "price": 25
        },
        {
          "code": "SG1110",
          "price": 25
        },
        {
          "code": "SG1110",
          "price": 25
        },
        {
          "code": "SG1111",
          "price": 25
        }
      ],
      [
        {
          "code": "SG1127",
          "price": 25
        },
        {
          "code": "SG1128",
          "price": 25
        },
        {
          "code": "SG1129",
          "price": 25
        },
        {
          "code": "SG1134",
          "price": 25
        },
        {
          "code": "SG1135",
          "price": 25
        },
        {
          "code": "SG1160",
          "price": 25
        },
        {
          "code": "SG1162",
          "price": 25
        },
        {
          "code": "SG1172",
          "price": 25
        },
        {
          "code": "SG1188",
          "price": 25
        }
      ],
      [
        {
          "code": "SG1194",
          "price": 25
        },
        {
          "code": "SG1196",
          "price": 25
        },
        {
          "code": "SG1197",
          "price": 25
        },
        {
          "code": "SG1198",
          "price": 25
        },
        {
          "code": "SG1201",
          "price": 25
        },
        {
          "code": "SG1202",
          "price": 25
        },
        {
          "code": "SG1203",
          "price": 25
        },
        {
          "code": "SG1204",
          "price": 25
        },
        {
          "code": "SG1205",
          "price": 25
        }
      ],
      [
        {
          "code": "SG1206",
          "price": 25
        },
        {
          "code": "NG2017",
          "price": 25
        },
        {
          "code": "NG2018",
          "price": 25
        },
        {
          "code": "NG2020",
          "price": 25
        },
        {
          "code": "NG2029",
          "price": 25
        },
        {
          "code": "NG2030",
          "price": 25
        },
        {
          "code": "NG2033",
          "price": 25
        },
        {
          "code": "MG3026",
          "price": 25
        },
        {
          "code": "MG3027",
          "price": 25
        }
      ],
      [
        {
          "code": "MG3050",
          "price": 25
        },
        {
          "code": "MG3054",
          "price": 25
        },
        {
          "code": "MG3081",
          "price": 25
        },
        {
          "code": "VG3700",
          "price": 25
        },
        {
          "code": "VG3701",
          "price": 25
        },
        {
          "code": "VG3702",
          "price": 25
        },
        {
          "code": "TG4018",
          "price": 25
        },
        {
          "code": "TG4024",
          "price": 25
        },
        {
          "code": "TG4025",
          "price": 25
        }
      ],
      [
        {
          "code": "TG4026",
          "price": 25
        },
        {
          "code": "KG4200",
          "price": 25
        },
        {
          "code": "ZG5009",
          "price": 25
        },
        {
          "code": "ZG5010",
          "price": 25
        },
        {
          "code": "ZG5022",
          "price": 25
        },
        {
          "code": "ZG5038",
          "price": 25
        },
        {
          "code": "HG5102",
          "price": 25
        },
        {
          "code": "HG5103",
          "price": 25
        },
        {
          "code": "CG5520",
          "price": 25
        }
      ],
      [
        {
          "code": "CG 5506",
          "price": 25
        },
        {
          "code": "ZG 5019",
          "price": 25
        },
        {
          "code": "ZG5028",
          "price": 25
        },
        {
          "code": "ZG 5030",
          "price": 25
        },
        {
          "code": "HG 5107",
          "price": 25
        },
        {
          "code": "HG 5117",
          "price": 25
        },
        {
          "code": "CG 5504",
          "price": 25
        },
        {
          "code": "CG 5509",
          "price": 25
        },
        {
          "code": "CG5526",
          "price": 25
        }
      ],
      [
        {
          "code": "ZG 5018",
          "price": 25
        },
        {
          "code": "ZG 5020",
          "price": 25
        },
        {
          "code": "ZG 5029",
          "price": 25
        },
        {
          "code": "HG 5104",
          "price": 25
        },
        {
          "code": "HG 5112",
          "price": 28
        },
        {
          "code": "HG 5123",
          "price": 25
        },
        {
          "code": "CG 5507",
          "price": 25
        },
        {
          "code": "CG 5525",
          "price": 25
        },
        {
          "code": "CG 5533",
          "price": 25
        }
      ],
      [
        {
          "code": "CG5529",
          "price": 25
        },
        {
          "code": "XG7017",
          "price": 17.8
        },
        {
          "code": "JG 9000",
          "price": 25
        },
        {
          "code": "SF 1202",
          "price": 30
        },
        {
          "code": "HG 5116",
          "price": 27
        },
        {
          "code": "CG 5500",
          "price": 25
        },
        {
          "code": "CG 5508",
          "price": 25
        },
        {
          "code": "HG 5016",
          "price": 25
        },
        {
          "code": "CG 5527",
          "price": 25
        }
      ]
    ]
  }
];
