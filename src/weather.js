import React from 'react'

const Weather = (props) => {
    return (
        <div>
            {props.show && (
                <div>
                    <h4 className="cityname">Temprature in {props.name}</h4>
                    <p className="desc">{props.description}</p>
                    <h1 className="temp">{props.temp}&deg; C</h1>
                </div>
                )
            }
        </div>
    )
}

export default Weather