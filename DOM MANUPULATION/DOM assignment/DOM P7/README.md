# total output 

solution

```
let mainLanguages = document.querySelectorAll(".main__languages a");
mainLanguages = Array.from(mainLanguages);

let appendMain = document.querySelector(".main__languages")

let put = document.querySelectorAll(".main__languages a");
put = Array.from(put)



var state = history.state || {};
var reloadCount = state.reloadCount || 0;
if (performance.navigation.type === 1) { // Reload
    state.reloadCount = ++reloadCount;
    history.replaceState(state, null, document.URL);
} else if (reloadCount) {
    delete state.reloadCount;
    reloadCount = 0;
    history.replaceState(state, null, document.URL);
}
if (reloadCount < 1) {
    // Now, do whatever you want...
    for (let index = 0; index < mainLanguages.length; index++) {
        if (index%2 !== 0) {
            mainLanguages[index].style.display ="none"
        }
    }
}

let input = document.querySelector("input");
let button = document.querySelector("form button");

input.disabled = false
button.disabled = false

button.addEventListener("click", (e) =>{
    e.preventDefault();
    location.reload()
    for (let index = 0; index < mainLanguages.length; index++) {
        mainLanguages[index].style.display ="inline"
    }    
})


```