import React from "react";

function WeatherDisplay({ temperature, condition }) {
    console.log(temperature)
    console.log(condition)

    return (
        <div>
            <span style={{ color: temperature > 20 ? 'red' : 'blue' }}>Temperature: {temperature} °C</span>
            <span>Condition: {condition}</span>

        </div>
    )
}
export default WeatherDisplay;