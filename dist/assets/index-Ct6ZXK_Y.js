(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function i(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(n){if(n.ep)return;n.ep=!0;const r=i(n);fetch(n.href,r)}})();async function v(t){const i=`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(t)}?unitGroup=metric&key=BCDZFB48HWA3ZG49JXGMETLUW&contentType=json&iconSet=icons2`,o=await fetch(i);if(!o.ok)throw new Error(`Error: ${o.status}`);return o.json()}const x={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};const M=([t,e,i])=>{const o=document.createElementNS("http://www.w3.org/2000/svg",t);return Object.keys(e).forEach(n=>{o.setAttribute(n,String(e[n]))}),i?.length&&i.forEach(n=>{const r=M(n);o.appendChild(r)}),o},$=(t,e={})=>{const o={...x,...e};return M(["svg",o,t])};const E=t=>Array.from(t.attributes).reduce((e,i)=>(e[i.name]=i.value,e),{}),k=t=>typeof t=="string"?t:!t||!t.class?"":t.class&&typeof t.class=="string"?t.class.split(" "):t.class&&Array.isArray(t.class)?t.class:"",T=t=>t.flatMap(k).map(i=>i.trim()).filter(Boolean).filter((i,o,n)=>n.indexOf(i)===o).join(" "),A=t=>t.replace(/(\w)(\w*)(_|-|\s*)/g,(e,i,o)=>i.toUpperCase()+o.toLowerCase()),w=(t,{nameAttr:e,icons:i,attrs:o})=>{const n=t.getAttribute(e);if(n==null)return;const r=A(n),c=i[r];if(!c)return console.warn(`${t.outerHTML} icon name was not found in the provided icons object.`);const s=E(t),a={...x,"data-lucide":n,...o,...s},d=T(["lucide",`lucide-${n}`,s,o]);d&&Object.assign(a,{class:d});const l=$(c,a);return t.parentNode?.replaceChild(l,t)};const q=[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"M16 17H7"}],["path",{d:"M17 21H9"}]];const N=[["path",{d:"M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973"}],["path",{d:"m13 12-3 5h4l-3 5"}]];const j=[["path",{d:"M13 16a3 3 0 0 1 0 6H7a5 5 0 1 1 4.9-6z"}],["path",{d:"M18.376 14.512a6 6 0 0 0 3.461-4.127c.148-.625-.659-.97-1.248-.714a4 4 0 0 1-5.259-5.26c.255-.589-.09-1.395-.716-1.248a6 6 0 0 0-4.594 5.36"}]];const D=[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"M16 14v6"}],["path",{d:"M8 14v6"}],["path",{d:"M12 16v6"}]];const B=[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"M8 15h.01"}],["path",{d:"M8 19h.01"}],["path",{d:"M12 17h.01"}],["path",{d:"M12 21h.01"}],["path",{d:"M16 15h.01"}],["path",{d:"M16 19h.01"}]];const F=[["path",{d:"M12 2v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"M20 12h2"}],["path",{d:"m19.07 4.93-1.41 1.41"}],["path",{d:"M15.947 12.65a4 4 0 0 0-5.925-4.128"}],["path",{d:"M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z"}]];const I=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"}]];const O=[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"}]];const P=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"}],["circle",{cx:"12",cy:"12",r:"3"}]];const z=[["path",{d:"m12 14 4-4"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0"}]];const G=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"}],["circle",{cx:"12",cy:"10",r:"3"}]];const W=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"}]];const U=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];const R=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]];const V=[["path",{d:"M12 2v8"}],["path",{d:"m4.93 10.93 1.41 1.41"}],["path",{d:"M2 18h2"}],["path",{d:"M20 18h2"}],["path",{d:"m19.07 10.93-1.41 1.41"}],["path",{d:"M22 22H2"}],["path",{d:"m8 6 4-4 4 4"}],["path",{d:"M16 18a4 4 0 0 0-8 0"}]];const Z=[["path",{d:"M12 10V2"}],["path",{d:"m4.93 10.93 1.41 1.41"}],["path",{d:"M2 18h2"}],["path",{d:"M20 18h2"}],["path",{d:"m19.07 10.93-1.41 1.41"}],["path",{d:"M22 22H2"}],["path",{d:"m16 6-4 4-4-4"}],["path",{d:"M16 18a4 4 0 0 0-8 0"}]];const K=[["path",{d:"M12.8 19.6A2 2 0 1 0 14 16H2"}],["path",{d:"M17.5 8a2.5 2.5 0 1 1 2 4H2"}],["path",{d:"M9.8 4.4A2 2 0 1 1 11 8H2"}]];const C=({icons:t={},nameAttr:e="data-lucide",attrs:i={},root:o=document,inTemplates:n}={})=>{if(!Object.values(t).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof o>"u")throw new Error("`createIcons()` only works in a browser environment.");if(Array.from(o.querySelectorAll(`[${e}]`)).forEach(c=>w(c,{nameAttr:e,icons:t,attrs:i})),n&&Array.from(o.querySelectorAll("template")).forEach(s=>C({icons:t,nameAttr:e,attrs:i,root:s.content,inTemplates:n})),e==="data-lucide"){const c=o.querySelectorAll("[icon-name]");c.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(c).forEach(s=>w(s,{nameAttr:"icon-name",icons:t,attrs:i})))}};function m(){C({icons:{Cloud:I,Sun:R,Search:U,MapPin:G,Wind:K,Droplets:O,Sunrise:V,CloudRain:D,CloudSnow:B,CloudLightning:N,CloudFog:q,CloudMoon:j,CloudSun:F,Moon:W,Eye:P,Gauge:z,Sunset:Z}})}const _={snow:"from-slate-300 via-slate-400 to-slate-500","snow-showers-day":"from-slate-300 via-slate-400 to-slate-500","snow-showers-night":"from-slate-700 via-slate-800 to-slate-900","thunder-rain":"from-slate-700 via-purple-900 to-slate-900","thunder-showers-day":"from-slate-700 via-purple-900 to-slate-900","thunder-showers-night":"from-slate-900 via-purple-950 to-black",rain:"from-slate-600 via-slate-700 to-slate-800","showers-day":"from-slate-600 via-slate-700 to-slate-800","showers-night":"from-slate-800 via-slate-900 to-black",fog:"from-gray-400 via-gray-500 to-gray-600",wind:"from-teal-500 via-cyan-600 to-blue-600",cloudy:"from-gray-500 via-gray-600 to-gray-700","partly-cloudy-day":"from-blue-400 via-slate-400 to-slate-500","partly-cloudy-night":"from-slate-800 via-slate-900 to-black","clear-day":"from-blue-400 via-blue-500 to-blue-600","clear-night":"from-indigo-900 via-purple-900 to-slate-900"};function J(t){const e=document.querySelector("#app-body"),i=_[t]||"from-blue-400 via-blue-500 to-blue-600";e.className=e.className.replace(/from-\S+ via-\S+ to-\S+/g,i)}function S(){if(document.querySelector("#loading-indicator"))return;const t=document.createElement("div");t.id="loading-indicator",t.className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50",t.innerHTML=`
    <div class="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 p-8 shadow-2xl">
      <div class="flex flex-col items-center gap-4">
        <div class="animate-spin rounded-full h-16 w-16 border-4 border-white/30 border-t-white"></div>
        <p class="text-white text-lg font-medium">Loading...</p>
      </div>
    </div>
  `,document.body.appendChild(t)}function L(){const t=document.querySelector("#loading-indicator");t&&t.remove()}function h(t){const e=document.createElement("div");e.className="fixed top-4 right-4 bg-red-500/90 text-white px-6 py-4 rounded-2xl shadow-lg backdrop-blur-md border border-red-400 z-50 animate-fade-in",e.innerHTML=`
    <div class="flex items-center gap-3">
      <span>${t}</span>
    </div>
  `,document.body.appendChild(e),setTimeout(()=>{e.style.opacity="0",e.style.transition="opacity 0.3s ease",setTimeout(()=>e.remove(),300)},5e3)}function g(t,e){if(t===e)return e;const i=document.querySelector("#fahrenheit-btn"),o=document.querySelector("#celsius-btn");return t==="imperial"?(i.classList.add("bg-white/20","text-white"),i.classList.remove("text-white/70"),o.classList.remove("bg-white/20","text-white"),o.classList.add("text-white/70")):(o.classList.add("bg-white/20","text-white"),o.classList.remove("text-white/70"),i.classList.remove("bg-white/20","text-white"),i.classList.add("text-white/70")),X(t),t}function X(t){const e=document.querySelector("#current-temp");if(e){const s=parseFloat(e.textContent);e.textContent=Math.round(t==="imperial"?s*9/5+32:(s-32)*5/9)}const i=document.querySelector("#current-high"),o=document.querySelector("#current-low");if(i&&o){const s=parseFloat(i.textContent),a=parseFloat(o.textContent);i.textContent=Math.round(t==="imperial"?s*9/5+32:(s-32)*5/9),o.textContent=Math.round(t==="imperial"?a*9/5+32:(a-32)*5/9)}document.querySelectorAll(".hourly-temp").forEach(s=>{const a=parseFloat(s.textContent);s.textContent=Math.round(t==="imperial"?a*9/5+32:(a-32)*5/9)+"°"});const r=document.querySelectorAll(".daily-high"),c=document.querySelectorAll(".daily-low");r.forEach(s=>{const a=s.textContent,d=parseFloat(a.match(/\d+/)[0]);s.textContent=`H: ${Math.round(t==="imperial"?d*9/5+32:(d-32)*5/9)}°`}),c.forEach(s=>{const a=s.textContent,d=parseFloat(a.match(/\d+/)[0]);s.textContent=`L: ${Math.round(t==="imperial"?d*9/5+32:(d-32)*5/9)}°`})}const p={snow:"cloud-snow","snow-showers-day":"cloud-snow","snow-showers-night":"cloud-snow","thunder-rain":"cloud-lightning","thunder-showers-day":"cloud-lightning","thunder-showers-night":"cloud-lightning",rain:"cloud-rain","showers-day":"cloud-rain","showers-night":"cloud-rain",fog:"cloud-fog",wind:"wind",cloudy:"cloud","partly-cloudy-day":"cloud-sun","partly-cloudy-night":"cloud-moon","clear-day":"sun","clear-night":"moon"};function y(t,e=0){const i=new Date(t*1e3),o=i.getUTCHours(),n=i.getUTCMinutes(),r=(o+e+24)%24;return`${String(r).padStart(2,"0")}:${String(n).padStart(2,"0")}`}function Q(t,e=0){return new Date((t+e*3600)*1e3).toLocaleDateString("en-gb",{weekday:"short",month:"short",day:"numeric",timeZone:"UTC"})}function Y(t){return t.toLowerCase().split(" ").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ")}function H(t){const e=document.querySelector("#main-container");if(t){J(t.currentConditions.icon),e.innerHTML=`     <div id="header-section" class="mb-8">
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
              >${Y(t.resolvedAddress)}</span
            >
          </div>
          <div class="text-white text-7xl md:text-8xl font-light mb-2">
            <span id="current-temp">${Math.round(t.currentConditions.temp)}</span>°
          </div>
          <div class="text-white/80 text-xl mb-1" id="current-condition">
          ${t.currentConditions.conditions}
          </div>
          <div class="text-white/70 text-sm">
            H: <span id="current-high">${Math.round(t.days[0].tempmax)}</span>° L:
            <span id="current-low">${Math.round(t.days[0].tempmin)}</span>°
          </div>
        </div>

        <div id="current-weather-icon" class="text-white/90">
          <i
            id="main-icon"
            data-lucide="${p[t.currentConditions.icon]}"
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
            ${Math.round(t.currentConditions.windspeed)} km/h
          </div>
        </div>

        <div
          class="weather-detail bg-white/10 rounded-2xl p-4 border border-white/10"
        >
          <div class="flex items-center gap-2 text-white/70 text-sm mb-2">
            <i data-lucide="droplets"></i>
            <span>Humidity</span>
          </div>
          <div class="text-white text-2xl font-light" id="humidity">${Math.round(t.currentConditions.humidity)}%</div>
        </div>

        <div
          class="weather-detail bg-white/10 rounded-2xl p-4 border border-white/10"
        >
          <div class="flex items-center gap-2 text-white/70 text-sm mb-2">
            <i data-lucide="eye"></i>
            <span>Visibility</span>
          </div>
          <div class="text-white text-2xl font-light" id="visibility">
            ${t.currentConditions.visibility?Math.round(t.currentConditions.visibility):"N/A"} km
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
            ${Math.round(t.currentConditions.pressure)} hPa
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
          ${y(t.currentConditions.sunriseEpoch,t.tzoffset)}
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
          ${y(t.currentConditions.sunsetEpoch,t.tzoffset)}
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
    </div>`;const i=document.querySelector("#hourly-items"),r=(new Date(t.currentConditions.datetimeEpoch*1e3).getUTCHours()+t.tzoffset+24)%24;for(let s=0;s<7;s++){let a=document.createElement("div");a.classList="hourly-item shrink-0 bg-white/10 rounded-2xl p-4 border border-white/10 min-w-[100px] text-center",a.dataset.hour=`${s}`;const d=(r+s)%24,l=Math.floor((r+s)/24);a.innerHTML=`
        <div class="hourly-time text-white/80 text-sm mb-3">${String(d).padStart(2,"0")}:00</div>
        <div class="hourly-icon-container flex justify-center mb-3 text-white">
          <i class="hourly-icon" data-lucide="${p[t.days[l]?.hours[d]?.icon||"cloud"]}"
             style="width: 32px; height: 32px; stroke-width: 1.5px"></i>
        </div>
        <div class="hourly-temp text-white text-xl font-light">${Math.round(t.days[l].hours[d].temp)}°</div>
      `,i.appendChild(a)}const c=document.querySelector("#daily-forecast");for(let s=0;s<7;s++){let a=document.createElement("div");a.classList="daily-item bg-white/10 rounded-2xl p-4 border border-white/10 flex items-center justify-between",a.dataset.day=`${s}`,a.innerHTML=`
        <div class="flex items-center gap-4 flex-1">
          <div class="daily-day text-white font-medium min-w-30">${s===0?"Today":Q(t.days[s].datetimeEpoch,t.tzoffset)}</div>
          <div class="flex items-center gap-3">
            <i
              class="daily-icon flex justify-center text-white"
              data-lucide="${p[t.days[s].icon]}"
              style="width: 28px; height: 28px; stroke-width: 1.5px"
            ></i>
            <span class="daily-condition text-white/80">${t.days[s].conditions}</span>
          </div>
        </div>
        <div class="flex items-center gap-4">
          <span class="daily-low text-white/60">L: ${Math.round(t.days[s].tempmin)}°</span>
          <span class="daily-high text-white font-medium">H: ${Math.round(t.days[s].tempmax)}°</span>
          </div>`,c.appendChild(a)}m()}}function tt(){const t=document.querySelector("#hourly-tab"),e=document.querySelector("#daily-tab"),i=document.querySelector("#hourly-forecast"),o=document.querySelector("#daily-forecast");t.classList.toggle("bg-white/20"),t.classList.toggle("text-white"),t.classList.toggle("text-white/70"),t.classList.toggle("hover:bg-white/10"),t.toggleAttribute("disabled"),e.classList.toggle("bg-white/20"),e.classList.toggle("text-white"),e.classList.toggle("text-white/70"),e.classList.toggle("hover:bg-white/10"),e.toggleAttribute("disabled"),i.classList.toggle("hidden"),o.classList.toggle("hidden")}let u="metric";function et(){m(),f()}function f(){const t=document.querySelector("#location-btn"),e=document.querySelector("#fahrenheit-btn"),i=document.querySelector("#celsius-btn"),o=document.querySelector("#forecast-tabs"),n=document.querySelector("#city-search"),r=document.querySelector("#search-btn");if(t&&(t.onclick=it),e&&i&&(e.onclick=()=>{u=g("imperial",u)},i.onclick=()=>{u=g("metric",u)}),o)for(const c of o.children)c.onclick=tt;n&&(n.onkeypress=async c=>{c.key==="Enter"&&await b()}),r&&(r.onclick=b)}async function b(){const e=document.querySelector("#city-search").value.trim();if(e){S();try{const i=await v(e);H(i),f()}catch{h(`Couldn't find "${e}"`)}finally{L()}}}async function it(){if(!navigator.geolocation){h("Geolocation not supported");return}const t=document.querySelector("#location-btn");t.innerHTML='<span class="text-white">Getting location...</span>',t.disabled=!0;const e=()=>{t.innerHTML='<i data-lucide="map-pin" class="text-white"></i>',t.disabled=!1,m()};navigator.geolocation.getCurrentPosition(async i=>{try{S();const{latitude:o,longitude:n}=i.coords,r=await v(`${o},${n}`);H(r),f()}catch{h("Failed to get weather")}finally{L(),e()}},i=>{const o=i.code===i.PERMISSION_DENIED?"Location access denied":"Couldn't get location";h(o),e()})}et();
