import React, {Component} from 'react';
import PrimarySearchAppBar from "./TopToolBar";
import SimpleCard from "./listOfBooks";
import CustomerDetails from "./CustomerDetails";
import BottomBar from "./BottomBar";

export default class DashBoard extends  Component{

    constructor(props, context) {
        super(props, context);
    }

    render(){
        return (
            <div>
                <PrimarySearchAppBar/>
                <SimpleCard/>
                <BottomBar/>
            </div>
        )
    }
}