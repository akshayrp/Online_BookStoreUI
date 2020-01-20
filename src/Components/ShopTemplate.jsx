import React, {Component} from 'react';
import PrimarySearchAppBar from "./TopToolBar";
import SimpleCard from "./listOfBooks";
import CustomerDetails from "./CustomerDetails";
import BottomBar from "./BottomBar";

export default class renderTemplates extends  Component{
   render(){
        return (
            <div>
                <PrimarySearchAppBar/>
                <SimpleCard/>
               {/* <CustomerDetails/>
                <BottomBar/>*/}
            </div>
        )
    }
}