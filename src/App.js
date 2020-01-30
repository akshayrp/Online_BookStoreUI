import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import DashBoard from "./Components/DashBoard";
import CustomerDetails from "./Components/CustomerDetails";
import CartBookDetails from "./Components/CartBookDetails";
import ToolBar from "./Components/ToolBar";
import GreetingOnConfirmPage from "./Components/GreetingOnConfirmPage";
import UserLogin from "./Components/UserLogin";
import listOfBooks from "./Components/listOfBooks";

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
                        <Route path="/Cart" component={CartBookDetails} exact={true}/>
                        <Route path="/checkout" component={GreetingOnConfirmPage} exact={true}/>
                        <Route path="/listOfBooks" component={listOfBooks} exact={true}/>
                        <Route path="/login" component={UserLogin} exact={true}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

