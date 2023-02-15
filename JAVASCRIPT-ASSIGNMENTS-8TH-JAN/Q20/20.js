const shoppingCart = [`Milk`, `Coffee`, `Tea`, `Honey`]


let meatExist = shoppingCart.includes(`Meat`);
console.log(typeof meatExist);
if (meatExist =`false`) {
    shoppingCart.unshift(`Meat`);
}

let sugarExist = shoppingCart.includes(`Sugar`)
if (sugarExist = `false`) {
    shoppingCart.push(`Sugar`)
}

let honeyExist = shoppingCart.includes(`Honey`);
let hon = shoppingCart.indexOf(`Honey`);
if (honeyExist = `true`) {
    shoppingCart.splice(hon,1);
}

let teaExist = shoppingCart.includes(`Tea`);
let tea = shoppingCart.indexOf(`Tea`);
if (teaExist = `true`) {
    shoppingCart[tea] = `Green tea`
} else {
    shoppingCart.push(`Green tea`)
}


console.log(shoppingCart);