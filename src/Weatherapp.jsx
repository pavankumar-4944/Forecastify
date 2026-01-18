import "./Searchbox";
import "./Infobox";
import { useState } from "react";
import Searchbox from "./Searchbox";
import Infobox from "./Infobox";
export default function Weatherapp(){
    const [weatherinfo,setWeatherinfo] = useState({
        city:"Nandyal",
        feelslike:24.84,
        temp:25.05,
        tempMin:25.05,
        tempMax:29.05,
        humidity:47, 
        weather:"broken clouds"
      
    });
    let updateInfo = (newinfo)=>{
        setWeatherinfo(newinfo);
    }
    return (
        <div style={{textAlign:"center" }}>
        <h1>Weather App</h1>
        <Searchbox updateInfo={updateInfo}/>
        <Infobox info={weatherinfo}/>

        </div>
    ) 
}