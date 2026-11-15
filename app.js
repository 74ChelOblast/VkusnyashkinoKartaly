'use strict';
const photo = number => `assets/products/photo-${String(number).padStart(2,'0')}.png`;
const enhanced = number => `assets/products/photo-${String(number).padStart(2,'0')}-enhanced.png`;
const products = [
  {
    "id": "work-001",
    "filters": [
      "zephyr",
      "bouquet"
    ],
    "title": "Букеты для учителя",
    "category": "Зефирный букет",
    "description": "Два варианта оформления с открытками для учителя.",
    "images": [
      "assets/catalog/item-001.webp"
    ],
    "priceFrom": 600
  },
  {
    "id": "work-002",
    "filters": [
      "zephyr",
      "basket"
    ],
    "title": "Розовые тюльпаны в корзинке",
    "category": "Зефирная корзинка",
    "description": "Розово-белые цветы, зелёная ручка и светлая лента.",
    "images": [
      "assets/catalog/item-002.webp"
    ],
    "priceFrom": 1000
  },
  {
    "id": "work-003",
    "filters": [
      "zephyr",
      "bouquet"
    ],
    "title": "Большой букет в упаковке с сердечками",
    "category": "Зефирный букет",
    "description": "Пастельные тюльпаны и розовая упаковка с сердечками.",
    "images": [
      "assets/catalog/item-003.webp"
    ],
    "priceFrom": 2000
  },
  {
    "id": "pink-wrap",
    "filters": [
      "zephyr",
      "bouquet"
    ],
    "title": "Тюльпаны в розовой упаковке",
    "category": "Зефирный букет",
    "description": "Белые и кремовые тюльпаны, розовая упаковка и атласная лента.",
    "images": [
      "assets/products/photo-01.png"
    ],
    "priceFrom": 1000
  },
  {
    "id": "cream-basket",
    "filters": [
      "zephyr",
      "basket"
    ],
    "title": "Тюльпаны в корзинке",
    "category": "Зефирная корзинка",
    "description": "Светлые тюльпаны в плетёной корзинке с белым бантом.",
    "images": [
      "assets/products/photo-02.png"
    ],
    "priceFrom": 1000
  },
  {
    "id": "kraft-tulips",
    "filters": [
      "zephyr",
      "bouquet"
    ],
    "title": "Кремовые тюльпаны",
    "category": "Зефирный букет",
    "description": "Белые и кремовые цветы в крафтовой упаковке.",
    "images": [
      "assets/products/photo-03.png"
    ],
    "priceFrom": 1000
  },
  {
    "id": "for-you",
    "filters": [
      "bouquet",
      "zephyr"
    ],
    "title": "Букет «Для тебя»",
    "category": "Зефирный букет",
    "description": "Красная упаковка, цветочный рисунок и надпись «Для тебя».",
    "images": [
      "assets/products/photo-07-enhanced.png"
    ],
    "priceFrom": 1000
  },
  {
    "id": "pink-tulips",
    "filters": [
      "zephyr",
      "bouquet"
    ],
    "title": "Розовые тюльпаны",
    "category": "Зефирные букеты",
    "description": "Варианты букетов с розовыми, белыми и малиновыми тюльпанами.",
    "images": [
      "assets/products/photo-08.png"
    ],
    "priceFrom": 1500
  },
  {
    "id": "roses",
    "filters": [
      "bouquet",
      "zephyr"
    ],
    "title": "Розы и пионы",
    "category": "Зефирный букет",
    "description": "Красные, розовые и белые цветы в нежной розовой упаковке.",
    "images": [
      "assets/products/photo-10-enhanced.png"
    ],
    "priceFrom": 2500
  },
  {
    "id": "red-wrap",
    "filters": [
      "zephyr",
      "bouquet"
    ],
    "title": "Тюльпаны в красной упаковке",
    "category": "Зефирный букет",
    "description": "Светло-розовые тюльпаны с зелёными листьями и красным бантом.",
    "images": [
      "assets/products/photo-11.png"
    ],
    "priceFrom": 900
  },
  {
    "id": "color-tulips",
    "filters": [
      "zephyr",
      "bouquet"
    ],
    "title": "Разноцветные тюльпаны",
    "category": "Зефирный букет",
    "description": "Розовые, сиреневые, белые и красные тюльпаны в одном букете.",
    "images": [
      "assets/products/photo-12.png"
    ],
    "priceFrom": 900
  },
  {
    "id": "work-004",
    "filters": [
      "zephyr",
      "bouquet"
    ],
    "title": "Тюльпаны в сиреневой упаковке",
    "category": "Зефирный букет",
    "description": "Пастельные цветы в сиреневой и белой упаковке.",
    "images": [
      "assets/catalog/item-004.webp"
    ],
    "priceFrom": 1600
  },
  {
    "id": "work-005",
    "filters": [
      "zephyr",
      "basket"
    ],
    "title": "Цветы в розовой корзинке",
    "category": "Зефирная корзинка",
    "description": "Розовая корзинка с ручкой и белым бантом.",
    "images": [
      "assets/catalog/item-005.webp"
    ],
    "priceFrom": 1200
  },
  {
    "id": "work-007",
    "filters": [
      "zephyr",
      "bouquet"
    ],
    "title": "Разноцветные тюльпаны в яркой упаковке",
    "category": "Зефирный букет",
    "description": "Разноцветные цветы в упаковке с леопардовым рисунком.",
    "images": [
      "assets/catalog/item-007.webp"
    ],
    "priceFrom": 1500
  },
  {
    "id": "work-008",
    "filters": [
      "zephyr",
      "bouquet"
    ],
    "title": "Хризантемы и тюльпаны",
    "category": "Зефирный букет",
    "description": "Розовые хризантемы и тюльпаны в цветочном конверте.",
    "images": [
      "assets/catalog/item-008.webp"
    ],
    "priceFrom": 2000
  },
  {
    "id": "work-013",
    "filters": [
      "zephyr",
      "bouquet"
    ],
    "title": "Розовые и белые хризантемы",
    "category": "Зефирный букет",
    "description": "Светлые и коралловые цветы с розовой лентой.",
    "images": [
      "assets/catalog/item-013.webp"
    ],
    "priceFrom": 2000
  },
  {
    "id": "work-015",
    "filters": [
      "zephyr",
      "bouquet"
    ],
    "title": "Маки и ромашка",
    "category": "Зефирный букет",
    "description": "Красные маки, белая ромашка и розовые бутоны.",
    "images": [
      "assets/catalog/item-015.webp"
    ],
    "priceFrom": 1000
  },
  {
    "id": "work-016",
    "filters": [
      "zephyr",
      "bouquet"
    ],
    "title": "Бело-розовые тюльпаны",
    "category": "Зефирный букет",
    "description": "Цветочная композиция ручной работы. Размер и оформление можно обсудить в MAX.",
    "images": [
      "assets/catalog/item-016.webp"
    ],
    "priceFrom": 1600
  },
  {
    "id": "work-018",
    "filters": [
      "zephyr",
      "bouquet"
    ],
    "title": "Мини-букет в красной упаковке",
    "category": "Зефирный букет",
    "description": "Цветочная композиция ручной работы. Размер и оформление можно обсудить в MAX.",
    "images": [
      "assets/catalog/item-018.webp"
    ],
    "priceFrom": 500
  },
  {
    "id": "work-019",
    "filters": [
      "zephyr",
      "bouquet"
    ],
    "title": "Подсолнухи и ромашки",
    "category": "Зефирный букет",
    "description": "Яркие подсолнухи и белые ромашки в жёлтой упаковке.",
    "images": [
      "assets/catalog/item-019.webp"
    ],
    "priceFrom": 2000
  },
  {
    "id": "work-021",
    "filters": [
      "zephyr",
      "bouquet"
    ],
    "title": "Букет с маками и ромашками",
    "category": "Зефирный букет",
    "description": "Маки и ромашки со светлой упаковкой и яркими лентами.",
    "images": [
      "assets/catalog/item-021.webp"
    ],
    "priceFrom": 1600
  },
  {
    "id": "work-022",
    "filters": [
      "zephyr"
    ],
    "title": "Роза под куполом",
    "category": "Зефирные сладости",
    "description": "Розовая роза в прозрачной подарочной упаковке.",
    "images": [
      "assets/catalog/item-022.webp"
    ],
    "priceFrom": 300
  },
  {
    "id": "work-023",
    "filters": [
      "zephyr",
      "bouquet"
    ],
    "title": "Красные тюльпаны в розовой упаковке",
    "category": "Зефирный букет",
    "description": "Цветочная композиция ручной работы. Размер и оформление можно обсудить в MAX.",
    "images": [
      "assets/catalog/item-023.webp"
    ],
    "priceFrom": 1000
  },
  {
    "id": "work-024",
    "filters": [
      "zephyr",
      "bouquet"
    ],
    "title": "Большой букет пастельных тюльпанов",
    "category": "Зефирный букет",
    "description": "Цветочная композиция ручной работы. Размер и оформление можно обсудить в MAX.",
    "images": [
      "assets/catalog/item-024.webp"
    ],
    "priceFrom": 3500
  },
  {
    "id": "work-025",
    "filters": [
      "zephyr",
      "bouquet"
    ],
    "title": "Букет розовых роз",
    "category": "Зефирный букет",
    "description": "Розовые цветы в упаковке с крупным горошком.",
    "images": [
      "assets/catalog/item-025.webp"
    ],
    "priceFrom": 2000
  },
  {
    "id": "work-026",
    "filters": [
      "zephyr"
    ],
    "title": "Одна роза в упаковке",
    "category": "Зефирные сладости",
    "description": "Роза в бумажной упаковке с красной лентой.",
    "images": [
      "assets/catalog/item-026.webp"
    ],
    "priceFrom": 350
  },
  {
    "id": "work-027",
    "filters": [
      "zephyr"
    ],
    "title": "Три розовых бутона",
    "category": "Зефирные сладости",
    "description": "Три розовых бутона со светлой упаковкой.",
    "images": [
      "assets/catalog/item-027.webp"
    ],
    "priceFrom": 500
  },
  {
    "id": "work-028",
    "filters": [
      "zephyr",
      "bouquet"
    ],
    "title": "Букет с зелёным бантом",
    "category": "Зефирный букет",
    "description": "Цветочная композиция ручной работы. Размер и оформление можно обсудить в MAX.",
    "images": [
      "assets/catalog/item-028.webp"
    ],
    "priceFrom": 900
  },
  {
    "id": "work-029",
    "filters": [
      "zephyr"
    ],
    "title": "Красный тюльпан в крафте",
    "category": "Зефирные сладости",
    "description": "Красный бутон в крафтовой упаковке с розовой лентой.",
    "images": [
      "assets/catalog/item-029.webp"
    ],
    "priceFrom": 200
  },
  {
    "id": "work-030",
    "filters": [
      "zephyr",
      "bouquet"
    ],
    "title": "Тюльпаны в розовом конверте",
    "category": "Зефирный букет",
    "description": "Цветочная композиция ручной работы. Размер и оформление можно обсудить в MAX.",
    "images": [
      "assets/catalog/item-030.webp"
    ],
    "priceFrom": 850
  },
  {
    "id": "work-031",
    "filters": [
      "zephyr",
      "bouquet"
    ],
    "title": "Розовые и белые тюльпаны",
    "category": "Зефирный букет",
    "description": "Цветочная композиция ручной работы. Размер и оформление можно обсудить в MAX.",
    "images": [
      "assets/catalog/item-031.webp"
    ],
    "priceFrom": 1800
  },
  {
    "id": "work-032",
    "filters": [
      "zephyr",
      "bouquet"
    ],
    "title": "Жёлтые и сиреневые тюльпаны",
    "category": "Зефирный букет",
    "description": "Цветочная композиция ручной работы. Размер и оформление можно обсудить в MAX.",
    "images": [
      "assets/catalog/item-032.webp"
    ],
    "priceFrom": 1800
  },
  {
    "id": "work-033",
    "filters": [
      "zephyr",
      "bouquet"
    ],
    "title": "Тюльпаны в бордовой упаковке",
    "category": "Зефирный букет",
    "description": "Цветочная композиция ручной работы. Размер и оформление можно обсудить в MAX.",
    "images": [
      "assets/catalog/item-033.webp"
    ],
    "priceFrom": 2000
  },
  {
    "id": "work-034",
    "filters": [
      "zephyr",
      "bouquet"
    ],
    "title": "Букет белых и розовых роз",
    "category": "Зефирный букет",
    "description": "Цветочная композиция ручной работы. Размер и оформление можно обсудить в MAX.",
    "images": [
      "assets/catalog/item-034.webp"
    ],
    "priceFrom": 1800
  },
  {
    "id": "work-036",
    "filters": [
      "gingerbread"
    ],
    "title": "Пряничные пятёрки",
    "category": "Пряники ручной работы",
    "description": "Пряники с глазурью в форме школьной пятёрки.",
    "images": [
      "assets/catalog/item-036.webp"
    ],
    "priceFrom": 150
  },
  {
    "id": "work-037",
    "filters": [
      "gingerbread"
    ],
    "title": "Пряничные колокольчики",
    "category": "Пряники ручной работы",
    "description": "Колокольчики с розовыми бантами в подарочной коробке.",
    "images": [
      "assets/catalog/item-037.webp"
    ],
    "priceFrom": 120
  },
  {
    "id": "work-041",
    "filters": [
      "gingerbread"
    ],
    "title": "Пряники ко Дню знаний",
    "category": "Пряники ручной работы",
    "description": "Школьные пятёрки и осенние листочки с росписью.",
    "images": [
      "assets/catalog/item-041.webp"
    ],
    "priceFrom": 200
  },
  {
    "id": "work-042",
    "filters": [
      "zephyr",
      "basket"
    ],
    "title": "Ромашки и подсолнух в корзинке",
    "category": "Зефирная корзинка",
    "description": "Небольшая зелёная корзинка с цветами и светлым бантом.",
    "images": [
      "assets/catalog/item-042.webp"
    ],
    "priceFrom": 1200
  },
  {
    "id": "work-043",
    "filters": [
      "zephyr",
      "bouquet"
    ],
    "title": "Красные тюльпаны с жёлтыми веточками",
    "category": "Зефирный букет",
    "description": "Цветочная композиция ручной работы. Размер и оформление можно обсудить в MAX.",
    "images": [
      "assets/catalog/item-043.webp"
    ],
    "priceFrom": 2000
  },
  {
    "id": "work-044",
    "filters": [
      "gingerbread",
      "holiday"
    ],
    "title": "Пряничная композиция с лошадкой",
    "category": "Пряники ручной работы",
    "description": "Расписная композиция с ёлочкой и лошадкой.",
    "images": [
      "assets/catalog/item-044.webp"
    ],
    "priceFrom": 800
  },
  {
    "id": "work-045",
    "filters": [
      "gingerbread"
    ],
    "title": "Пряничные сердечки",
    "category": "Пряники ручной работы",
    "description": "Сердечки с цветочной росписью и лентами.",
    "images": [
      "assets/catalog/item-045.webp"
    ],
    "priceFrom": 150
  },
  {
    "id": "work-054",
    "filters": [
      "gingerbread",
      "holiday"
    ],
    "title": "Пряничная кружка «С Новым годом»",
    "category": "Пряники ручной работы",
    "description": "Подарочное оформление с новогодней надписью.",
    "images": [
      "assets/catalog/item-054.webp"
    ],
    "priceFrom": 300
  },
  {
    "id": "work-055",
    "filters": [
      "gingerbread",
      "holiday"
    ],
    "title": "Пряничный домик",
    "category": "Пряники ручной работы",
    "description": "Объёмный домик с красной крышей и белой росписью.",
    "images": [
      "assets/catalog/item-055.webp"
    ],
    "priceFrom": 900
  },
  {
    "id": "work-056",
    "filters": [
      "gingerbread",
      "holiday"
    ],
    "title": "Пряник-домик с венком",
    "category": "Пряники ручной работы",
    "description": "Домик с венком и узорами из глазури.",
    "images": [
      "assets/catalog/item-056.webp"
    ],
    "priceFrom": 200
  },
  {
    "id": "work-057",
    "filters": [
      "gingerbread",
      "holiday"
    ],
    "title": "Пряничный Дед Мороз",
    "category": "Пряники ручной работы",
    "description": "Фигурный пряник с Дедом Морозом и мешком подарков.",
    "images": [
      "assets/catalog/item-057.webp"
    ],
    "priceFrom": 200
  },
  {
    "id": "work-058",
    "filters": [
      "gingerbread",
      "holiday"
    ],
    "title": "Расписной пряник-домик",
    "category": "Пряники ручной работы",
    "description": "Красный домик с белым растительным узором.",
    "images": [
      "assets/catalog/item-058.webp"
    ],
    "priceFrom": 180
  },
  {
    "id": "work-059",
    "filters": [
      "gingerbread",
      "holiday"
    ],
    "title": "Пряничная ёлочка с пожеланием",
    "category": "Пряники ручной работы",
    "description": "Зелёная ёлочка с праздничным пожеланием.",
    "images": [
      "assets/catalog/item-059.webp"
    ],
    "priceFrom": 150
  },
  {
    "id": "work-060",
    "filters": [
      "zephyr",
      "holiday"
    ],
    "title": "Зефирные мандаринки",
    "category": "Зефирные сладости",
    "description": "Зефир в форме мандаринок в прозрачной упаковке.",
    "images": [
      "assets/catalog/item-060.webp"
    ],
    "priceFrom": 300
  },
  {
    "id": "work-061",
    "filters": [
      "holiday"
    ],
    "title": "Большая ёлочка в подарочной коробке",
    "category": "Праздничные сладости",
    "description": "Праздничная ёлочка в прозрачной коробке с голубой лентой.",
    "images": [
      "assets/catalog/item-061.webp"
    ],
    "priceFrom": 400
  },
  {
    "id": "work-062",
    "filters": [
      "holiday"
    ],
    "title": "Гномик в красном колпаке",
    "category": "Праздничные сладости",
    "description": "Подарочная фигурка с красным колпаком под прозрачным куполом.",
    "images": [
      "assets/catalog/item-062.webp"
    ],
    "priceFrom": 300
  },
  {
    "id": "work-063",
    "filters": [
      "holiday"
    ],
    "title": "Гномик в зелёном колпаке",
    "category": "Праздничные сладости",
    "description": "Подарочная фигурка с зелёным колпаком под прозрачным куполом.",
    "images": [
      "assets/catalog/item-063.webp"
    ],
    "priceFrom": 300
  },
  {
    "id": "work-064",
    "filters": [
      "holiday"
    ],
    "title": "Ёлочка под куполом",
    "category": "Праздничные сладости",
    "description": "Миниатюрная ёлочка со звёздочкой в подарочной упаковке.",
    "images": [
      "assets/catalog/item-064.webp"
    ],
    "priceFrom": 250
  },
  {
    "id": "work-065",
    "filters": [
      "gingerbread",
      "holiday"
    ],
    "title": "Пряничные пингвины",
    "category": "Пряники ручной работы",
    "description": "Два расписных пингвина в праздничных шапочках.",
    "images": [
      "assets/catalog/item-065.webp"
    ],
    "priceFrom": 200
  },
  {
    "id": "work-066",
    "filters": [
      "gingerbread",
      "holiday"
    ],
    "title": "Праздничный набор с цифрами",
    "category": "Пряники ручной работы",
    "description": "Подарочный набор с расписными цифрами и лошадкой.",
    "images": [
      "assets/catalog/item-066.webp"
    ],
    "priceFrom": 900
  },
  {
    "id": "work-067",
    "filters": [
      "gingerbread",
      "holiday"
    ],
    "title": "Пряничный шар с пожеланием",
    "category": "Пряники ручной работы",
    "description": "Пряничный шар с надписью и красной лентой.",
    "images": [
      "assets/catalog/item-067.webp"
    ],
    "priceFrom": 200
  },
  {
    "id": "work-068",
    "filters": [
      "gingerbread",
      "holiday"
    ],
    "title": "Расписные пряничные лошадки",
    "category": "Пряники ручной работы",
    "description": "Красная и белая лошадки с яркой росписью.",
    "images": [
      "assets/catalog/item-068.webp"
    ],
    "priceFrom": 200
  },
  {
    "id": "work-074",
    "filters": [
      "gingerbread",
      "holiday"
    ],
    "title": "Пряничный снеговик",
    "category": "Пряники ручной работы",
    "description": "Снеговик с красным шарфом и маленькой ёлочкой.",
    "images": [
      "assets/catalog/item-074.webp"
    ],
    "priceFrom": 150
  },
  {
    "id": "work-075",
    "filters": [
      "gingerbread",
      "holiday"
    ],
    "title": "Красно-белый пряничный набор",
    "category": "Пряники ручной работы",
    "description": "Домик, варежка и снежинка с белой росписью.",
    "images": [
      "assets/catalog/item-075.webp"
    ],
    "priceFrom": 500
  },
  {
    "id": "work-076",
    "filters": [
      "gingerbread",
      "holiday"
    ],
    "title": "Пряничный шар «Счастья в Новом году»",
    "category": "Пряники ручной работы",
    "description": "Пряничный шар с пожеланием и красной лентой.",
    "images": [
      "assets/catalog/item-076.webp"
    ],
    "priceFrom": 200
  },
  {
    "id": "work-077",
    "filters": [
      "gingerbread",
      "holiday"
    ],
    "title": "Пряник-варежка со снеговиком",
    "category": "Пряники ручной работы",
    "description": "Голубая варежка с нарисованным снеговиком.",
    "images": [
      "assets/catalog/item-077.webp"
    ],
    "priceFrom": 200
  },
  {
    "id": "work-078",
    "filters": [
      "gingerbread",
      "holiday"
    ],
    "title": "Пряник-варежка с мишкой",
    "category": "Пряники ручной работы",
    "description": "Голубая варежка с мишкой и красным шарфом.",
    "images": [
      "assets/catalog/item-078.webp"
    ],
    "priceFrom": 200
  },
  {
    "id": "work-079",
    "filters": [
      "gingerbread",
      "holiday"
    ],
    "title": "Пряник-варежка с лисичкой",
    "category": "Пряники ручной работы",
    "description": "Голубая варежка с лисичкой и красным шарфом.",
    "images": [
      "assets/catalog/item-079.webp"
    ],
    "priceFrom": 200
  },
  {
    "id": "work-080",
    "filters": [
      "gingerbread",
      "holiday"
    ],
    "title": "Пряничные домик и ёлочка",
    "category": "Пряники ручной работы",
    "description": "Набор из расписного домика и зелёной ёлочки.",
    "images": [
      "assets/catalog/item-080.webp"
    ],
    "priceFrom": 180
  },
  {
    "id": "work-083",
    "filters": [
      "gingerbread",
      "holiday"
    ],
    "title": "Пряничный домик для кружки",
    "category": "Пряники ручной работы",
    "description": "Маленький домик с прорезью для края кружки.",
    "images": [
      "assets/catalog/item-083.webp"
    ],
    "priceFrom": 250
  },
  {
    "id": "work-084",
    "filters": [
      "gingerbread",
      "holiday"
    ],
    "title": "Пряничная варежка",
    "category": "Пряники ручной работы",
    "description": "Красная варежка с узором из глазури.",
    "images": [
      "assets/catalog/item-084.webp"
    ],
    "priceFrom": 150
  },
  {
    "id": "work-086",
    "filters": [
      "meringue"
    ],
    "title": "Меренги на палочке",
    "category": "Швейцарская меренга",
    "description": "Розово-жёлтые и голубая меренги с подарочными лентами.",
    "images": [
      "assets/catalog/item-086.webp"
    ],
    "priceFrom": 100
  },
  {
    "id": "meringue-pink-trio",
    "filters": [
      "meringue"
    ],
    "title": "Меренги с зелёными лентами",
    "category": "Швейцарская меренга",
    "description": "Розовые и розово-кремовые меренги на палочке с зелёными лентами.",
    "images": [
      "assets/catalog/meringue-01.webp"
    ],
    "priceFrom": 100
  },
  {
    "id": "meringue-wrapped",
    "filters": [
      "meringue"
    ],
    "title": "Меренги в индивидуальной упаковке",
    "category": "Швейцарская меренга",
    "description": "Розовые и жёлто-кремовые варианты на палочке в индивидуальной упаковке.",
    "images": [
      "assets/catalog/meringue-02.webp"
    ],
    "priceFrom": 100
  },
  {
    "id": "meringue-bouquet",
    "filters": [
      "meringue"
    ],
    "title": "Букет из меренг",
    "category": "Швейцарская меренга",
    "description": "Пять меренг в розовой упаковке в горошек с зелёной лентой.",
    "images": [
      "assets/catalog/meringue-03.webp"
    ],
    "priceFrom": 450
  },
  {
    "id": "work-088",
    "filters": [
      "gingerbread"
    ],
    "title": "Пряничный мишка с розой",
    "category": "Пряники ручной работы",
    "description": "Расписной мишка с розой и пряничные цветы.",
    "images": [
      "assets/catalog/item-088.webp"
    ],
    "priceFrom": 500
  },
  {
    "id": "work-090",
    "filters": [
      "gingerbread"
    ],
    "title": "Пряничный букет к 8 Марта",
    "category": "Пряники ручной работы",
    "description": "Подарочная композиция с тюльпанами и цифрой восемь.",
    "images": [
      "assets/catalog/item-090.webp"
    ],
    "priceFrom": 700
  },
  {
    "id": "work-096",
    "filters": [
      "gingerbread"
    ],
    "title": "Подарочный набор «С Днём учителя»",
    "category": "Пряники ручной работы",
    "description": "Пряник с поздравлением и сладости в коробке с розовым бантом.",
    "images": [
      "assets/catalog/item-096.webp"
    ],
    "priceFrom": 350
  },
  {
    "id": "spring-01",
    "title": "Букет с пряничными ромашками и меренгой",
    "description": "Пряничные ромашки и розовая меренга в синей упаковке с жёлтой лентой.",
    "filters": [
      "gingerbread",
      "bouquet",
      "meringue"
    ],
    "category": "Пряники ручной работы",
    "images": [
      "assets/catalog/spring-01.webp"
    ],
    "priceFrom": 500
  },
  {
    "id": "spring-02",
    "title": "Пасхальный пряник-раскраска",
    "description": "Пасхальная раскраска на белой глазури, съедобная палитра и кисточка.",
    "filters": [
      "gingerbread",
      "easter",
      "colouring"
    ],
    "category": "Пряничная раскраска",
    "images": [
      "assets/catalog/spring-02.webp"
    ],
    "priceFrom": 350
  },
  {
    "id": "spring-03",
    "title": "Пряник-раскраска «Человечек»",
    "description": "Пряничный человечек с контурным рисунком, палитрой и кисточкой.",
    "filters": [
      "gingerbread",
      "colouring"
    ],
    "category": "Пряничная раскраска",
    "images": [
      "assets/catalog/spring-03.webp"
    ],
    "priceFrom": 350
  },
  {
    "id": "spring-04",
    "title": "Пасхальная композиция с курочкой",
    "description": "Объёмная пряничная композиция с курочкой и расписными яйцами.",
    "filters": [
      "gingerbread",
      "easter"
    ],
    "category": "Пряники ручной работы",
    "images": [
      "assets/catalog/spring-04.webp"
    ],
    "priceFrom": 550
  },
  {
    "id": "spring-05",
    "title": "Зелёное пряничное яйцо с бабочкой",
    "description": "Пасхальный пряник с ажурным окошком, белой росписью и бабочкой.",
    "filters": [
      "gingerbread",
      "easter"
    ],
    "category": "Пряники ручной работы",
    "images": [
      "assets/catalog/spring-05.webp",
      "assets/catalog/spring-07.webp"
    ],
    "priceFrom": 150
  },
  {
    "id": "spring-06",
    "title": "Розовое пряничное яйцо с бабочкой",
    "description": "Розовый пасхальный пряник с ажурным окошком и белой бабочкой.",
    "filters": [
      "gingerbread",
      "easter"
    ],
    "category": "Пряники ручной работы",
    "images": [
      "assets/catalog/spring-06.webp",
      "assets/catalog/spring-08.webp"
    ],
    "priceFrom": 150
  },
  {
    "id": "spring-09",
    "title": "Пряничное яйцо «Христос Воскрес!»",
    "description": "Белый пряник с зелёным узором и пасхальной надписью.",
    "filters": [
      "gingerbread",
      "easter"
    ],
    "category": "Пряники ручной работы",
    "images": [
      "assets/catalog/spring-09.webp"
    ],
    "priceFrom": 150
  },
  {
    "id": "spring-10",
    "title": "Пряничные цыплята в скорлупке",
    "description": "Жёлтые цыплята с цветочными украшениями в индивидуальной упаковке.",
    "filters": [
      "gingerbread",
      "easter"
    ],
    "category": "Пряники ручной работы",
    "images": [
      "assets/catalog/spring-10.webp"
    ],
    "priceFrom": 180
  },
  {
    "id": "spring-11",
    "title": "Пряничный карандаш",
    "description": "Улыбающийся карандаш с зелёным бантом — сладкий подарок школьнику.",
    "filters": [
      "gingerbread",
      "school"
    ],
    "category": "Пряники ручной работы",
    "images": [
      "assets/catalog/spring-11.webp"
    ],
    "priceFrom": 180
  },
  {
    "id": "spring-12",
    "title": "Красная пряничная пятёрка",
    "description": "Красная пятёрка с белым контуром в подарочной упаковке.",
    "filters": [
      "gingerbread",
      "school"
    ],
    "category": "Пряники ручной работы",
    "images": [
      "assets/catalog/spring-12.webp"
    ],
    "priceFrom": 150
  },
  {
    "id": "spring-13",
    "title": "Пряники для выпускников детского сада",
    "description": "Расписные пряники с воздушными шарами и поздравлениями выпускникам.",
    "filters": [
      "gingerbread",
      "school"
    ],
    "category": "Пряники ручной работы",
    "images": [
      "assets/catalog/spring-13.webp"
    ],
    "priceFrom": 200
  },
  {
    "id": "spring-14",
    "title": "Пряники «С благодарностью»",
    "description": "Белые пряники с розовой каймой и надписью «С благодарностью».",
    "filters": [
      "gingerbread",
      "school"
    ],
    "category": "Пряники ручной работы",
    "images": [
      "assets/catalog/spring-14.webp"
    ],
    "priceFrom": 100
  },
  {
    "id": "spring-15",
    "title": "Пряничные яблочки ко Дню знаний",
    "description": "Красные яблочки с зелёными листочками и мармеладными червячками.",
    "filters": [
      "gingerbread",
      "school"
    ],
    "category": "Пряники ручной работы",
    "images": [
      "assets/catalog/spring-15.webp"
    ],
    "priceFrom": 200
  },
  {
    "id": "spring-16",
    "title": "Подарочный набор для мамы",
    "description": "Сердечко с тёплой надписью и пряничные пуговки в коробке с розовой лентой.",
    "filters": [
      "gingerbread"
    ],
    "category": "Пряники ручной работы",
    "images": [
      "assets/catalog/spring-16.webp"
    ],
    "priceFrom": 350
  },
  {
    "id": "spring-17",
    "title": "Пряничный набор «Домик и человечки»",
    "description": "Новогодняя коробка с пряничным домиком и двумя человечками.",
    "filters": [
      "gingerbread",
      "holiday"
    ],
    "category": "Пряники ручной работы",
    "images": [
      "assets/catalog/spring-17.webp"
    ],
    "priceFrom": 550
  },
  {
    "id": "spring-18",
    "title": "Пряник-раскраска «Лошадка»",
    "description": "Контурная лошадка с палитрой и кисточкой в подарочной коробке.",
    "filters": [
      "gingerbread",
      "colouring"
    ],
    "category": "Пряничная раскраска",
    "images": [
      "assets/catalog/spring-18.webp"
    ],
    "priceFrom": 350
  },
  {
    "id": "spring-19",
    "title": "Пряник-раскраска «Новогодняя лошадка»",
    "description": "Лошадка в зимней шапочке, съедобная палитра и кисточка в коробке с красной лентой.",
    "filters": [
      "gingerbread",
      "colouring",
      "holiday"
    ],
    "category": "Пряничная раскраска",
    "images": [
      "assets/catalog/spring-19.webp"
    ],
    "priceFrom": 350
  },
  {
    "id": "spring-20",
    "title": "Пряник-раскраска «Пингвин»",
    "description": "Зимний пингвин с палитрой и кисточкой для раскрашивания глазури.",
    "filters": [
      "gingerbread",
      "colouring",
      "holiday"
    ],
    "category": "Пряничная раскраска",
    "images": [
      "assets/catalog/spring-20.webp"
    ],
    "priceFrom": 350
  },
  {
    "id": "spring-21",
    "title": "Пряник-раскраска «Дед Мороз»",
    "description": "Дед Мороз с мешком подарков, съедобная палитра и кисточка.",
    "filters": [
      "gingerbread",
      "colouring",
      "holiday"
    ],
    "category": "Пряничная раскраска",
    "images": [
      "assets/catalog/spring-21.webp"
    ],
    "priceFrom": 350
  },
  {
    "id": "spring-22",
    "title": "Бело-розовые и бордовые пионы",
    "description": "Зефирные пионы с зелёными листочками в нежной розовой упаковке.",
    "filters": [
      "zephyr",
      "bouquet"
    ],
    "category": "Зефир ручной работы",
    "images": [
      "assets/catalog/spring-22.webp"
    ],
    "priceFrom": 2500
  },
  {
    "id": "spring-23",
    "title": "Зефирные пионы в подарочной коробке",
    "description": "Розовые, белые и жёлтый бутоны в коробке с прозрачным окошком и красной лентой.",
    "filters": [
      "zephyr"
    ],
    "category": "Зефир ручной работы",
    "images": [
      "assets/catalog/spring-23.webp"
    ],
    "priceFrom": 1100
  },
  {
    "id": "spring-24",
    "title": "Пряничный подснежник",
    "description": "Нежный белый подснежник с зелёными листьями и белой окантовкой.",
    "filters": [
      "gingerbread"
    ],
    "category": "Пряники ручной работы",
    "images": [
      "assets/catalog/spring-24.webp"
    ],
    "priceFrom": 200
  },
  {
    "id": "spring-25",
    "title": "Мини-букеты разноцветных тюльпанов",
    "description": "Небольшие зефирные букеты с яркими тюльпанами в пастельной упаковке.",
    "filters": [
      "zephyr",
      "bouquet"
    ],
    "category": "Зефир ручной работы",
    "images": [
      "assets/catalog/spring-25.webp"
    ],
    "priceFrom": 450
  },
  {
    "id": "spring-26",
    "title": "Разноцветные тюльпаны в белой упаковке",
    "description": "Белые, сиреневые и оранжевые зефирные тюльпаны с разноцветными лентами.",
    "filters": [
      "zephyr",
      "bouquet"
    ],
    "category": "Зефир ручной работы",
    "images": [
      "assets/catalog/spring-26.webp"
    ],
    "priceFrom": 1800
  },
  {
    "id": "spring-27",
    "title": "Пряничное сердечко «8 Марта»",
    "description": "Розовое сердечко с белыми цветами и праздничной надписью.",
    "filters": [
      "gingerbread"
    ],
    "category": "Пряники ручной работы",
    "images": [
      "assets/catalog/spring-27.webp"
    ],
    "priceFrom": 150
  },
  {
    "id": "spring-28",
    "title": "Пряничные цыплята на палочке",
    "description": "Пасхальные цыплята на палочках с атласными бантиками.",
    "filters": [
      "gingerbread",
      "easter"
    ],
    "category": "Пряники ручной работы",
    "images": [
      "assets/catalog/spring-28.webp"
    ],
    "priceFrom": 100
  },
  {
    "id": "spring-29",
    "title": "Пасхальный зайчик с цветочным венком",
    "description": "Белый пряничный зайчик с нежным цветочным венком и подарочной биркой.",
    "filters": [
      "gingerbread",
      "easter"
    ],
    "category": "Пряники ручной работы",
    "images": [
      "assets/catalog/spring-29.webp"
    ],
    "priceFrom": 150
  },
  {
    "id": "spring-30",
    "title": "Пасхальное яйцо с цветами",
    "description": "Пряник с веточками вербы, объёмными цветами и надписью «ХВ».",
    "filters": [
      "gingerbread",
      "easter"
    ],
    "category": "Пряники ручной работы",
    "images": [
      "assets/catalog/spring-30.webp",
      "assets/catalog/spring-32.webp"
    ],
    "priceFrom": 150
  },
  {
    "id": "spring-31",
    "title": "Пасхальный зайчик с зелёным бантом",
    "description": "Белый зайчик с цветком, зелёной ленточкой и пасхальной открыткой.",
    "filters": [
      "gingerbread",
      "easter"
    ],
    "category": "Пряники ручной работы",
    "images": [
      "assets/catalog/spring-31.webp"
    ],
    "priceFrom": 200
  },
  {
    "id": "spring-33",
    "title": "Розовое пасхальное яйцо с вербой",
    "description": "Розовый пряник с веточками вербы и объёмными цветами.",
    "filters": [
      "gingerbread",
      "easter"
    ],
    "category": "Пряники ручной работы",
    "images": [
      "assets/catalog/spring-33.webp"
    ],
    "priceFrom": 150
  },
  {
    "id": "spring-34",
    "title": "Букет пионов с красными бутонами",
    "description": "Розовые и белые зефирные пионы, красные бутоны и зелёные листья.",
    "filters": [
      "zephyr",
      "bouquet"
    ],
    "category": "Зефир ручной работы",
    "images": [
      "assets/catalog/spring-34.webp"
    ],
    "priceFrom": 1800
  },
  {
    "id": "spring-35",
    "title": "Пряничный букет с лошадкой",
    "description": "Яркая композиция с лошадкой и разноцветными пряниками в крафтовом стаканчике.",
    "filters": [
      "gingerbread",
      "bouquet"
    ],
    "category": "Пряники ручной работы",
    "images": [
      "assets/catalog/spring-35.webp"
    ],
    "priceFrom": 650
  },
  {
    "id": "spring-36",
    "title": "Тюльпаны в бордовой и газетной упаковке",
    "description": "Пастельные зефирные тюльпаны в бордовой упаковке с белым бантом.",
    "filters": [
      "zephyr",
      "bouquet"
    ],
    "category": "Зефир ручной работы",
    "images": [
      "assets/catalog/spring-36.webp"
    ],
    "priceFrom": 2000
  }
];
const priceNote='Стоимость зависит от размера, сложности цветка и оформления.';
const placeholder='<span class="photo-outline" aria-hidden="true"></span><span class="photo-caption">Фото скоро добавим</span>';
const grid=document.getElementById('products');
const dialog=document.getElementById('product-dialog');
const art=document.getElementById('dialog-art');
let activeProduct=null;
let activePhoto=0;
const priceText=product=>product.priceFrom?`от ${product.priceFrom.toLocaleString('ru-RU')} ₽`:'Цену уточняйте в MAX';
grid.innerHTML=products.map(product=>`<article class="product-card" data-categories="${product.filters.join(' ')}"><button type="button" class="product-visual${product.images.length?' has-photo':''}" data-product="${product.id}" aria-label="Посмотреть фото: ${product.title}">${product.images.length?`<img src="${product.images[0]}" alt="${product.title}" loading="lazy" decoding="async">${product.images.length>1?`<span class="photo-count">${product.images.length} фото</span>`:''}`:placeholder}</button><span class="product-meta">${product.category}</span><h3>${product.title}</h3><p class="product-description">${product.description}</p><div class="product-bottom"><span class="price">${priceText(product)}</span><button type="button" class="details" data-product="${product.id}">Подробнее <span aria-hidden="true">↗</span></button></div>${product.priceFrom?`<p class="price-note">${priceNote}</p>`:''}</article>`).join('');
const categoryButtons=[...document.querySelectorAll('[data-filter]')];
const catalogCards=[...document.querySelectorAll('.product-card')];
const minPrice=document.getElementById('price-min');
const maxPrice=document.getElementById('price-max');
const sortPrice=document.getElementById('price-sort');
const searchInput=document.getElementById('catalog-search');
const clearSearch=document.getElementById('clear-search');
const normalizeSearch=value=>value.toLocaleLowerCase('ru-RU').replace(/ё/g,'е').replace(/[^\p{L}\p{N}]+/gu,' ').trim();
const searchableProducts=products.map(product=>normalizeSearch(product.title+' '+product.description+' '+product.category));
let activeFilter='all';
function applyCatalogFilters(){
  const searchTerms=normalizeSearch(searchInput.value).split(/\s+/).filter(Boolean);
  clearSearch.hidden=searchInput.value.length===0;
  const lower=minPrice.value.trim()===''?0:Math.max(0,Number(minPrice.value)||0);
  const upper=maxPrice.value.trim()===''?Infinity:Math.max(0,Number(maxPrice.value)||0);
  const hasPriceRange=minPrice.value.trim()!==''||maxPrice.value.trim()!=='';
  const visible=products.map((product,index)=>({product,index})).filter(({product,index})=>
    searchTerms.every(term=>searchableProducts[index].includes(term))&&(activeFilter==='all'||product.filters.includes(activeFilter))&&(!hasPriceRange||(product.priceFrom!=null&&product.priceFrom>=lower&&product.priceFrom<=upper)));
  if(sortPrice.value==='asc'||sortPrice.value==='desc')visible.sort((a,b)=>{
    if(a.product.priceFrom==null)return b.product.priceFrom==null?0:1;
    if(b.product.priceFrom==null)return -1;
    return sortPrice.value==='asc'?a.product.priceFrom-b.product.priceFrom:b.product.priceFrom-a.product.priceFrom;
  });
  catalogCards.forEach(card=>{card.hidden=true;});
  visible.forEach(({index},order)=>{catalogCards[index].hidden=false;catalogCards[index].style.order=order;grid.appendChild(catalogCards[index]);});
  categoryButtons.forEach(button=>{const active=button.dataset.filter===activeFilter;button.classList.toggle('active',active);button.setAttribute('aria-pressed',String(active));});
  document.getElementById('filter-status').textContent=lower>upper?'Цена «от» должна быть не больше цены «до».':'Показано: '+visible.length+' из '+products.length;
  document.getElementById('catalog-empty').hidden=visible.length>0;
}
categoryButtons.forEach(button=>button.addEventListener('click',()=>{activeFilter=button.dataset.filter;applyCatalogFilters();}));
[minPrice,maxPrice].forEach(input=>input.addEventListener('input',applyCatalogFilters));
searchInput.addEventListener('input',applyCatalogFilters);
searchInput.addEventListener('search',applyCatalogFilters);
clearSearch.addEventListener('click',()=>{searchInput.value='';applyCatalogFilters();searchInput.focus();});
sortPrice.addEventListener('change',applyCatalogFilters);
document.getElementById('reset-filters').addEventListener('click',()=>{
  activeFilter='all';minPrice.value='';maxPrice.value='';sortPrice.value='default';searchInput.value='';applyCatalogFilters();
});
applyCatalogFilters();
function selectPhoto(index){
  if(!activeProduct?.images.length)return;
  activePhoto=(index+activeProduct.images.length)%activeProduct.images.length;
  const image=document.getElementById('gallery-image');
  image.src=activeProduct.images[activePhoto];
  image.alt=`${activeProduct.title} — фото ${activePhoto+1}`;
  document.getElementById('gallery-counter').textContent=`${activePhoto+1} / ${activeProduct.images.length}`;
  document.getElementById('gallery-full').href=image.src;
  art.querySelectorAll('[data-photo-index]').forEach(button=>button.setAttribute('aria-pressed',String(Number(button.dataset.photoIndex)===activePhoto)));
}
function openProduct(id){
  activeProduct=products.find(product=>product.id===id);
  if(!activeProduct)return;
  activePhoto=0;
  document.getElementById('dialog-title').textContent=activeProduct.title;
  document.getElementById('dialog-description').textContent=activeProduct.description;
  document.getElementById('dialog-price').textContent=priceText(activeProduct);
  document.getElementById('dialog-price-note').textContent=activeProduct.priceFrom?`${priceNote} Итоговую цену согласуем в MAX.`:'О составе, оформлении и цене можно спросить в MAX.';
  if(activeProduct.images.length){
    art.innerHTML=`<div class="gallery-stage"><img id="gallery-image" src="${activeProduct.images[0]}" alt="${activeProduct.title}">${activeProduct.images.length>1?'<button class="gallery-arrow prev" type="button" data-direction="-1" aria-label="Предыдущее фото">‹</button><button class="gallery-arrow next" type="button" data-direction="1" aria-label="Следующее фото">›</button>':''}</div><div class="gallery-footer"><span id="gallery-counter" aria-live="polite"></span><a id="gallery-full" href="${activeProduct.images[0]}" target="_blank" rel="noopener noreferrer">Открыть фото целиком ↗</a></div>${activeProduct.images.length>1?`<div class="gallery-thumbs" role="group" aria-label="Фотографии композиции">${activeProduct.images.map((source,index)=>`<button type="button" data-photo-index="${index}" aria-label="Фото ${index+1}" aria-pressed="${index===0}"><img src="${source}" alt="" loading="lazy"></button>`).join('')}</div>`:''}`;
    selectPhoto(0);
  }else art.innerHTML=placeholder;
  dialog.showModal();
}
grid.addEventListener('click',event=>{const button=event.target.closest('[data-product]');if(button)openProduct(button.dataset.product);});
art.addEventListener('click',event=>{const thumb=event.target.closest('[data-photo-index]');const arrow=event.target.closest('[data-direction]');if(thumb)selectPhoto(Number(thumb.dataset.photoIndex));if(arrow)selectPhoto(activePhoto+Number(arrow.dataset.direction));});
dialog.addEventListener('keydown',event=>{if(event.key==='ArrowLeft'||event.key==='ArrowRight'){event.preventDefault();selectPhoto(activePhoto+(event.key==='ArrowLeft'?-1:1));}});
document.querySelector('.close-dialog').addEventListener('click',()=>dialog.close());
dialog.addEventListener('close',()=>{activeProduct=null;});
dialog.addEventListener('click',event=>{if(event.target!==dialog)return;const rect=dialog.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)dialog.close();});
