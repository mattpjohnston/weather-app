import "./style.css";
import getWeather from "./fetch.js";
import { render, toggleForecast } from "./dom.js";

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
} from "lucide";

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

// TODO
function loadPage() {}

const searchBtn = document.querySelector("#search-btn");
searchBtn.addEventListener("click", async () => {
  const searchValue = document.querySelector("#city-search").value;
  if (searchValue && typeof searchValue === "string") {
    try {
      render(await getWeather(searchValue));
    } catch {
      console.log("failed");
    }
  }
});

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

// TODO Set up search box and first load html

// TODO Set up current location button
