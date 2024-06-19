import React from "react";

function WeatherDisplay({ temperature, condition }) {
    console.log(temperature)
    console.log(condition)

    return (
        <div>
           <p> <span style={{ color: temperature > 20 ? 'red' : 'blue' }}>Temperature: {temperature} °C</span></p>
            <p><span>Condition: {condition}</span></p>

        </div>
    )
}
export default WeatherDisplay;