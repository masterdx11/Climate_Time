import { useState } from "react";
import WeatherStat from "./WeatherStat";

const WatherContainer = ({ weather }) => {

  const [isCelsius, setIsCelsius] = useState(true)

  const changeUnitTemp = (temp) => {
    if(isCelsius){
      const celsiusTemp = (temp - 273.15).toFixed(1)
      return `${celsiusTemp}°C`
    }else{
      const fahrenheitTemp = (((temp -273.15) * 9/5) + 32).toFixed(1)
      return `${fahrenheitTemp}°F`
    }
  }

  const weatherIcons = {
    "04n": "/cloudsbroken.png",
    "04d": "/cloudsbroken.png",
    "01d" : "/clear.png",
    "01n" : "/clear.png",
    "02n" : "/few.png",
    "02d" : "/few.png",
    "03n" : "/scattered.png",
    "03d" : "/scattered.png",
    "09d" : "/shower.png",
    "09n" : "/shower.png",
    "10d" : "/rain.png",
    "10n" : "/rain.png",
    "11d" : "/thunderstorm.png",
    "11n" : "/thunderstorm.png",
    "50d" : "/mist.png",
    "50n" : "/mist.png",
    "13d" : "/snow.png",
    "13n" : "/snow.png",
  }

  const handleChangeUnit = () => {
    setIsCelsius(!isCelsius)
  }

  console.log(changeUnitTemp(weather.main.temp))
  console.log(weather);

  return (
    <section
      className="text-center gap-5 grid"
    
    >
      <h3 className="text-xl font-semibold">{weather.name}, {weather.sys.country}</h3>

      <div className="grid gap-5 sm:grid-cols-[1fr_auto]">
        {/* seccion superior */}
        <article className="bg-slate-500/50 rounded-2xl grid grid-cols-2 items-center p-3">
          <h4 className="col-span-2 text-lg capitalize">{weather.weather[0].description}</h4>
          <span className="text-5xl">{changeUnitTemp(weather.main.temp)}</span>
          <picture>
            <img src={weatherIcons[weather.weather[0].icon]} alt="" />
          </picture>
        </article>
        {/* seccion inferior */}
        <article className="grid grid-cols-3 justify-items-center bg-slate-500/50 rounded-2xl p-2 py-3 sm:grid-cols-1">
          <WeatherStat icon="/viento.png" unit="m/s" value={weather.wind.speed} />
          <WeatherStat icon="/humedad.png" unit="%" value={weather.main.humidity} />
          <WeatherStat icon="/presion.png" unit="hPa" value={weather.main.pressure}/>
        </article>
      </div>

      <button
        onClick={handleChangeUnit}
        className="bg-blue-500 bg-opacity-50 rounded-2xl px-4 py-2 text-white text-center text-base font-bold font-lato max-w-max mx-auto"
      >
        Cambiar a F° / C°
      </button>
    </section>
  );
};

export default WatherContainer;
