# taskoutput 

![](./Output/DOM%20P2%20SS.png)


```

let pro = document.createElement("a");
pro.href = "./index.html";
pro.textContent = "Pro Subscription";
pro.classList.add("btn");
let insert = document.querySelectorAll(".nav-center div");
insert =Array.from(insert)
insert[2].appendChild(pro);


let insertChi = document.querySelectorAll(".tags-container div");
insertChi = Array.from(insertChi)
let chi = document.createElement("a")
chi.href = "#"
chi.textContent = "chinese (7)"
insertChi[0].appendChild(chi)


let insertItem = document.querySelector(".recipe-gallery");

let newItem = document.createElement("div")
newItem.classList.add("card")


let newItemLink = document.createElement("a");
newItemLink.href ="#";
newItemLink.classList.add("recipe-text")


let newItemImage = document.createElement("img")
newItemImage.src ="https://media.istockphoto.com/id/1437065088/photo/spicy-dal-makhani-or-butter-daal-served-in-a-dish-isolated-on-grey-background-top-view-of.jpg?s=612x612&w=0&k=20&c=lUVmyJkCz7XpD_IctxeI4pf4nkiifZ08Y_w97imzXPc="
newItemImage.classList.add("recipe-img");


let newItemName = document.createElement("h5");
newItemName.classList.add("recipe-name")
newItemName.textContent ="Dal Makhani";

let newItemDesc = document.createElement("p");
newItemDesc.classList.add("recipe-disp");
newItemDesc.textContent = "Prep: 30Min | Cook:45Min";


insertItem.appendChild(newItem);
newItem.appendChild(newItemLink);
newItemLink.appendChild(newItemImage);
newItemLink.appendChild(newItemName);
newItemLink.appendChild(newItemDesc);



let changeColor = document.querySelectorAll(".card h5, .card p");
changeColor = Array.from(changeColor)
changeColor.forEach(changeColor => {
    changeColor.style.color = "#551A8B";
})


```