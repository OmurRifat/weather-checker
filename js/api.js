
const apiFetching = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5a15a1bc9a837ab84d6e202de10deb70&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data, "from api")
    processingData(data);
}
document.getElementById("search-btn").addEventListener('click', (event) => {
    const searchValue = document.getElementById("cityId").value;
    apiFetching(searchValue);
});

function processingData(data) {
    document.getElementById("weatherImg").removeAttribute("src")
    document.getElementById("weatherImg").setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon ? data.weather[0].icon : "02d"}@2x.png`);
    document.getElementById("cityName").innerText = data?.name ? data.name : "Please insert corrent pronounce.";
    document.getElementById("cityTemp").innerText = data?.main?.temp;
    document.getElementById("WeatherCon").innerText = data?.weather[0]?.main;
}