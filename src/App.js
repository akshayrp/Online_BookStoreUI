
import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import DashBoard from "./Components/DashBoard";
import CustomerDetails from "./Components/CustomerDetails";
import Cart from "./Components/Cart";

require('dotenv').config()

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <BrowserRouter>
                <div>
                    <switch>
                        <Route path="/" component={DashBoard} exact={true}/>
                        <Route path="/CustomerDetails" component={CustomerDetails} exact={true}/>
                        <Route path="/Cart" component={Cart} exact={true}/>
                    </switch>
                </div>
            </BrowserRouter>
        );
    }
}