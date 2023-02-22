
// task2

let wrapper = document.querySelector(".accordian-wrapper");

console.log(wrapper);

let skills = document.createElement("div")

skills.classList.add("accordian");



let header = document.createElement("h3");

let skillsPara = document.createElement("p")

skillsPara.textContent = "I posses a very good command over Full Stack Development technologies like MERN which can be seen on my work over Github"



header.textContent = "Skills";

skills.appendChild(header)
skills.appendChild(skillsPara)


console.log(skills);

wrapper.appendChild(skills)

let accordian = document.querySelectorAll(".accordian h3");
accordian.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});


// task1


accordian= Array.from(accordian);

accordian.forEach(element => {
  element.style.backgroundColor = "#DADAF8"
});



