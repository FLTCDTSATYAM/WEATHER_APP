import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({Info}){
    const INIT_URL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrInlbZZWJqumm7xpdYToK43yvquW3nkqZXw&s';

    const HOT_URL = 'https://plus.unsplash.com/premium_photo-1667076649924-d784d205cbba?q=80&w=775&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    const COLD_URL = 'https://plus.unsplash.com/premium_photo-1670493556860-13e006e6faa4?q=80&w=397&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    const RAIN_URL = 'https://images.unsplash.com/photo-1503435824048-a799a3a84bf7?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

    return(
        <div>
            <h2>Weather Info</h2>
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={Info.humidity < 80 ? (Info.temp > 30 ? HOT_URL : COLD_URL) : RAIN_URL}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {Info.city} {Info.humidity < 80 ? (Info.temp > 30 ? <SunnyIcon/> : <AcUnitIcon/>) : <ThunderstormIcon/>}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    <p>Temperature = {Info.temp}&deg;C</p>
                    <p>Weather = {Info.weather}</p>
                    <p>Humidity = {Info.humidity}</p>
                    <p>Minimum Temperature = {Info.tempMin}&deg;C</p>
                    <p>Maximum Temperature = {Info.tempMax}&deg;C</p>
                    <p>The weather feels like {Info.feelsLike}&deg;C</p>
                </Typography>
            </CardContent>
            </Card>
        </div>
    );
}