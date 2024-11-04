//Quais ações o carrinho pode fazer?

//casos de uso
// => adicionar item 
async function addItem(userCart, item) {
    userCart.push(item);
}

// => deletar item do carrinho
async function deleteItem(userCart, name){
 const index = userCart.findIndex((item) => item.name === name);

 if(index !== - 1){
    userCart.splice(index, 1);
 }
}


// => remover um item - diminui um item
async function removeItem(userCart, item){
  const indexFound = userCart.findIndex((p) => p.name === item.name);
console.log(indexFound);

    if (indexFound == -1) {
        console.log("item nao encontrado");
        return;
    }
    
    if(userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity -=1
    }

    if(userCart [indexFound].quantity ==1){
        userCart.splice(indexFound, 1);
    }
   
   
    } 

// => totalizador do carrinho
async function calculateItem(userCart){
    console.log("\nShopee cart total is:");

    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
  console.log(`\nTotal: ${result}`);

}


async function displaycart(userCart) {
 console.log("\nshopee cart list:")
 userCart.forEach((item, index) =>{
  console.log(`${index + 1}. ${item.name} - R$${item.price} | ${item.quantity}x | Subtotal = ${item.subtotal()}`);
 })
}

export {
    addItem,
    calculateItem,
    deleteItem,
    removeItem,
    displaycart,
};
