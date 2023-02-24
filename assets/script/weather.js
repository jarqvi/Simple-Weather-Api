//USE WEATHER API
class Weather {
    async getWeather() {
        await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${config.city},${config.state}&appid=${config.apiKey}`)
            .then(res => {
                ui.icon.setAttribute('src', `http://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`);
                ui.temp.textContent = parseInt(res.data.main.temp - 273.15) + "°";
            })
            .catch(err => {
                console.error(err);
            });
    }
}