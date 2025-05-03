"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use("/images", express_1.default.static(path_1.default.join(__dirname, "../public/images")));
app.get("/", (req, res) => {
    console.log(path_1.default.join(__dirname, "../public"));
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
            text: "Juicy lamb patty with cheese and fresh toppings",
            image: "/images/burger.png",
            type: "main",
        },
        {
            name: "PANCAKE",
            price: 15,
            text: "",
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
            text:  "Creamy, chilled dessert in classic or adventurous flavors.",
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
            name: "LASAGNA",
            price: 50,
            text: "Layered pasta sheets with cheese, meat, and tomato sauce.",
            image: "/images/lasagna.png",
            type: " main",
          },
          {
            name: "CHICKEN FINGERS",
            price: 25,
            text:"Crispy golden chicken strips, tender inside, perfect for dipping.",
            image: "/images/chickenfingers.png",
            type: "starter",
          },
          {
            name: "TIRAMISU",
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
//# sourceMappingURL=index.js.map