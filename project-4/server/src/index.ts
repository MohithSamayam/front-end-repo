import express from "express";
import path from "path";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("/images", express.static(path.join(__dirname, "../public/images")));

app.get("/", (req, res) => {
  console.log(path.join(__dirname, "../public"));
  const foodData = [
    {
      name: "BOILED EGG",
      price: 10,
      text: "Soft or hard-cooked pure protein in shell.",
      image: "/images/egg.png",
      type: "starter",
    },
    {
      name: "RAMEN",
      price: 25,
      text: "Japanese noodle soup with rich broth and toppings.",
      image: "/images/ramen.png",
      type: "main",
    },
    {
      name: "GRILLED CHICKEN",
      price: 45,
      text: "Juicy, charred chicken breast with smoky flavor.",
      image: "/images/chicken.png",
      type: "main",
    },
    {
      name: "CAKE",
      price: 18,
      text: "Layered sweet dessert, fluffy and frosted delight.",
      image: "/images/cake.png",
      type: "dessert",
    },
    {
      name: "BURGER",
      price: 23,
      text: "Juicy lamb patty with cheese and fresh toppings.",
      image: "/images/burger.png",
      type: "main",
    },
    {
      name: "PANCAKE",
      price: 15,
      text: "Fluffy, golden breakfast stack with syrup drizzle.",
      image: "/images/pancake.png",
      type: "dessert",
    },
    {
      name: "PIZZA",
      price: 45,
      text: "Freshly baked dough with melted cheese and savory toppings.",
      image: "/images/pizza.png",
      type: "main",
    },
    {
      name: "ICE CREAM",
      price: 20,
      text: "Creamy, chilled dessert in classic or adventurous flavors.",
      image: "/images/icecream.png",
      type: "dessert",
    },
    {
      name: "GARLIC BREAD",
      price: 25,
      text: "Crispy toasted bread with buttery garlic and herb topping.",
      image: "/images/garlic.webp",
      type: "starter",
    },
    {
      name: "CHICKEN FINGERS",
      price: 25,
      text:"Crispy golden chicken strips, tender inside, perfect for dipping.",
      image: "/images/chickenfingers.png",
      type: "starter",
    },
    {
      name: "LASAGNA",
      price: 50,
      text:"Layered pasta sheets with cheese, meat, and tomato sauce.",
      image: "/images/lasagna.png",
      type: "main",
    },
    {
      name: "TIRRAMISU",
      price: 35,
      text:"Crispy golden chicken strips, tender inside, perfect for dipping.",
      image: "/images/tirramisu.png",
      type: "dessert",
    },
  ];

  res.json(foodData);
});

app.listen(9000, () => {
  console.log("Server is running on port 9000");
});