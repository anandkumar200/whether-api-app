# whether-api-app
A responsive whether application built with Node.js, Express, EJS, Axios, and the OpenWeather API.

# 🌤️ Weather App

A simple weather application built using **Node.js**, **Express**, **EJS**, and the **OpenWeather API**. Enter the latitude and longitude of any location to get real-time weather information, including temperature, humidity, wind speed, pressure, visibility, and more.

## Features

- 🌍 Search weather by latitude and longitude
- 🌡️ Real-time temperature and "feels like" temperature
- ☁️ Weather condition and description
- 💧 Humidity
- 🌬️ Wind speed and direction
- 🎯 Atmospheric pressure
- 👀 Visibility
- 📍 City and country information
- 🌤️ Weather icons from OpenWeather

## Built With

- Node.js
- Express.js
- EJS
- Axios
- OpenWeather API
- HTML & CSS

## Installation

Clone the repository:

```bash
git clone https://github.com/your-username/weather-app.git
```

Go to the project folder:

```bash
cd weather-app
```

Install dependencies:

```bash
npm install
```

Create a `.env` file (or update the API key in the project if you're not using environment variables):

```text
API_KEY=your_openweather_api_key
```

Start the server:

```bash
nodemon index.js
```

or

```bash
node index.js
```

Open your browser and visit:

```
http://localhost:3000
```

## Future Improvements

- Search by city name
- 5-day weather forecast
- Dynamic background based on weather
- Responsive design for mobile devices
- Dark mode
- Display sunrise and sunset times

## What I Learned

This project helped me understand:

- Making HTTP requests using Axios
- Working with REST APIs
- Rendering dynamic content with EJS
- Handling form data in Express
- Organizing a Node.js project
- Using external APIs to build real-world applications

## Acknowledgements

- OpenWeather API for providing weather data
- Angela Yu's Web Development Bootcamp for the project inspiration

---
If you have any suggestions or feedback, feel free to open an issue or contribute to the project.
