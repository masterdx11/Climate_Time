# ClimaTime

Aplicación en React que muestra el clima de tu ubicación actual: ciudad, descripción, temperatura en °C o °F, viento, humedad y presión. El fondo y el icono cambian según el clima. Es un proyecto de formación.

**Demo:** https://climate-time.vercel.app

## Cómo está hecha

- **Frontend:** React 18, Vite y Tailwind CSS.
- **Backend:** una función de Vercel (`api/weather.js`) consulta OpenWeather. La clave vive solo en el servidor, así que el navegador nunca la recibe.
- **Errores:** la página avisa si niegas la ubicación o si no se puede obtener el clima.

## Cómo correrlo

1. Copia `.env.example` a `.env` y pon tu clave de [OpenWeather](https://home.openweathermap.org/api_keys).
2. Instala y arranca con la [CLI de Vercel](https://vercel.com/docs/cli), porque `npm run dev` solo sirve el frontend y no la función de `api/`:

```bash
npm install
vercel dev
```

Al publicar, configura `OPENWEATHER_API_KEY` en las variables de entorno del proyecto en Vercel.
