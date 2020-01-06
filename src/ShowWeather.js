import React from "react"
import weatherImage from "./w5.gif"

export default class ShowWeather extends React.Component{

    render(){
        return (
            <div>
                {this.props.isLoaded && (
                    <div className="content">
                        <div className="location">
                            {this.props.isLoaded && this.props.weather.observations.location[0].city}&nbsp;
                            {this.props.isLoaded && this.props.weather.observations.location[0].state}&nbsp;
                            {this.props.isLoaded && this.props.weather.observations.location[0].country}
                        </div>
                        <div>
                            <span className="wdesc">{this.props.isLoaded && this.props.weather.observations.location[0].observation[0].description}</span>

                        </div>
                        <div >
                            <span className="temp">{this.props.isLoaded && Math.round(this.props.weather.observations.location[0].observation[0].temperature)}&deg;C</span><br/>
                            <div className="weather-stats">
                                latitude:
                                <span>
                                    {this.props.isLoaded && this.props.weather.observations.location[0].latitude}
                                </span><br/>
                                longitude:
                                <span>
                                    {this.props.isLoaded && this.props.weather.observations.location[0].longitude}
                                </span><br/>
                                Humidity:
                                <span>{this.props.isLoaded && Math.round(this.props.weather.observations.location[0].observation[0].humidity)}</span>
                                <br/>
                            </div>
                        </div>
                        <div>
                            <img
                                src={weatherImage}
                                alt="weather"
                                height={100}
                                width={250}
                                />
                        </div>
                    </div>
                )}
            </div>
        )
    }
}