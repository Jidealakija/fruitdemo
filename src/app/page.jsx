import Fruits from './components/Fruits'

const fruits = [
  {
    id: 1,
    name: "Apple",
    botanicalName: "Malus domestica",
    seasons: ["Spring", "Summer", "Autumn", "Winter"],
    image: "https://robohash.org/apple.jpg",
    description: "Apples are crisp and juicy fruits with a wide variety of flavors and colors. They are often associated with health benefits and are used in various culinary preparations."
  },
  {
    id: 2,
    name: "Orange",
    botanicalName: "Citrus sinensis",
    seasons: ["Winter", "Spring"],
    image: "https://robohash.org/orange.jpg",
    description: "Oranges are citrus fruits known for their refreshing taste and high vitamin C content. They are commonly consumed as a snack or used in juices and desserts."
  },
  {
    id: 3,
    name: "Banana",
    botanicalName: "Musa paradisiaca",
    seasons: ["Year-round"],
    image: "https://robohash.org/banana.jpg",
    description: "Bananas are elongated tropical fruits with a creamy texture and a sweet flavor. They are a good source of energy and are widely enjoyed as a convenient and nutritious snack."
  },
  {
    id: 4,
    name: "Strawberry",
    botanicalName: "Fragaria × ananassa",
    seasons: ["Spring", "Summer"],
    image: "https://robohash.org/strawberry.jpg",
    description: "Strawberries are small, juicy fruits known for their vibrant red color and sweet-tart taste. They are commonly used in desserts, jams, and as a topping for various dishes."
  },
  {
    id: 5,
    name: "Mango",
    botanicalName: "Mangifera indica",
    seasons: ["Summer"],
    image: "https://robohash.org/mango.jpg",
    description: "Mangoes are tropical fruits with a rich, sweet flavor and a unique aroma. They are often called the 'king of fruits' and are enjoyed fresh or used in smoothies, salads, and chutneys."
  },
  {
    id: 6,
    name: "Grapes",
    botanicalName: "Vitis vinifera",
    seasons: ["Summer", "Autumn"],
    image: "https://robohash.org/grapes.jpg",
    description: "Grapes are small, round fruits that come in various colors and flavors. They are often used to make wines, juices, or enjoyed as a healthy snack packed with antioxidants."
  },
  {
    id: 7,
    name: "Watermelon",
    botanicalName: "Citrullus lanatus",
    seasons: ["Summer"],
    image: "https://robohash.org/watermelon.jpg",
    description: "Watermelons are large, juicy fruits with a refreshing, sweet taste. They are perfect for staying hydrated during hot summer days and are often enjoyed in slices or used in fruit salads and beverages."
  },
  {
    id: 8,
    name: "Pineapple",
    botanicalName: "Ananas comosus",
    seasons: ["Summer"],
    image: "https://robohash.org/pineapple.jpg",
    description: "Pineapples are tropical fruits known for their sweet and tangy flavor. They are a rich source of vitamin C and are used in both savory and sweet dishes, including fruit salads, smoothies, and as a topping for pizzas."
  },
  {
    id: 9,
    name: "Peach",
    botanicalName: "Prunus persica",
    seasons: ["Summer"],
    image: "https://robohash.org/peach.jpg",
    description: "Peaches are fuzzy fruits with a sweet and juicy flesh. They are often associated with summer and are used in various desserts, jams, and as a flavorful addition to both sweet and savory dishes."
  },
  {
    id: 10,
    name: "Cherry",
    botanicalName: "Prunus avium",
    seasons: ["Spring", "Summer"],
    image: "https://robohash.org/cherry.jpg",
    description: "Cherries are small, round fruits with a sweet and slightly tart taste. They come in different varieties and are enjoyed fresh or used in pies, tarts, jams, and as a garnish in cocktails."
  },
  {
    id: 11,
    name: "Blueberry",
    botanicalName: "Vaccinium corymbosum",
    seasons: ["Summer"],
    image: "https://robohash.org/blueberry.jpg",
    description: "Blueberries are small, round fruits known for their vibrant blue color and sweet taste. They are packed with antioxidants and are used in a variety of baked goods, smoothies, and as a topping for breakfast dishes."
  },
  {
    id: 12,
    name: "Pear",
    botanicalName: "Pyrus communis",
    seasons: ["Autumn", "Winter"],
    image: "https://robohash.org/pear.jpg",
    description: "Pears are juicy fruits with a delicate flavor and a smooth texture. They come in different varieties and can be enjoyed fresh, used in salads, baked goods, or cooked down into jams and preserves."
  }
];


export default function page() {
  return (
    <div>
      <Fruits list = {fruits}/>
    </div>
  )
}
