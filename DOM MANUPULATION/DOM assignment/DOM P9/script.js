let heading = document.querySelector("h1");
heading.style.color = "#DC143C"



let image = document.querySelector(".add-to-cart img")
console.log(image);
image.src= "./images/icon-cart.svg"


let hover = document.querySelector(".add-to-cart")
hover.addEventListener("mouseenter", () =>{
    hover.style.backgroundColor = "#DC143C"
})
hover.addEventListener("mouseleave", () =>{
    hover.style.backgroundColor = "#3C8067"
})