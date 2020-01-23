import React, {Component} from 'react';
import PrimarySearchAppBar from "./TopToolBar";
import DenseAppBar from "./BottomBar";
import SimpleCard from "./listOfBooks";
import SampleToolBar from "./SampleToolBar";
import CustomerDetails from "./CustomerDetails";
import Register from "./sampleFormValidation";
import Temp from "./Temp";
import Duplicate from "./duplicate";
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

