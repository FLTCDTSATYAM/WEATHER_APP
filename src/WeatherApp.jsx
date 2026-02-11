import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import {useState} from "react";

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        city: "WonderLand",
        feelsLike: 24.84,
        temp: 15.05,
        tempMin: 15.05,
        tempMax: 15.05,
        humidity: 72,
        weather: "haze"
    });
    let updateInfo = (result)=>{
        setWeatherInfo(result);
    }
    return(
        <div>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox Info={weatherInfo}/>
        </div>
    );
}