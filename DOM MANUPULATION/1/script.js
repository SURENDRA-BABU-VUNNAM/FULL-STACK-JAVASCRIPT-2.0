let body = document.querySelector("body");

body.style.backgroundColor = "#000"
body.style.height = "100vh"
body.style.width= "100%"

body.addEventListener("click" , function(event){
    let circle = document.createElement("div");
    circle.classList.add("open");
    circle.style.left = event.clientX + "px";
    circle.style.top = event.clientY + "px";
    circle.style.borderRadius = "50%"
    body.appendChild(circle)
})