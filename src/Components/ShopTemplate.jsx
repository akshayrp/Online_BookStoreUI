import React from 'react';
import PrimarySearchAppBar from "./TopToolBar";
import DenseAppBar from "./BottomBar";
import FormPropsTextFields from "./CustomerDetails"

export default function renderTemplates() {
    return (
        <div>
            <PrimarySearchAppBar/>
            <FormPropsTextFields/>
            <DenseAppBar/ >
        </div>
    )
}