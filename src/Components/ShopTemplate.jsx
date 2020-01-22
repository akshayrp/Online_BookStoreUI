import React, {Component} from 'react';
import PrimarySearchAppBar from "./TopToolBar";

import DenseAppBar from "./BottomBar";
import CustomerDetails from "./CustomerDetails"
import SimpleCard from "./listOfBooks";
import cart from "./CartPage"

export default class renderTemplates extends  Component{
   render(){
        return (
            <div>
                <PrimarySearchAppBar/>
                <SimpleCard/>
                </div>
        )
    }
}

