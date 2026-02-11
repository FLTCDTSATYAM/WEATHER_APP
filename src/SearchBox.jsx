import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from 'react';
import InfoBox from './InfoBox';

export default function SearchBox({updateInfo}){
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const API_URL = 'http://api.openweathermap.org/data/2.5/weather';
    const API_KEY = 'd9e23250b433f957f29ad35fb341bfa7';
    
    let getWeatherInfo = async ()=>{
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();

            let result = {
                city: city,
                feelsLike: jsonResponse.main.feels_like,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                weather: jsonResponse.weather[0].description
            }
            return result;
        } catch (error) {
            throw error;
        }
    }
    function handleSubmit(event){
        setCity(event.target.value);
    }
    let handleChange = async (event)=>{
        try{
            setError(false);
            event.preventDefault();
            console.log(city);
            setCity("");
            let info = await getWeatherInfo();
            updateInfo(info);
        }
        catch(error)
        {
            setError(true);
        }
    }
    return(
        <div>
            <h3>Search for the weather</h3>
            <form>
                <TextField id="outlined-basic" color="secondary" label="City name" variant="outlined" required value={city} onChange={handleSubmit} /><br></br>
                <Button id='button' onClick={handleChange} variant="contained" color="success" type='submit'>Search</Button>
                {error ? <p style={{color: 'red'}}>No such data found in API</p> : null} 
            </form>
        </div>
    );
}