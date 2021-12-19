import './App.scss';
import React from "react";
import Header from "./components/Header";
import Description from "./components/Description";
import store from "../src/redux/index"
import {Provider} from "react-redux";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Header/>
            </div>
        </Provider>
    );
}

export default App;
