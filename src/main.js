import "./style.css";
import getWeather from "./fetch.js";
import {
  render,
  toggleForecast,
  initIcons,
  showLoading,
  hideLoading,
  showError,
  toggleUnits,
} from "./dom.js";

let currentUnit = "metric";

function init() {
  initIcons();
  setupEventListeners();
}

function setupEventListeners() {
  const locationBtn = document.querySelector("#location-btn");
  const fahrenheitBtn = document.querySelector("#fahrenheit-btn");
  const celsiusBtn = document.querySelector("#celsius-btn");
  const forecastTabs = document.querySelector("#forecast-tabs");
  const searchBar = document.querySelector("#city-search");
  const searchBtn = document.querySelector("#search-btn");

  if (locationBtn) locationBtn.onclick = handleLocationClick;

  if (fahrenheitBtn && celsiusBtn) {
    fahrenheitBtn.onclick = () => {
      currentUnit = toggleUnits("imperial", currentUnit);
    };
    celsiusBtn.onclick = () => {
      currentUnit = toggleUnits("metric", currentUnit);
    };
  }

  if (forecastTabs) {
    for (const child of forecastTabs.children) {
      child.onclick = toggleForecast;
    }
  }

  if (searchBar) {
    searchBar.onkeypress = async (e) => {
      if (e.key === "Enter") await handleSearch();
    };
  }

  if (searchBtn) searchBtn.onclick = handleSearch;
}

async function handleSearch() {
  const searchBar = document.querySelector("#city-search");
  const searchValue = searchBar.value.trim();

  if (!searchValue) return;

  showLoading();
  try {
    const data = await getWeather(searchValue);
    render(data);
    setupEventListeners();
  } catch {
    showError(`Couldn't find "${searchValue}"`);
  } finally {
    hideLoading();
  }
}

async function handleLocationClick() {
  if (!navigator.geolocation) {
    showError("Geolocation not supported");
    return;
  }

  const locationBtn = document.querySelector("#location-btn");
  locationBtn.innerHTML = '<span class="text-white">Getting location...</span>';
  locationBtn.disabled = true;

  const resetButton = () => {
    locationBtn.innerHTML = '<i data-lucide="map-pin" class="text-white"></i>';
    locationBtn.disabled = false;
    initIcons();
  };

  navigator.geolocation.getCurrentPosition(
    async (position) => {
      try {
        showLoading();
        const { latitude, longitude } = position.coords;
        const data = await getWeather(`${latitude},${longitude}`);
        render(data);
        setupEventListeners();
      } catch {
        showError("Failed to get weather");
      } finally {
        hideLoading();
        resetButton();
      }
    },
    (err) => {
      const message =
        err.code === err.PERMISSION_DENIED
          ? "Location access denied"
          : "Couldn't get location";
      showError(message);
      resetButton();
    },
  );
}

init();
