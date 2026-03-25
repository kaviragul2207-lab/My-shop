import { assets, products as assetProducts } from "../assets/assets";

const localProducts = [
  {
    id: 1,
    name: "Fresh Apples",
    price: 120,
    image: assets.apples,
    description: "Juicy and fresh apples",
    category: "Fruits",
  },
  {
    id: 2,
    name: "Organic Bananas",
    price: 60,
    image: assets.banana,
    description: "Fresh organic bananas",
    category: "Fruits",
  },
  {
    id: 3,
    name: "Red Tomatoes",
    price: 80,
    image: assets.tomato,
    description: "Fresh red tomatoes",
    category: "Vegetables",
  },
  {
    id: 4,
    name: "Green Lettuce",
    price: 40,
    image: assets.lettuce,
    description: "Crispy green lettuce",
    category: "Vegetables",
  },
  {
    id: 5,
    name: "Orange Carrots",
    price: 50,
    image: assets.carrot,
    description: "Sweet orange carrots",
    category: "Vegetables",
  },
  {
    id: 6,
    name: "Yellow Bell Pepper",
    price: 70,
    image: assets.pepper,
    description: "Fresh yellow bell pepper",
    category: "Vegetables",
  },
  {
    id: 7,
    name: "Organic Milk",
    price: 100,
    image: assets.milk,
    description: "Pure organic milk",
    category: "Dairy",
  },
  {
    id: 8,
    name: "Cheddar Cheese",
    price: 250,
    image: assets.cheese,
    description: "Aged cheddar cheese",
    category: "Dairy",
  },
];

// Combine local products with those from assets.js
const products = [
  ...localProducts, 
  ...assetProducts.map((p) => ({
    id: p._id,
    name: p.name,
    price: parseFloat(p.price),
    image: Array.isArray(p.image) ? p.image[0] : p.image,
    description: p.small_des || "",
    category: p.category || "General"
  }))
];

export default products;

