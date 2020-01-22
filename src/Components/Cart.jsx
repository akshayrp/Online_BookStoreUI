import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class Cart extends Component{

    constructor(props) {
        super(props);
       /* this.state={
            title:'',
            author:'',
            price:'',
            quantity:'',
            item:null,
        }*/
    }

    render() {
        return(
            <div>
                <button className={"checkoutButton"}>
                    PROCEED
                </button>
            </div>
        )
    }
}
export default withRouter(Cart);