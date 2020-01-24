import React, {Component} from 'react';
import PrimarySearchAppBar from "./toolBar";
import DenseAppBar from "./BottomBar";
import SimpleCard from "./listOfBooks";

export default class DashBoard extends  Component{

    constructor(props, context) {
        super(props, context);
    }
    render(){
        return (
            <div>
                <PrimarySearchAppBar/>
                <SimpleCard/>
               <DenseAppBar/>
            </div>
        )
    }
}

