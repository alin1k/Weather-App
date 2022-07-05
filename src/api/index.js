import { toast } from "react-toastify";
import axios from "axios";

const API_KEY = process.env.API_KEY;

function getCity(cityName, setCities, index){

    const url = "https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid="+ API_KEY +"&units=metric";

    axios.get(url)
        .then(function (response) {
            const {data} = response;
    
            //round the temperature
            data.main.temp = Math.round(data.main.temp)
    
            //add a date + time to the city weather object
            const today = new Date();
            const hour = function(){ 
                const hr = today.getUTCHours() + (data.timezone/3600);
                return ((hr < 10) ? "0" + hr : hr);
            }
            const minutes = function() {
                return ((today.getMinutes() < 10) ? "0"+today.getMinutes() : today.getMinutes() );
            }
            data.time = hour() + ":" + minutes();
            data.day = today.toLocaleDateString("en-US", {weekday: "long"});
    
            //if the index is defined the array intem with that index gets updated
            //if it's undefined it gets added to the array
            if(index === undefined){
                //add new city to array
                setCities(prevValue => [...prevValue, data ]);
            }else{
                //replace an existing city in the array 
                setCities(prevValue =>
                    prevValue.map((value, i)=>{
                        if(i === index){
                            return data;
                        }

                        return value;
                    })
                );

                //display a toast informating the user that the city was updated
                toast.info(data.name + " was updated!", {autoClose: 1000})
            }
        })
        .catch(function (error) {
            //alert the user if the city was not found
            toast.error("Oh-oh, this city does not exist!");
        })
}

export default getCity;