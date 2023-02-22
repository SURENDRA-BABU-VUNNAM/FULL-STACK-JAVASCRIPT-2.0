// task-1 hire me in li inserstion

let hire = document.querySelector("ul");
let list = document.createElement("li");
let link= document.createElement("a")
link.textContent = "Hire me"
link.href = " "
list.appendChild(link)
hire.appendChild(list)

let hide = document.querySelectorAll("ul");
let hide1 = Array.from(hide);
hide1[1].style.display = "none"

let footer =document.querySelector("footer");
footer.style.justifyContent ="flex-start"
footer.style.marginLeft ="6rem" 

let listChange = document.querySelectorAll("a")

let listChange1 = Array.from(listChange);
listChange1[2].textContent ="Projects"

// task-2 change place-holder

let search = document.querySelector("input");

search.placeholder = "Search My Project";

link.style.display = "none"

// task-3 changes in paragraph  

search.placeholder = "Search"
hide1[1].style.display = "flex"

footer.style.justifyContent ="space-around"
footer.style.marginLeft ="0rem" 

let changes = document.querySelectorAll("span");

let changes1 = Array.from(changes)

changes1[2].textContent= "an Employee";
changes1[3].textContent= "ineuron intelligence pvt ltd";

// task-4 

changes1[2].textContent= "a Freelancer";
changes1[3].textContent= "National and International";

let chImg = document.querySelector("img");

chImg.src = "https://hiteshchoudhary.com/static/a8d73d1aac4c79e9bb689640e6090367/2eaab/person-image.jpg"


// task-5 

chImg.src = "./avtar.png"

let newBtn = document.querySelector(".hero-right-section-btns")

let newBtn1 = document.createElement("button")

newBtn1.textContent ="Support me"

newBtn.appendChild(newBtn1)