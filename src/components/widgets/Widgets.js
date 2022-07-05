import React from "react";
import Widget from "./Widget.js";

function Widgets(props){
    const {cities, setCities} = props;
    
    return(
        <div id="cityCards" className="row container-fluid m-0 mt-5">
            {cities.map((city, index)=> <Widget key={index} index={index} city={city} setCities={setCities} />)}
        </div>
    )
}

export default Widgets;