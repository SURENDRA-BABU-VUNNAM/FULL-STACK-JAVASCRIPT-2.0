# taskoutput 

![](./task1Output.png)

```
let form = document.querySelectorAll("form");
form= Array.from(form)

let input = document.querySelectorAll("input");


input = Array.from(input);

let textArea = document.querySelectorAll("textarea");
textArea = Array.from(textArea)

let button = document.querySelectorAll("button");

button = Array.from(button);

form[1].addEventListener("submit",(event)=>{
    event.preventDefault()
    input[1].value = input[3].value;
    input[2].value = input[4].value;
    textArea[0].value = textArea[1].value
});


form[0].addEventListener("reset",(event)=>{
    event.preventDefault()
    
    input.forEach(input => {
        input.value = ""
    })

    textArea.forEach(textArea => {
        textArea.value =""
    })
})


```