import React from "react";

function WeatherDisplay({ temperature, condition }) {
    console.log(temperature)
    console.log(condition)

    return (
        <div>
            <p style={{ color: temperature > 20 ? 'red' : 'blue' }}>Temperature: {temperature} °C</p>
            <p>Condition: {condition}</p>

        </div>
    )
}
export default WeatherDisplay;