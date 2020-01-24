
import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import DashBoard from "./Components/DashBoard";
import CustomerDetails from "./Components/CustomerDetails";
import Cart from "./Components/Cart";
import ToolBar from "./Components/ToolBar";

require('dotenv').config()

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <BrowserRouter>
                <div>
<Switch>
                        <Route path="/" component={DashBoard} exact={true}/>
                        <Route path="/Cart" component={Cart} exact={true}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

