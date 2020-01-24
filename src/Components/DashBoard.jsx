import React, {Component} from 'react';
import PrimarySearchAppBar from "./ToolBar";
import DenseAppBar from "./BottomBar";
import SimpleCard from "./listOfBooks";
import CustomerDetails from "./CustomerDetails";

export default class DashBoard extends  Component{

    constructor(props) {
        super(props);
        this.state = {
            clickCounter: 0
        }
        this.setCounter = this.setCounter.bind(this);
    }

    setCounter(count) {
        this.state.clickCounter = count
    }

    render(){
        return (
            <div>
                <PrimarySearchAppBar clickCounter={this.state.clickCounter}/>
                <SimpleCard setCounter={this.setCounter}/>
               <DenseAppBar/>
            </div>
        )
    }
}

