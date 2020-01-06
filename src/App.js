import React from 'react';
import './App.css';
import GetWeather from "./GetWeather"
import { Row, Col } from "react-bootstrap"

function App() {
  return (
      <div className="App">
        <Row>
          <Col xs={11} sm={12} md={12} lg={12} >
            <h1 className="title">Weathery</h1>
            <h4 className="subtitle">
              Search your city, check the weather
            </h4>
            <GetWeather />
          </Col>
        </Row>
      </div>
  );
}

export default App;
