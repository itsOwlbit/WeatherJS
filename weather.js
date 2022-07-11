class Weather {
    constructor(city, state) {
        this.apiKey = 'a23f9a49073e8f564d759612b745a146';
        this.city = city;
        this.state = state;
        this.country = 'us';
    }

    // Fetch weather from API
    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state},${this.country}&appid=${this.apiKey}&units=imperial`);
    
        const responseData = await response.json();

        return responseData;
    }

    // Change weather location
    changeLocation(city, state = 'ca') {
        this.city = city;
        this.state = state;
    }
}