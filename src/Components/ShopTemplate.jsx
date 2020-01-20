import React, {Component} from 'react';
import PrimarySearchAppBar from "./TopToolBar";

import DenseAppBar from "./BottomBar";
import CustomerDetails from "./CustomerDetails"
import SimpleCard from "./listOfBooks";

export default function renderTemplates() {
    return (
        <div>
            <PrimarySearchAppBar/>
            <CustomerDetails/>
            <DenseAppBar/>
            {/*<SimpleCard/>*/}
        </div>
    )
}

