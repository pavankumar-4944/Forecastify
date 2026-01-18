import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState,useEffect } from 'react';
import "./Searchbox.css";
export default function Searchbox({updateInfo}){
   let [city,setCity] = useState("");
   let [error,setError] = useState(false) 
   const API_URL= "https://api.openweathermap.org/data/2.5/weather";//q={city name}&appid={API key};
   const API_KEY = "e145dba298d5f622b59523f50d3e3914";
   let getweatherInfo =  async  ()=>{
    try {
     let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
     let jsonResponse = await response.json();
     console.log(jsonResponse);
     let result = {
        city:city,
        temp:jsonResponse.main.temp,
        tempMin:jsonResponse.main.temp_min,
        tempMax:jsonResponse.main.temp_max,
        humidity:jsonResponse.main.humidity,
        feelslike:jsonResponse.main.feels_like,
        weather:jsonResponse.weather[0].description,
     };
     console.log(result);
     return result;
   }
   catch(err){
throw err;
   }
}

  
   let handleChange =  (event)=>{
        setCity(event.target.value);
   }

    let handleSubmit = async (event)=>{
        try{
           event.preventDefault();
        console.log(city); 
        setCity("");
        let newinfo = await getweatherInfo();
        updateInfo(newinfo);
        }
        catch(err){
           setError(true);
        }
   }
   useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError(false); 
      }, 2000); 

      return () => clearTimeout(timer); 
    }
  }, [error]);

    return (     //e145dba298d5f622b59523f50d3e3914
        <div className='searchbox'>
        <form onSubmit={handleSubmit}>
        <TextField id="city" label="City Name" variant="outlined" value={city} onChange={handleChange} required/>
         <br></br>
         <br></br>
         <Button variant="contained" type="submit" >
         Search
         </Button>
         {
          error && <div style={{color:"red",marginTop:"10px"}}>No such palce in our API</div>
         }
        
         </form>
        </div>
    );
}