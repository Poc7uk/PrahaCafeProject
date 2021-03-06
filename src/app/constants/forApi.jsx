import testImg from "../assets/images/menu-imgs/rebra.jpg";
import testImg1 from "../assets/images/menu-imgs/rulka.jpg";
// import testImg2 from "../assets/images/menu-imgs/rulka2.jpg";
import testImg2 from "../assets/images/menu-imgs/tuno.jpg";
import testImg3 from "../assets/images/menu-imgs/skumbria.jpg";

export const categoriesObject = {
  meetAndFish: {
    _id: "68rdca3eeb7f6fgeed471101",
    name: "М'ясо та Риба",
  },
  soups: {
    _id: "68rdca3eeb7f6fgeed471102",
    name: "Перші страви",
  },
  salads: {
    _id: "68rdca3eeb7f6fgeed471103",
    name: "Салати",
  },
  fastFood: {
    _id: "68rdca3eeb7f6fgeed471104",
    name: "Фастфуд",
  },
  questionMark: {
    _id: "68rdca3eeb7f6fgeed471105",
    name: "Знак Питання",
  },
  desserts: {
    _id: "68rdca3eeb7f6fgeed471106",
    name: "Десерти",
  },
  drinks: {
    _id: "68rdca3eeb7f6fgeed471107",
    name: "Напої",
  },
};

export const categoriesArray = [
  {
    name: "Усі",
  },
  {
    _id: "68rdca3eeb7f6fgeed471101",
    name: "М'ясо та Риба",
  },
  {
    _id: "68rdca3eeb7f6fgeed471102",
    name: "Перші страви",
  },
  {
    _id: "68rdca3eeb7f6fgeed471103",
    name: "Салати",
  },
  {
    _id: "68rdca3eeb7f6fgeed471104",
    name: "Фастфуд",
  },
  {
    _id: "68rdca3eeb7f6fgeed471105",
    name: "Знак Питання",
  },
  {
    _id: "68rdca3eeb7f6fgeed471106",
    name: "Десерти",
  },
  {
    _id: "68rdca3eeb7f6fgeed471107",
    name: "Напої",
  },
];

export const products = [
  {
    _id: "67rdca3eeb7f6fgeed471801",
    name: "Ребра",
    ingredients: [
      "М'ясо",
      "картопля",
      "капуста",
      "соус",
      "м'ясо",
      "картопля",
      "капуста",
      "соус",
    ],
    weight: "300 г",
    price: 250,
    category: categoriesObject.meetAndFish,
    image: testImg,
  },
  {
    _id: "67rdca3eeb7f6fgeed471802",
    name: "Рулька",
    ingredients: [
      "М'ясо",
      "картопля",
      "капуста",
      "соус",
      "м'ясо",
      "картопля",
      "капуста",
      "соус",
    ],
    weight: "300 г",
    price: 250,
    category: categoriesObject.meetAndFish,
    image: testImg1,
  },
  {
    _id: "67rdca3eeb7f6fgeed471803",
    name: "Ще Рулька",
    ingredients: [
      "М'ясо",
      "картопля",
      "капуста",
      "соус",
      "м'ясо",
      "картопля",
      "капуста",
      "соус",
    ],
    weight: "300 г",
    price: 250,
    category: categoriesObject.meetAndFish,
    image: testImg2,
  },
  {
    _id: "67rdca3eeb7f6fgeed471804",
    name: "Скумбрія",
    ingredients: [
      "М'ясо",
      "картопля",
      "капуста",
      "соус",
      "м'ясо",
      "картопля",
      "капуста",
      "соус",
    ],
    weight: "300 г",
    price: 250,
    category: categoriesObject.meetAndFish,
    image: testImg3,
  },
  {
    _id: "67rdca3eeb7f6fgeed471805",
    name: "Кільця",
    ingredients: [
      "М'ясо",
      "картопля",
      "капуста",
      "соус",
      "м'ясо",
      "картопля",
      "капуста",
      "соус",
    ],
    weight: "300 г",
    price: 250,
    category: categoriesObject.fastFood,
    image: testImg1,
  },
  {
    _id: "67rdca3eeb7f6fgeed471806",
    name: "Тортилья",
    ingredients: [
      "М'ясо",
      "картопля",
      "капуста",
      "соус",
      "м'ясо",
      "картопля",
      "капуста",
      "соус",
    ],
    weight: "300 г",
    price: 250,
    category: categoriesObject.fastFood,
    image: testImg,
  },
  {
    _id: "67rdca3eeb7f6fgeed471807",
    name: "Тости",
    ingredients: [
      "М'ясо",
      "картопля",
      "капуста",
      "соус",
      "м'ясо",
      "картопля",
      "капуста",
      "соус",
    ],
    weight: "300 г",
    price: 250,
    category: categoriesObject.fastFood,
    image: testImg3,
  },
  {
    _id: "67rdca3eeb7f6fgeed471808",
    name: "Картопля фрі",
    ingredients: [
      "М'ясо",
      "картопля",
      "капуста",
      "соус",
      "м'ясо",
      "картопля",
      "капуста",
      "соус",
    ],
    weight: "300 г",
    price: 250,
    category: categoriesObject.fastFood,
    image: testImg2,
  },
  {
    _id: "67rdca3eeb7f6fgeed471809",
    name: "Хот-Дог",
    ingredients: [
      "М'ясо",
      "картопля",
      "капуста",
      "соус",
      "м'ясо",
      "картопля",
      "капуста",
      "соус",
    ],
    weight: "300 г",
    price: 250,
    category: categoriesObject.fastFood,
    image: testImg,
  },
  {
    _id: "67rdca3eeb7f6fgeed471810",
    name: "Ребра",
    ingredients: [
      "М'ясо",
      "картопля",
      "капуста",
      "соус",
      "м'ясо",
      "картопля",
      "капуста",
      "соус",
    ],
    weight: "300 г",
    price: 250,
    category: categoriesObject.meetAndFish,
    image: testImg,
  },
  {
    _id: "67rdca3eeb7f6fgeed471811",
    name: "Рулька",
    ingredients: [
      "М'ясо",
      "картопля",
      "капуста",
      "соус",
      "м'ясо",
      "картопля",
      "капуста",
      "соус",
    ],
    weight: "300 г",
    price: 250,
    category: categoriesObject.meetAndFish,
    image: testImg1,
  },
  {
    _id: "67rdca3eeb7f6fgeed471812",
    name: "Ще Рулька",
    ingredients: [
      "М'ясо",
      "картопля",
      "капуста",
      "соус",
      "м'ясо",
      "картопля",
      "капуста",
      "соус",
    ],
    weight: "300 г",
    price: 250,
    category: categoriesObject.meetAndFish,
    image: testImg2,
  },
  {
    _id: "67rdca3eeb7f6fgeed471813",
    name: "Скумбрія",
    ingredients: [
      "М'ясо",
      "картопля",
      "капуста",
      "соус",
      "м'ясо",
      "картопля",
      "капуста",
      "соус",
    ],
    weight: "300 г",
    price: 250,
    category: categoriesObject.meetAndFish,
    image: testImg3,
  },
  {
    _id: "67rdca3eeb7f6fgeed471814",
    name: "Кільця",
    ingredients: [
      "М'ясо",
      "картопля",
      "капуста",
      "соус",
      "м'ясо",
      "картопля",
      "капуста",
      "соус",
    ],
    weight: "300 г",
    price: 250,
    category: categoriesObject.fastFood,
    image: testImg1,
  },
  {
    _id: "67rdca3eeb7f6fgeed471815",
    name: "Тортилья",
    ingredients: [
      "М'ясо",
      "картопля",
      "капуста",
      "соус",
      "м'ясо",
      "картопля",
      "капуста",
      "соус",
    ],
    weight: "300 г",
    price: 250,
    category: categoriesObject.fastFood,
    image: testImg,
  },
  {
    _id: "67rdca3eeb7f6fgeed471816",
    name: "Тости",
    ingredients: [
      "М'ясо",
      "картопля",
      "капуста",
      "соус",
      "м'ясо",
      "картопля",
      "капуста",
      "соус",
    ],
    weight: "300 г",
    price: 250,
    category: categoriesObject.fastFood,
    image: testImg3,
  },
  {
    _id: "67rdca3eeb7f6fgeed471817",
    name: "Картопля фрі",
    ingredients: [
      "М'ясо",
      "картопля",
      "капуста",
      "соус",
      "м'ясо",
      "картопля",
      "капуста",
      "соус",
    ],
    weight: "300 г",
    price: 250,
    category: categoriesObject.fastFood,
    image: testImg2,
  },
  {
    _id: "67rdca3eeb7f6fgeed471818",
    name: "Хот-Дог",
    ingredients: [
      "М'ясо",
      "картопля",
      "капуста",
      "соус",
      "м'ясо",
      "картопля",
      "капуста",
      "соус",
    ],
    weight: "300 г",
    price: 250,
    category: categoriesObject.fastFood,
    image: testImg,
  },
];
