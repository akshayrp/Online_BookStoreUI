import React, {Component} from 'react';
import PrimarySearchAppBar from "./ToolBar";
import DenseAppBar from "./BottomBar";
import SimpleCard from "./listOfBooks";


export default class DashBoard extends  Component{

    constructor(props) {
        super(props);
    }



    render(){
        return (
            <div>
                <PrimarySearchAppBar />
                <SimpleCard setCounter={this.setCounter}/>
               <DenseAppBar/>
            </div>
        )
    }
}

