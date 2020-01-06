import React from "react"
import { Form, Button } from "react-bootstrap"
import axios from "axios"
import ShowWeather from "./ShowWeather"

export default class GetWeather extends React.Component{
    state={
        enteredCity: "",
        validated: false,
        weather: {},
        isLoaded : false,
        msg: "",
        errMsg: ""
    }

    handleInputCity = (e) => {
        const city = e.target.value
        this.setState({ enteredCity : city})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        !this.state.enteredCity ? this.setState({ validated : true, msg:"Please enter your city" }) :
        axios.get(`https://cors-anywhere.herokuapp.com/https://weather.ls.hereapi.com/weather/1.0/report.json?product=observation&name=${this.state.enteredCity}&apiKey=KBGrDdHVbVkIDvB0JW2gyzkWEJAVx4j0c-nZPCOmYu4`)
        .then(response => this.setState(() => ({ weather: response.data, isLoaded: true, errMsg: "" })))
        .catch(err => err.response.status === 400 ? this.setState({errMsg: "Invalid type: Please enter valid city"}): null)
    }

    render(){
        return (
            <div>
                <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
                    <Form.Group controlId="validationCustom03">
                        <Form.Control
                            type="text"
                            placeholder="search for the city"
                            name="city"
                            required
                            width="80%"
                            onChange={this.handleInputCity}
                            value={this.state.enteredCity}
                        />
                        <Form.Control.Feedback type="invalid" style={{ fontSize: 15}}>
                            {this.state.msg}
                        </Form.Control.Feedback>
                        <span style={{ color: "red"}}>{this.state.errMsg}</span>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Check Weather
                    </Button>
                </Form>
                <div>
                    <ShowWeather
                        weather={this.state.weather}
                        isLoaded={this.state.isLoaded}
                    />
                </div>
            </div>
        )
    }
}