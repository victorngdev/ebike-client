import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/header/header.component";

import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import Footer from "./components/footer/footer.component";

class App extends React.Component {

    render() {
        return (
            <div className="App">
                <Header />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default App;