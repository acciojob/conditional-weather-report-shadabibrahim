import React from "react";

function WeatherDisplay({ temperature, condition }) {
    console.log(temperature)
    console.log(condition)

    return (
        <div>
           <p> Temperature: <span style={{ color: temperature > 20 ? 'red' : 'blue' }}>{temperature} °C</span></p>
            <p>Condition: {condition}</p>

        </div>
    )
}
export default WeatherDisplay;