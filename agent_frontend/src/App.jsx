import React from "react";
import Header from "./components/Header";
import { Form } from "./components/Form";
import Button from "./components/Button";
import AirlineStatus from "./components/AirlineStatus";
import "./styles/main.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Form />
      {/* <Button /> */}
      <AirlineStatus
        response={{
          Delta: "SUCCESS",
          American: "SUCCESS",
          Alaska: "SUCCESS",
          JetBlue: "SUCCESS",
          United: "FAILURE",
          Frontier: "COMING SOON",
          Southwest: "COMING SOON",
        }}
        frequentFlyerNumbers={{
          Delta: "9382431279",
          American: "9k63ml4",
          Alaska: "314087233",
          JetBlue: "3671685813",
          United: "",
          Frontier: "",
          Southwest: "",
        }}
      />
    </div>
  );
};

export default App;
