import { useEffect, useState } from "react";
import "./App.css";
import WeatherContainer from "./components/WeatherContainer";

function App() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const success = ({ coords }) => {
      fetch(`/api/weather?lat=${coords.latitude}&lon=${coords.longitude}`)
        .then((res) => {
          if (!res.ok) throw new Error(`Respuesta ${res.status}`);
          return res.json();
        })
        .then(setWeather)
        .catch(() => setError("No se pudo obtener el clima. Intenta de nuevo más tarde."));
    };
    const failure = () =>
      setError("Necesito tu ubicación para mostrar el clima. Actívala en el navegador y recarga la página.");

    navigator.geolocation.getCurrentPosition(success, failure);
  }, []);

  const weatherBg = {
    "01d" : "/f1.jpg",
    "01n" : "/f1.jpg",
    "04d" : "/f5.jpg",
    "04n" : "/f5.jpg",
    "02n" : "/f3.jpg",
    "02d" : "/f3.jpg",
    "03n" : "/f2.jpg",
    "03d" : "/f2.jpg",
    "09d" : "/f6.jpg",
    "09n" : "/f6.jpg",
    "10d" : "/f6.jpg",
    "10n" : "/f6.jpg",
    "11d" : "/f9.jpg",
    "11n" : "/f9.jpg",
    "50d" : "/f4.jpg",
    "50n" : "/f4.jpg",
    "13d" : "/f7.jpg",
    "13n" : "/f7.jpg",


  }
  return (
    <main className='font-["Lato"] flex justify-center items-center min-h-screen bg-black text-white px-2' style={{
      
      backgroundImage: `url(${weatherBg[weather?.weather[0].icon]})`,
      
    }}>
      {error ? (
        <p role="alert" className="text-center text-lg max-w-md">{error}</p>
      ) : weather == null ? (
        <div className="loader">
          <img src="/animation.gif" alt="Cargando" />
        </div>
      ) : (
        <WeatherContainer weather={weather} />
      )}
    </main>
  );
}

export default App;
