# task1output

![](./task1Output.png)

solution

```
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

```

# taskoutput2

![](./task2Output.png)

solution

```
let search = document.querySelector("input");

search.placeholder = "Search My Project";

link.style.display = "none"
```

# taskoutput3

![](./task3Output.png)

solution

```

search.placeholder = "Search"
hide1[1].style.display = "flex"

footer.style.justifyContent ="space-around"
footer.style.marginLeft ="0rem" 

let changes = document.querySelectorAll("span");

let changes1 = Array.from(changes)

changes1[2].textContent= "an Employee";
changes1[3].textContent= "ineuron intelligence pvt ltd";

```

# taskoutput4

![](./task4Output.png)

```
changes1[2].textContent= "a Freelancer";
changes1[3].textContent= "National and International";

let chImg = document.querySelector("img");

chImg.src = "https://hiteshchoudhary.com/static/a8d73d1aac4c79e9bb689640e6090367/2eaab/person-image.jpg"

```

# taskoutput5

![](./task5Output.png)

```

chImg.src = "./avtar.png"

let newBtn = document.querySelector(".hero-right-section-btns")

let newBtn1 = document.createElement("button")

newBtn1.textContent ="Support me"

newBtn.appendChild(newBtn1)
```

### note : while checking for evaluation please put all the code ex: while checking for taskoutput2 copy and paste code from both taskoutput1 and taskoutput2 same logic for checking taskoutput3 i.e. all code from output1+output2+output3     