import { createIcons } from "lucide";

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
  Search,
} from "lucide";

export function initIcons() {
  createIcons({
    icons: {
      Cloud,
      Sun,
      Search,
      MapPin,
      Wind,
      Droplets,
      Sunrise,
      CloudRain,
      CloudSnow,
      CloudLightning,
      CloudFog,
      CloudMoon,
      CloudSun,
      Moon,
      Eye,
      Gauge,
      Sunset,
    },
  });
}

const weatherGradients = {
  snow: "from-slate-300 via-slate-400 to-slate-500",
  "snow-showers-day": "from-slate-300 via-slate-400 to-slate-500",
  "snow-showers-night": "from-slate-700 via-slate-800 to-slate-900",

  "thunder-rain": "from-slate-700 via-purple-900 to-slate-900",
  "thunder-showers-day": "from-slate-700 via-purple-900 to-slate-900",
  "thunder-showers-night": "from-slate-900 via-purple-950 to-black",

  rain: "from-slate-600 via-slate-700 to-slate-800",
  "showers-day": "from-slate-600 via-slate-700 to-slate-800",
  "showers-night": "from-slate-800 via-slate-900 to-black",

  fog: "from-gray-400 via-gray-500 to-gray-600",
  wind: "from-teal-500 via-cyan-600 to-blue-600",
  cloudy: "from-gray-500 via-gray-600 to-gray-700",

  "partly-cloudy-day": "from-blue-400 via-slate-400 to-slate-500",
  "partly-cloudy-night": "from-slate-800 via-slate-900 to-black",

  "clear-day": "from-blue-400 via-blue-500 to-blue-600",
  "clear-night": "from-indigo-900 via-purple-900 to-slate-900",
};

function updateBackground(icon) {
  const body = document.querySelector("#app-body");

  const gradient =
    weatherGradients[icon] || "from-blue-400 via-blue-500 to-blue-600";
  body.className = body.className.replace(/from-\S+ via-\S+ to-\S+/g, gradient);
}

export function showLoading() {
  if (document.querySelector("#loading-indicator")) {
    return;
  }

  const loadingDiv = document.createElement("div");
  loadingDiv.id = "loading-indicator";
  loadingDiv.className =
    "fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50";
  loadingDiv.innerHTML = `
    <div class="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 p-8 shadow-2xl">
      <div class="flex flex-col items-center gap-4">
        <div class="animate-spin rounded-full h-16 w-16 border-4 border-white/30 border-t-white"></div>
        <p class="text-white text-lg font-medium">Loading...</p>
      </div>
    </div>
  `;
  document.body.appendChild(loadingDiv);
}

export function hideLoading() {
  const loadingDiv = document.querySelector("#loading-indicator");
  if (loadingDiv) {
    loadingDiv.remove();
  }
}

export function showError(message) {
  const errorDiv = document.createElement("div");
  errorDiv.className =
    "fixed top-4 right-4 bg-red-500/90 text-white px-6 py-4 rounded-2xl shadow-lg backdrop-blur-md border border-red-400 z-50 animate-fade-in";
  errorDiv.innerHTML = `
    <div class="flex items-center gap-3">
      <span>${message}</span>
    </div>
  `;

  document.body.appendChild(errorDiv);

  setTimeout(() => {
    errorDiv.style.opacity = "0";
    errorDiv.style.transition = "opacity 0.3s ease";
    setTimeout(() => errorDiv.remove(), 300);
  }, 5000);
}

export function toggleUnits(unit, currentUnit) {
  if (unit === currentUnit) return currentUnit;

  const fahrenheitBtn = document.querySelector("#fahrenheit-btn");
  const celsiusBtn = document.querySelector("#celsius-btn");

  if (unit === "imperial") {
    fahrenheitBtn.classList.add("bg-white/20", "text-white");
    fahrenheitBtn.classList.remove("text-white/70");
    celsiusBtn.classList.remove("bg-white/20", "text-white");
    celsiusBtn.classList.add("text-white/70");
  } else {
    celsiusBtn.classList.add("bg-white/20", "text-white");
    celsiusBtn.classList.remove("text-white/70");
    fahrenheitBtn.classList.remove("bg-white/20", "text-white");
    fahrenheitBtn.classList.add("text-white/70");
  }

  convertTemperaturesOnPage(unit);

  return unit;
}

function convertTemperaturesOnPage(toUnit) {
  const currentTemp = document.querySelector("#current-temp");
  if (currentTemp) {
    const temp = parseFloat(currentTemp.textContent);
    currentTemp.textContent = Math.round(
      toUnit === "imperial" ? (temp * 9) / 5 + 32 : ((temp - 32) * 5) / 9,
    );
  }

  const currentHigh = document.querySelector("#current-high");
  const currentLow = document.querySelector("#current-low");
  if (currentHigh && currentLow) {
    const high = parseFloat(currentHigh.textContent);
    const low = parseFloat(currentLow.textContent);
    currentHigh.textContent = Math.round(
      toUnit === "imperial" ? (high * 9) / 5 + 32 : ((high - 32) * 5) / 9,
    );
    currentLow.textContent = Math.round(
      toUnit === "imperial" ? (low * 9) / 5 + 32 : ((low - 32) * 5) / 9,
    );
  }

  const hourlyTemps = document.querySelectorAll(".hourly-temp");
  hourlyTemps.forEach((tempEl) => {
    const temp = parseFloat(tempEl.textContent);
    tempEl.textContent =
      Math.round(
        toUnit === "imperial" ? (temp * 9) / 5 + 32 : ((temp - 32) * 5) / 9,
      ) + "°";
  });

  const dailyHighs = document.querySelectorAll(".daily-high");
  const dailyLows = document.querySelectorAll(".daily-low");

  dailyHighs.forEach((highEl) => {
    const text = highEl.textContent;
    const temp = parseFloat(text.match(/\d+/)[0]);
    highEl.textContent = `H: ${Math.round(toUnit === "imperial" ? (temp * 9) / 5 + 32 : ((temp - 32) * 5) / 9)}°`;
  });

  dailyLows.forEach((lowEl) => {
    const text = lowEl.textContent;
    const temp = parseFloat(text.match(/\d+/)[0]);
    lowEl.textContent = `L: ${Math.round(toUnit === "imperial" ? (temp * 9) / 5 + 32 : ((temp - 32) * 5) / 9)}°`;
  });
}

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

function epochToTime(epochSeconds, tzOffset = 0) {
  const date = new Date(epochSeconds * 1000);
  const utcHours = date.getUTCHours();
  const utcMinutes = date.getUTCMinutes();

  const localHours = (utcHours + tzOffset + 24) % 24;

  return `${String(localHours).padStart(2, "0")}:${String(utcMinutes).padStart(2, "0")}`;
}

function epochToDate(epochSeconds, tzOffset = 0) {
  const date = new Date((epochSeconds + tzOffset * 3600) * 1000);
  return date.toLocaleDateString("en-gb", {
    weekday: "short",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}

function toTitleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function render(data) {
  const container = document.querySelector("#main-container");
  if (data) {
    updateBackground(data.currentConditions.icon);

    container.innerHTML = `     <div id="header-section" class="mb-8">
      <div
        class="flex flex-col md:flex-row gap-4 items-center justify-between"
      >
        <div class="w-full md:w-96">
          <div class="search-container relative text-gray-400">
            <i data-lucide="search" class="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 pointer-events-none z-10" style="width: 20px; height: 20px;"></i>
            <input
              type="text"
              id="city-search"
              placeholder="Search for a place..."
              class="w-full pl-12 pr-4 py-3 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all relative z-0"
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
      <div class="flex items-center justify-between gap-8 mb-8 max-w-2xl mx-auto">
        <div>
          <div class="flex items-center gap-2 text-white/90 mb-2">
            <span class="text-lg" id="current-location"
              >${toTitleCase(data.resolvedAddress)}</span
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
            data-lucide="${weatherIcons[data.currentConditions.icon]}"
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
            ${data.currentConditions.visibility ? Math.round(data.currentConditions.visibility) : "N/A"} km
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
          ${epochToTime(data.currentConditions.sunriseEpoch, data.tzoffset)}
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
          ${epochToTime(data.currentConditions.sunsetEpoch, data.tzoffset)}
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

    const itemsContainer = document.querySelector("#hourly-items");
    const currentDate = new Date(data.currentConditions.datetimeEpoch * 1000);
    const currentHourUTC = currentDate.getUTCHours();
    const currentHourLocal = (currentHourUTC + data.tzoffset + 24) % 24;

    for (let i = 0; i < 7; i++) {
      let currentEl = document.createElement("div");
      currentEl.classList =
        "hourly-item shrink-0 bg-white/10 rounded-2xl p-4 border border-white/10 min-w-[100px] text-center";
      currentEl.dataset.hour = `${i}`;

      const targetHour = (currentHourLocal + i) % 24;
      const dayIndex = Math.floor((currentHourLocal + i) / 24);

      currentEl.innerHTML = `
        <div class="hourly-time text-white/80 text-sm mb-3">${String(targetHour).padStart(2, "0")}:00</div>
        <div class="hourly-icon-container flex justify-center mb-3 text-white">
          <i class="hourly-icon" data-lucide="${weatherIcons[data.days[dayIndex]?.hours[targetHour]?.icon || "cloud"]}"
             style="width: 32px; height: 32px; stroke-width: 1.5px"></i>
        </div>
        <div class="hourly-temp text-white text-xl font-light">${Math.round(data.days[dayIndex].hours[targetHour].temp)}°</div>
      `;
      itemsContainer.appendChild(currentEl);
    }

    const dailyItemsContainer = document.querySelector("#daily-forecast");
    for (let i = 0; i < 7; i++) {
      let currentEl = document.createElement("div");
      currentEl.classList =
        "daily-item bg-white/10 rounded-2xl p-4 border border-white/10 flex items-center justify-between";
      currentEl.dataset.day = `${i}`;
      currentEl.innerHTML = `
        <div class="flex items-center gap-4 flex-1">
          <div class="daily-day text-white font-medium min-w-30">${i === 0 ? "Today" : epochToDate(data.days[i].datetimeEpoch, data.tzoffset)}</div>
          <div class="flex items-center gap-3">
            <i
              class="daily-icon flex justify-center text-white"
              data-lucide="${weatherIcons[data.days[i].icon]}"
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

    initIcons();
  }
}

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
