import React, { Component, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Components/Header";
import StatusBar from "./Components/StatusBar";
import Customer from "./Components/Customer";
import Badges from "./Components/Badges";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <main>
            <Route path="/" exact component={Sales} />
            <Route path="/customers/" component={Customers} />
            <Route path="/badges" component={Badges} />
          </main>
        </div>
      </Router>
    );
  }
}
const Sales = () => {
  return (
    <>
      <StatusBar />
      <div className="container">
        <div className="screenshot">
          <img src="screenshot.png" />
        </div>
      </div>
    </>
  );
};

const Customers = () => {
  const [completionProgress, setCompletionProgress] = useState(1);

  return (
    <>
      <StatusBar completionProgress={completionProgress} link={false} />
      <Customer
        incrementCompletionProgress={() =>
          setCompletionProgress(completionProgress + 1)
        }
      />
    </>
  );
};

export default App;
