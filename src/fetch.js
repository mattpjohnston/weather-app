export default async function getWeather(place) {
  const apiKey = "BCDZFB48HWA3ZG49JXGMETLUW";
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(place)}?unitGroup=metric&key=${apiKey}&contentType=json&iconSet=icons2`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }
  return response.json();
}
