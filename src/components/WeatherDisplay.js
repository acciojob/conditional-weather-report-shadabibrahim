import React from "react";

function WeatherDisplay({ temperature, condition }) {
    console.log(temperature)
    console.log(condition)
    temperature =25;
    condition= "Sunny";

    return (
        <div>
           <p>Temperature: <span style={{ color: temperature > 20 ? 'red' : 'blue' }}>{temperature}</span></p>
            <p>Conditions: {condition}</p>

        </div>
    )
}
export default WeatherDisplay;