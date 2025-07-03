const apikey = "0e7e1015777514951088554385361d94";
function getWeather(){
    const city=document.getElementById("cityInput").value;
    const result=document.getElementById("weatherResult");

    if(!city){
        alert("Please Enter a city name.");
        return;
    }
    
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`)
    .then(res=>res.json())
    .then(data=>{
        if(data.cod==="404"){
            result.textContent="city not found.";
            return;
        }
        const temp=data.main.temp;
        const condition=data.weather[0].description;
        result.innerHTML=`<h3>${city.toUpperCase()}</h3>
        <p>🌡️ Temperature: ${temp}°C</p>
        <p>☁️ Condition: ${condition}</p>`;
    })
    .catch(()=>{
        result.textContent="something went wrong.";
    });
}