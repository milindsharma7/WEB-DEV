const loc = document.getElementById("location");
const temp = document.getElementById("temp");
const day = document.getElementById("day");
const photo = document.getElementById("photo");
const type = document.getElementById("type");
const search = document.getElementById("searchBar");
const btn = document.getElementById("searchBtn");

const getWeather = async() => {
    const url = `https://api.weatherapi.com/v1/current.json?key=ee64d5110b2f4b06829130230232606&q=${search.value}`;
    const get = await fetch(url);
    const data = await get.json();
    console.log(data);
    const time = data.location.localtime.split(" ")[0];
    loc.innerText = data.location.name;
    temp.innerText = data.current.temp_c + '°C';
    day.innerText = getDay(new Date(time).getDay());
    photo.src = data.current.condition.icon;
    type.innerText = data.current.condition.text;
    search.value = "";
}   

const getDay = (number) => {
    days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    return days[number];
}

btn.addEventListener("click",getWeather);
search.addEventListener("keypress",(e)=>{
    e.preventDefault();
    if(e.key === 'Enter'){
        getWeather();
    }
});
search.value = "New Delhi";
getWeather();
search.value = "";