import React from 'react';
import PrimarySearchAppBar from "./TopToolBar";
import DenseAppBar from "./BottomBar";
import CustomerDetails from "./CustomerDetails"

export default function renderTemplates() {
    return (
        <div>
            <PrimarySearchAppBar/>
            <CustomerDetails/>
            <DenseAppBar/>
        </div>
    )
}