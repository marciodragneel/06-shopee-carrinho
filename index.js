import * as cartService from "./services/cart.js";

import createItem from "./services/item.js";



const myCart = [];
const myWhishList = [];

console.log("Welcome to your SHOPEE cart!");

const item1 =  await createItem("Creatina soldiers", 99.95, 3);
const item2 =  await createItem ("Whey protein MAX 1KG", 120.00, 2);

//adicionei
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

await cartService.removeItem(myCart, item1);
await cartService.removeItem(myCart, item2);

await cartService.displaycart(myCart);


//deletei 2 itens
// await cartService.deleteItem(myCart, item2.name);
// await cartService.deleteItem(myCart, item1.name);

console.log("Shopee cart total is!");
await cartService.calculateItem(myCart);
