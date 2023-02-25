let aside = document.querySelector("aside");

let hr = document.createElement("hr");
hr.classList.add("hr-line")
aside.appendChild(hr)


let heading = document.createElement("h2");
heading.classList.add("new-head");
heading.textContent = "iphone 15 and type-c charger";
aside.appendChild(heading);

let para = document.createElement("p");
para.classList.add("new-p");
para.textContent = "iphone 15 is reported to come with type-c charger";
aside.appendChild(para);

aside.style.overflow = "auto"

let button = document.querySelector(".navbar-toggler");
let collapse = document.querySelector(".collapse");



button.addEventListener("click",()=>{
    collapse.classList.toggle("show")
})
