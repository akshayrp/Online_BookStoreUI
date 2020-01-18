import React from 'react';
import PrimarySearchAppBar from "./TopToolBar";
import DenseAppBar from "./BottomBar";

export default function renderTemplates() {
    return (
        <div>
            <PrimarySearchAppBar/>
            <DenseAppBar/>
        </div>
    )
}