
// const URL = "https://restcountries.com/v2/all";

// fetch(URL).then((response)=>response.json()).then((data)=>console.log(data)).catch((error)=>console.log(error))

let data ;

let input = document.querySelector("input");
let form = document.querySelector("form");
let countryName = document.querySelector("#countryName");
let stateName = document.querySelector("#stateName")
let cityName = document.querySelector("#cityName");
let humidity = document.querySelector("#humidity");
let wind_kph= document.querySelector("#windSpeed");
let temp_c = document.querySelector("#temprature");
let logoImage =document.querySelector("#logoImage")
let weatherStatus = document.querySelector("#weatherStatus");


const getData = async (event)=>{
    event.preventDefault();
    let names = input.value
    console.log(names);
    const fetchd = await fetch(`http://api.weatherapi.com/v1/current.json?key=269d23b6903d49e0926122837230203&q=${names}`)
    
    const orgData = await fetchd.json()
    data = orgData
    countryName.textContent = data.location.country;
    stateName.textContent = data.location.region;
    cityName.textContent=data.location.name;
    humidity.textContent=data.current.humidity
    wind_kph.textContent= data.current.wind_kph;
    temp_c.textContent=data.current.temp_c;
    logoImage.src = data.current.condition.icon;
    weatherStatus.textContent = data.current.condition.text
}





