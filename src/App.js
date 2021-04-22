import React, { useEffect, useState } from "react";
import blackCircle from "./icons/blackCircle.svg";
import whiteCircle from "./icons/whiteCircle.svg";
import wifiTop from "./icons/wifiTop.svg";
import wifiMiddle from "./icons/wifiMiddle.svg";
import wifiBottom from "./icons/wifiBottom.svg";
import bluetooth from "./icons/bluetooth.svg";
import shape from "./icons/shape.svg";
import charge from "./icons/charge.svg";
import plus from "./icons/plus.svg";
import info from "./icons/info.svg";
import fire from "./icons/fire.svg";
import redCircle from "./icons/redCircle.svg";
import arrowTop from "./icons/arrowTop.svg";
import arrowBottom from "./icons/arrowBottom.svg";
import "./App.css";

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);
  const requestOptions = {
    method: "POST",
    headers: {
      accept: "application/json",
      AccessKey: "891cf53c-01fc-4d74-a14c-592668b7a03c",
      "Content-Type": "application/json-patch+json",
    },
    body: {
      "idClient": "2c44d8c2-c89a-472e-aab3-9a8a29142315",
      "accessToken": "",
      "paramName": "device",
      "paramValue": "7db72635-fd0a-46b9-813b-1627e3aa02ea",
      "latitude": 0,
      "longitude": 0,
      "sourceQuery": 0
    }
  };
  useEffect(() => {
    fetch(
      "http://localhost/api/v3/clients/accesstoken",
      requestOptions
    )
      .then(
        (result) => {
          setIsLoaded(true);
          setData(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return (
      <div className="App">
        <div className="StatusBar">
          <div className="Figma">
            <img alt='#' src={blackCircle} className="b_circle_1" />
            <img alt='#' src={blackCircle} className="b_circle_2" />
            <img alt='#' src={blackCircle} className="b_circle_3" />
            <img alt='#' src={whiteCircle} className="w_circle_1" />
            <img alt='#' src={whiteCircle} className="w_circle_2" />
            <div className="Figma__text">Figma</div>
            <img alt='#' src={wifiTop} className="wifi_top" />
            <img alt='#' src={wifiMiddle} className="wifi_mid" />
            <img alt='#' src={wifiBottom} className="wifi_bot" />
          </div>

          <div className="Time">9:42 AM</div>

          <div className="Battery">
            <img alt='#' src={bluetooth} className="bluetooth" />
            <div className="Battery__text">42%</div>
            <img alt='#' src={shape} className="shape" />
            <img alt='#' src={charge} className="charge" />
            <img alt='#' src={plus} className="plus" />
          </div>
        </div>

        <div className="Logo__text">ЛОГОТИП</div>
        <img alt='#' src={info} className="info" />

        <div className="RedBackground"></div>
        <div className="Bonuses">
          <div className="AllBonuses">300 бонусов</div>
          <div className="BurningDate">29.03 сгорит</div>
          <img alt='#' src={fire} className="fire" />
          <div className="BurningBonuses">250 бонусов</div>
          <div className="Bonuses__button">
            <img alt='#' src={redCircle} className="redCircle" />
            <img alt='#' src={arrowTop} className="arrowTop" />
            <img alt='#' src={arrowBottom} className="arrowBottom" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
