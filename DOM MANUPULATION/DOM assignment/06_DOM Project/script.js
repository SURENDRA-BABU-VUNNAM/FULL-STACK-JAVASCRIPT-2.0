let logo = document.querySelector("header img");
logo.src = "./assets/ineuron-logo.png";

let price = document.querySelector(".app_price span");
price.textContent = "$10";



let footerSocial = document.querySelector(".footer_social");
let footerSocialIco = document.createElement("div");
footerSocialIco.classList.add("footer_social_ico");
let i = document.createElement("i");
i.classList.add("fa-brands");
i.classList.add("fa-linkedin");
footerSocial.appendChild(footerSocialIco);
footerSocialIco.appendChild(i);


let footerText = document.querySelector(".footer_text");
let strong = document.querySelector(".footer_problems strong");
footerText.style.color = "#5A5A5A";
strong.style.color = "#000";


