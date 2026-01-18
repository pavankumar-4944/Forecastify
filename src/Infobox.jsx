import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import "./Infobox.css";
export default function Infobox({info}){
   const HOT_URL="https://images.unsplash.com/photo-1604228741406-3faa38f4907a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3Vubnl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600";
   const COLD_URL="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600";
   const RAIN_URL="https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=sw_CRZcGopaGHDWqtT1M8y64k5uCcq-nro55Bw3YzyQ=";
    const cityname=info.city.slice(0,1).toUpperCase()+info.city.slice(1);
    return(  //"https://plus.unsplash.com/premium_photo-1729600377083-bbe558d8b7a6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600"
        <div className="infobox">
           <div className='cardcontainer' >
            <Card sx={{ maxWidth: 345 }}>
          <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
        title="green iguana"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {cityname}  {info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 15 ? <SunnyIcon/> :  <AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" component="div" sx={{ color: 'black' }}>
         <div>
            Temperature = {info.temp}&deg;C 
         </div>
         <div>
            Humidity = {info.humidity} 
         </div>
         <div>
            Min Temp = {info.tempMin}
         </div>
         <div>
            Max Temp = {info.tempMax}
         </div>
         <div>
            The weather can be described as <i>{info.weather}</i> and feels like {info.feelslike}&deg;C
         </div>
       
        </Typography>
      </CardContent>
    </Card>
        </div>
        </div>
    )
}