/* global process */
const API_URL = "https://api.openweathermap.org/data/2.5/weather";

const isValid = (value, limit) => Number.isFinite(value) && Math.abs(value) <= limit;

// La clave vive solo en el servidor: el navegador nunca la recibe.
export default async function handler(req, res) {
  const apiKey = process.env.OPENWEATHER_API_KEY;
  const lat = Number(req.query.lat);
  const lon = Number(req.query.lon);

  if (!apiKey) {
    return res.status(500).json({ message: "Falta configurar OPENWEATHER_API_KEY" });
  }
  if (!req.query.lat || !req.query.lon || !isValid(lat, 90) || !isValid(lon, 180)) {
    return res.status(400).json({ message: "Coordenadas no válidas" });
  }

  try {
    const params = new URLSearchParams({ lat, lon, appid: apiKey });
    const response = await fetch(`${API_URL}?${params}`);
    if (!response.ok) {
      return res.status(502).json({ message: "OpenWeather rechazó la consulta" });
    }
    return res.status(200).json(await response.json());
  } catch {
    return res.status(502).json({ message: "No se pudo conectar con OpenWeather" });
  }
}
