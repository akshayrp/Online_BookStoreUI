import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import DenseAppBar from "./BottomBar";
import PrimarySearchAppBar from "./TopToolBar";
class Cart extends Component{

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <PrimarySearchAppBar/>
                <div>
                <button className={"checkoutButton"}>
                    CHECKOUT
                </button>
                </div>
                <DenseAppBar/>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
            </div>
        )
    }
}
export default withRouter(Cart);