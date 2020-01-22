import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class Cart extends Component{

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <button className={"checkoutButton"}>
                    CHECKOUT
                </button>
            </div>
        )
    }
}
export default withRouter(Cart);