import { createIcons } from "lucide";
import getWeather from "./fetch.js";

import {
  Cloud,
  Sun,
  CloudRain,
  CloudSnow,
  CloudLightning,
  CloudFog,
  CloudMoon,
  CloudSun,
  Moon,
  Wind,
  Droplets,
  Eye,
  Gauge,
  Sunrise,
  Sunset,
  MapPin,
} from "lucide";

const weatherIcons = {
  snow: "cloud-snow",
  "snow-showers-day": "cloud-snow",
  "snow-showers-night": "cloud-snow",

  "thunder-rain": "cloud-lightning",
  "thunder-showers-day": "cloud-lightning",
  "thunder-showers-night": "cloud-lightning",

  rain: "cloud-rain",
  "showers-day": "cloud-rain",
  "showers-night": "cloud-rain",

  fog: "cloud-fog",
  wind: "wind",
  cloudy: "cloud",

  "partly-cloudy-day": "cloud-sun",
  "partly-cloudy-night": "cloud-moon",

  "clear-day": "sun",
  "clear-night": "moon",
};

export function render(data) {
  const container = document.querySelector("#main-container");
  if (data) {
    container.innerHTML = `     <div id="header-section" class="mb-8">
      <div
        class="flex flex-col md:flex-row gap-4 items-center justify-between"
      >
        <div class="w-full md:w-96">
          <div class="search-container text-gray-400">
            <input
              type="text"
              id="city-search"
              placeholder="Search for a city..."
              class="w-full pl-12 pr-4 py-3 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
            />
          </div>
        </div>

        <div class="flex gap-3">
          <button
            id="location-btn"
            class="p-3 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 transition-all duration-200 hover:scale-105 active:scale-95"
            aria-label="Get current location"
          >
            <i data-lucide="map-pin" class="text-white"></i>
          </button>

          <div
            class="flex rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 overflow-hidden"
            id="unit-toggle"
          >
            <button
              id="fahrenheit-btn"
              class="px-4 py-3 font-semibold transition-all text-white/70 hover:bg-white/20"
            >
              °F
            </button>
            <button
              id="celsius-btn"
              class="px-4 py-3 font-semibold transition-all bg-white/20 text-white hover:bg-white/30"
            >
              °C
            </button>
          </div>
        </div>
      </div>
    </div>

    <!--Main Weather Card -->
    <div
      id="main-weather-card"
      class="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 p-8 mb-6 shadow-2xl"
    >
      <div class="flex items-center justify-center mb-8">
        <div>
          <div class="flex items-center gap-2 text-white/90 mb-2">
            <span class="text-lg" id="current-location"
              >${data.address[0].toUpperCase() + data.address.slice(1).toLowerCase()}</span
            >
          </div>
          <div class="text-white text-7xl md:text-8xl font-light mb-2">
            <span id="current-temp">${Math.round(data.currentConditions.temp)}</span>°
          </div>
          <div class="text-white/80 text-xl mb-1" id="current-condition">
          ${data.currentConditions.conditions}
          </div>
          <div class="text-white/70 text-sm">
            H: <span id="current-high">${Math.round(data.days[0].tempmax)}</span>° L:
            <span id="current-low">${Math.round(data.days[0].tempmin)}</span>°
          </div>
        </div>

        <div id="current-weather-icon" class="text-white/90">
          <i
            id="main-icon"
            data-lucide=${weatherIcons[data.currentConditions.icon]}
            style="width: 100px; height: 100px; stroke-width: 1.5px"
          ></i>
        </div>
      </div>

      <!--Weather Details Grid -->
      <div
        id="weather-details-grid"
        class="grid grid-cols-2 md:grid-cols-3 gap-4"
      >
        <div
          class="weather-detail bg-white/10 rounded-2xl p-4 border border-white/10"
        >
          <div class="flex items-center gap-2 text-white/70 text-sm mb-2">
            <i data-lucide="wind"></i>
            <span>Wind</span>
          </div>
          <div class="text-white text-2xl font-light" id="wind-speed">
            ${Math.round(data.currentConditions.windspeed)} km/h
          </div>
        </div>

        <div
          class="weather-detail bg-white/10 rounded-2xl p-4 border border-white/10"
        >
          <div class="flex items-center gap-2 text-white/70 text-sm mb-2">
            <i data-lucide="droplets"></i>
            <span>Humidity</span>
          </div>
          <div class="text-white text-2xl font-light" id="humidity">${Math.round(data.currentConditions.humidity)}%</div>
        </div>

        <div
          class="weather-detail bg-white/10 rounded-2xl p-4 border border-white/10"
        >
          <div class="flex items-center gap-2 text-white/70 text-sm mb-2">
            <i data-lucide="eye"></i>
            <span>Visibility</span>
          </div>
          <div class="text-white text-2xl font-light" id="visibility">
            ${Math.round(data.currentConditions.visibility)} km
          </div>
        </div>

        <div
          class="weather-detail bg-white/10 rounded-2xl p-4 border border-white/10"
        >
          <div class="flex items-center gap-2 text-white/70 text-sm mb-2">
            <i data-lucide="gauge"></i>
            <span>Pressure</span>
          </div>
          <div class="text-white text-2xl font-light" id="pressure">
            ${Math.round(data.currentConditions.pressure)} hPa
          </div>
        </div>

        <div
          class="weather-detail bg-white/10 rounded-2xl p-4 border border-white/10"
        >
          <div class="flex items-center gap-2 text-white/70 text-sm mb-2">
            <i data-lucide="sunrise"></i>
            <span>Sunrise</span>
          </div>
          <div class="text-white text-2xl font-light" id="sunrise">
          ${data.currentConditions.sunrise.slice(0, 5)}
          </div>
        </div>

        <div
          class="weather-detail bg-white/10 rounded-2xl p-4 border border-white/10"
        >
          <div class="flex items-center gap-2 text-white/70 text-sm mb-2">
            <i data-lucide="sunset"></i>
            <span>Sunset</span>
          </div>
          <div class="text-white text-2xl font-light" id="sunset">
          ${data.currentConditions.sunset.slice(0, 5)}
          </div>
        </div>
      </div>
    </div>

    <!--Forecast Section -->
    <div
      id="forecast-section"
      class="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 p-6 shadow-2xl"
    >
      <!--Tabs -->
      <div id="forecast-tabs" class="flex gap-4 mb-6 justify-center">
        <button
          id="hourly-tab"
          class="px-4 py-2 rounded-xl bg-white/20 text-white font-medium transition-all  duration-200 hover:scale-105 active:scale-95" disabled="true"
        >
          Hourly
        </button>
        <button
          id="daily-tab"
          class="px-4 py-2 rounded-xl text-white/70 font-medium hover:bg-white/10 transition-all duration-200 hover:scale-105 active:scale-95"
        >
          7-Day Forecast
        </button>
      </div>

      <!--Hourly Forecast -->
      <div
        id="hourly-forecast"
        class="flex justify-center overflow-x-auto no-scrollbar mx-auto"
      >
        <div class="flex gap-4 pb-2" id="hourly-items">

        </div>
      </div>

      <!--Daily Forecast (Hidden by default) -->
      <div id="daily-forecast" class="space-y-3 hidden">

      </div>
    </div>`;

    // TODO convert times from UTC to timezone of place in data
    const itemsContainer = document.querySelector("#hourly-items");
    let currentHour = parseFloat(data.currentConditions.datetime.slice(0, 2));
    for (let i = 0; i < 7; i++) {
      let currentEl = document.createElement("div");
      currentEl.id = "hourly-item";
      currentEl.classList =
        "hourly-item shrink-0 bg-white/10 rounded-2xl p-4 border border-white/10 min-w-25 text-center";
      currentEl.dataset.hour = `${i}`;

      let timeUnit;
      if (i + currentHour < 12) {
        timeUnit = " am";
      } else timeUnit = " pm";

      if (i + currentHour < 24) {
        currentEl.innerHTML = `
            <div class="hourly-time text-white/80 text-sm mb-3">${i + currentHour + timeUnit}</div>
            <div
              class="hourly-icon-container flex justify-center mb-3 text-white"
            >
              <i
                class="hourly-icon"
                data-lucide="${weatherIcons[data.days[0].hours[i + currentHour].icon]}"
                style="width: 32px; height: 32px; stroke-width: 1.5px"
              ></i>
            </div>
            <div class="hourly-temp text-white text-xl font-light">${Math.round(data.days[0].hours[i + currentHour].temp)}°</div>
          </div>`;
      } else {
        currentEl.innerHTML = `
          <div class="hourly-time text-white/80 text-sm mb-3">${((i + currentHour) % 24) + timeUnit}</div>
          <div
            class="hourly-icon-container flex justify-center mb-3 text-white"
          >
            <i
              class="hourly-icon"
              data-lucide="${weatherIcons[data.days[1].hours[(i + currentHour) % 24].icon]}"
              style="width: 32px; height: 32px; stroke-width: 1.5px"
            ></i>
          </div>
          <div class="hourly-temp text-white text-xl font-light">${Math.round(data.days[1].hours[(i + currentHour) % 24].temp)}°</div>
        </div>`;
      }
      itemsContainer.appendChild(currentEl);
    }

    const dailyItemsContainer = document.querySelector("#daily-forecast");
    for (let i = 0; i < 7; i++) {
      let currentEl = document.createElement("div");
      currentEl.id = "daily-item";
      currentEl.classList =
        "daily-item bg-white/10 rounded-2xl p-4 border border-white/10 flex items-center justify-between";
      currentEl.dataset.day = `${i}`;
      currentEl.innerHTML = `
        <div class="flex items-center gap-4 flex-1">
          <div class="daily-day text-white font-medium w-12">Day ${data.days[i].datetime.slice(-2)}</div>
          <div class="flex items-center gap-3">
            <i
              class="daily-icon flex justify-center text-white"
              data-lucide=${weatherIcons[data.days[i].icon]}
              class="text-white"
              style="width: 28px; height: 28px; stroke-width: 1.5px"
            ></i>
            <span class="daily-condition text-white/80">${data.days[i].conditions}</span>
          </div>
        </div>
        <div class="flex items-center gap-4">
          <span class="daily-low text-white/60">L: ${Math.round(data.days[i].tempmin)}°</span>
          <span class="daily-high text-white font-medium">H: ${Math.round(data.days[i].tempmax)}°</span>
          </div>`;

      dailyItemsContainer.appendChild(currentEl);
    }

    const forecastTabs = document.querySelector("#forecast-tabs");
    for (const child of forecastTabs.children) {
      child.addEventListener("click", () => toggleForecast());
    }

    const searchBar = document.querySelector("#city-search");
    searchBar.addEventListener("keypress", async (e) => {
      if (e.key === "Enter") {
        const searchValue = searchBar.value;
        if (searchValue && typeof searchValue === "string") {
          try {
            render(await getWeather(searchValue));
          } catch {
            console.log("failed");
          }
        }
      }
    });

    createIcons({
      icons: {
        Cloud,
        Sun,
        CloudRain,
        CloudSnow,
        CloudLightning,
        CloudFog,
        CloudMoon,
        CloudSun,
        Moon,
        Wind,
        Droplets,
        Eye,
        Gauge,
        Sunrise,
        Sunset,
        MapPin,
      },
    });
  }
}

// Toggle between hourly and 7 day forecast
export function toggleForecast() {
  const hourlyTab = document.querySelector("#hourly-tab");
  const dailyTab = document.querySelector("#daily-tab");
  const hourly = document.querySelector("#hourly-forecast");
  const daily = document.querySelector("#daily-forecast");

  hourlyTab.classList.toggle("bg-white/20");
  hourlyTab.classList.toggle("text-white");
  hourlyTab.classList.toggle("text-white/70");
  hourlyTab.classList.toggle("hover:bg-white/10");
  hourlyTab.toggleAttribute("disabled");

  dailyTab.classList.toggle("bg-white/20");
  dailyTab.classList.toggle("text-white");
  dailyTab.classList.toggle("text-white/70");
  dailyTab.classList.toggle("hover:bg-white/10");
  dailyTab.toggleAttribute("disabled");

  hourly.classList.toggle("hidden");
  daily.classList.toggle("hidden");
}

// TODO toggle between celcius and farenheight
