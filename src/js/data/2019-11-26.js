dataSetVersion = "2020-12-06"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Character's Type",
    key: "type",
    tooltip: "Check this to restrict to certain character types.",
    checked: false,
    sub: [
      { name: "Meta World", key: "meta" },
      { name: "Human", tooltip: "Humans", key: "human" },
      { name: "Minor", tooltip: "Minor Characters", key: "minor" },
    ]
  },
 ];

dataSet[dataSetVersion].characterData = [
  {
    name: "Ushiromiya Battler",
    img: "/9cgF819/But-b11-warai1.png",
    opts: {
      type: ["meta", "human"],
    }
  },
  {
    name: "Ushiromiya Jessica",
    img: "/S0BgZfQ/Ushiromiya-Jessica9.png",
    opts: {
      type: ["human"],
    }
  },
  {
    name: "Ushiromiya Maria",
    img: "/QPZJtRv/Mar-b11-angry-1.png",
    opts: {
      type: ["human", "meta"],
    }
  },
  {
    name: "Bernkastel",
    img: "/528bbvX/Ber-a24-odoroki1.png",
    opts: {
      type: ["meta"],
    },
  },
  {
    name: "Lambdadelta",
    img: "/4FXSmWQ/lam-a11-bup-bmp.png",
    opts: {
      type: ["meta"],
    }
  },
  {
    name: "Furudo Erika",
    img: "/6sp6pNc/erika-furudo-ougon-musou-kyoku-portrait-by-archeritt-ddcsmbe-fullview.png",
    opts: {
      type: ["meta", "human"],
    }
  },
  {
    name: "Beatrice",
    img: "/b7j4qhM/Bea-a11-def2.png",
    opts: {
      type: ["meta"],
    }
  },
  {
    name: "Virgilia",
    img: "/tMm73hz/d41a86d12bf24cdb858fd8872571f3fe.png",
    opts: {
      type: ["meta"],
    }
  },
  {
    name: "Featherine Augustus Aurora",
    img: "/MCDDKbv/Fea-b12-def2.png",
    opts: {
      type: ["meta"],
    }
  },
  {
    name: "Chick Beatrice",
    img: "/G0K1whF/Bea-a15-1-hajirai2.png",
    opts: {
      type: ["meta"],
    }
  },
  {
    name: "Elder Beatrice",
    img: "/jVSjp3Y/Be2-a11-akuwaraia3.png",
    opts: {
      type: ["meta"],
    }
  },
  {
    name: "Gaap",
    img: "/F4RMGkg/199px-Gaap-Normal.png",
    opts: {
      type: ["meta"],
    }
  },
  {
    name: "EVA",
    img: "/Mfmb3nZ/PC-EVA-Beatrice-4.png",
    opts: {
      type: ["meta"],
    }
  },
  {
    name: "Ronove",
    img: "/YbVYS53/Ron-a11-akuwarai1.png",
    opts: {
      type: ["meta"],
    }
  },
  {
    name: "Sakutarou",
    img: "/bjVzgS0/sakutaro.png",
    opts: {
      type: ["meta"],
    }
  },
  {
    name: "Zepar",
    img: "/qYVK85F/PC-Zepar-Sprite-2.png",
    opts: {
      type: ["meta"],
    }
  },
  {
    name: "Furfur",
    img: "/87WD2mF/PC-Furfur-Sprite-2.png",
    opts: {
      type: ["meta"],
    }
  },
  {
    name: "Lucifer",
    img: "/CWc2qCr/PC-Lucifer-Sprite-20.png",
    opts: {
      type: ["meta"],
    }
  },
  {
    name: "Leviathan",
    img: "/Bj7KXKb/PC-Leviathan-Sprite-2.png",
    opts: {
      type: ["meta"],
    }
  },
  {
    name: "Satan",
    img: "/dGbyHbT/PC-Satan-Sprite-11.png",
    opts: {
      type: ["meta"],
    }
  },
  {
    name: "Belphegor",
    img: "/WKbQgSQ/PC-Belphegor-Sprite-8.png",
    opts: {
      type: ["meta"],
    }
  },
  {
    name: "Mammon",
    img: "/c2kHg3L/PC-Mammon-Sprite-9.png",
    opts: {
      type: ["meta"],
    }
  },
  {
    name: "Asmodeus",
    img: "/pW4XrXM/PC-Asmodeus-Sprite-9.png",
    opts: {
      type: ["meta"],
    }
  },
  {
    name: "Beelzebub",
    img: "/tYc3gWJ/PC-Beelzebub-Sprite-21.png",
    opts: {
      type: ["meta"],
    }
  },
  {
    name: "Kanon",
    img: "/CH4sqjd/Kan-a11-def2.png",
    opts: {
      type: ["meta", "human"],
    }
  },
  {
    name: "Shannon",
    img: "/PgJpqsL/Sha-a11-warai2.png",
    opts: {
      type: ["meta", "human"],
    }
  },
  {
    name: "Chiester 410",
    img: "/S3swv6m/Siesta-410-2.png",
    opts: {
      type: ["meta"],
    }
  },
  {
    name: "Chiester 00",
    img: "/h2MfG4w/Siesta00.png",
    opts: {
      type: ["meta"],
    }
  },
  {
    name: "Chiester 45",
    img: "/nb3dPCW/S45-a11-def1.png",
    opts: {
      type: ["meta"],
    }
  },
  {
    name: "Chiester 556",
    img: "/PCPksQq/Siesta556.png",
    opts: {
      type: ["meta"],
    }
  },
  {
    name: "Clair Vaux Bernardus",
    img: "/PhX0hd2/f9ba9653c6c838bbedf7091ad60980da.jpg",
    opts: {
      type: ["meta"],
    }
  },
  {
    name: "Dlanor A. Knox",
    img: "/MVDyHzR/Dla-a11-def1.png",
    opts: {
      type: ["meta"],
    }
  },
  {
    name: "Gertrude",
    img: "/T24GM5t/Ger-a11-def1.png",
    opts: {
      type: ["meta"],
    }
  },
  {
    name: "Cornelia",
    img: "/nB15F2W/Cornelia-Eiserne-Jungfrau-full-245055.jpg",
    opts: {
      type: ["meta"],
    }
  },
  {
    name: "Piece",
    img: "/y5ncydP/Piece-OG-281629.png",
    opts: {
      type: ["meta"],
    }
  },
  {
    name: "Willard H. Wright",
    img: "/tJ1SG5s/Wil-a12-fuman1.png",
    opts: {
      type: ["meta"],
    }
  },
  {
    name: "Genji",
    img: "/XJhdd4Q/325-3256096-genji-ronoue-umineko-ps3-sprites.png",
    opts: {
      type: ["human"],
    }
  },
  {
    name: "Ushiromiya Natsuhi",
    img: "/BLjzqBN/Nat-a11-default-1.png",
    opts: {
      type: ["human"],
    }
  },
  {
    name: "Ushiromiya Rosa",
    img: "/QNy0M8j/Rosa1.png",
    opts: {
      type: ["human"],
    }
  },
  {
    name: "Ushiromiya Eva",
    img: "/BtSPSM8/Eva-b11-default-1.png",
    opts: {
      type: ["human"],
    }
  },
  {
    name: "Ushiromiya George",
    img: "/SxvrSzY/Geo-a11-hohoemi1.png",
    opts: {
      type: ["human"],
    }
  },
  {
    name: "Ushiromiya Kyrie",
    img: "/Lr8wLgK/Ougon-kyrie.png",
    opts: {
      type: ["human"],
    }
  },
  {
    name: "Ushiromiya Lion",
    img: "/fS34S1h/Rio-a11-def1.png",
    opts: {
      type: ["human", "meta"],
    }
  },
  {
    name: "Ushiromiya Rudolf",
    img: "/1RtK36K/Rudolf.png",
    opts: {
      type: ["human"],
    }
  },
  {
    name: "Ushiromiya Krauss",
    img: "/QvccDLv/Cla-a11-default-1.png",
    opts: {
      type: ["human"],
    }
  },
  {
    name: "Ushiromiya Hideyoshi",
    img: "/Jsds138/Hid-a11-def1.png",
    opts: {
      type: ["human"],
    }
  },
  {
    name: "Kasumi Sumadera",
    img: "/G3nRy3d/Sumadera-Kasumi-600-1905416.jpg",
    opts: {
      type: ["human", "minor"],
    }
  },
  {
    name: "Yasuda",
    img: "/0cn3mWX/Umineko-no-Naku-Koro-ni-full-2238631.png",
    opts: {
      type: ["human"],
    }
  },
  {
    name: "Ushiromiya Asumu",
    img: "/TY8Jm9k/235119.jpg",
    opts: {
      type: ["human", "minor"],
    }
  },
  {
    name: "Kuwadorian Beatrice",
    img: "/4dVSXDg/Bea-hanbesob1.png",
    opts: {
      type: ["human", "minor"],
    }
  },
  {
    name: "Black BATTLER",
    img: "/qrB3RBv/Ougon-bbattler.png",
    opts: {
      type: ["human"],
    }
  },
  {
    name: "Flauros",
    img: "/DbVm4Pb/Flauros-OG-7.png",
    opts: {
      type: ["meta", "minor"],
    }
  },
 ];
