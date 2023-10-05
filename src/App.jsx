import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import WatherContainer from "./assets/components/WatherContainer";

function App() {
  const [weather, setWeather] = useState(null);

  const success = (pos) => {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
    const API_KEY = "8ee7e4420512fee53e4b80aa7352f204";

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
      )
      .then(({ data }) => setWeather(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
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
    "10d" : "/f6.png",
    "10n" : "/f6.png",
    "11d" : "/f9.jpg",
    "11n" : "/f9.jpg",
    "50d" : "/f4.jpg",
    "50n" : "/f4.jpg",
    "13d" : "/f7.png",
    "13n" : "/f7.png",


  }
  return (
    <main className='font-["Lato"] flex justify-center items-center min-h-screen bg-black text-white px-2' style={{
      
      backgroundImage: `url(${weatherBg[weather?.weather[0].icon]})`,
      
    }}>
      {weather == null ? (
        <div className="loader">
          <img src="/animation.gif" alt="Loading..." />
        </div>
      ) : (
        <WatherContainer weather={weather} />
      )}
    </main>
  );
}

export default App;
