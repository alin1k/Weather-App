import React, { useState } from "react";
import getCity from "../api/index.js";

function Form(props){
    const {setCities} = props;

    const [city, setCity] = useState("");

    return(
        <div className="p-5 container-fluid">
            <div className="input-group w-sm-25 mx-auto">
                <input className="form-control" type="text" name="cityName" id="city" placeholder="City name" autoComplete="off" value={city} onChange={(event)=>setCity(event.target.value)} />
                <button 
                    className="btn btn-dark" 
                    onClick={()=>{
                        getCity(city, setCities);
                        setCity("");
                }}>Add</button>
            </div>
        </div> 
    )
}

export default Form;