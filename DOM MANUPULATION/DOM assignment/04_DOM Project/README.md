# taskoutput 

![](./04_DOM%20Project/Output/DOM%20P1%20SS.png)

solution 

```
let fontColor = document.querySelectorAll(".one-third");

fontColor = Array.from(fontColor);

fontColor.forEach(fontColor => {
    fontColor.style.color = "#fff";
})

let backgroundColor = ["#ec9b3b","#ee5487","#f6901a","#f6901a","#4facff"]

let change = document.querySelectorAll(".clearfix");

change = Array.from(change);


for (let index = 0; index < backgroundColor.length; index++) {
    change[index].style.backgroundColor = `${backgroundColor[index]}`
}


// archer

let archer = document.querySelectorAll(".archer div");

archer = Array.from(archer);

archer[2].textContent = "The Archer";

// goblin

let goblin = document.querySelectorAll(".goblin div");

goblin = Array.from(goblin);

goblin[2].textContent = "The Goblin";
```