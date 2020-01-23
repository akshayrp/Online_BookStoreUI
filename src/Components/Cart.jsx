import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import DenseAppBar from "./BottomBar";
import PrimarySearchAppBar from "./TopToolBar";
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
                <PrimarySearchAppBar/>
                <div>
                <button className={"checkoutButton"}>
                    PROCEED
                </button>
                </div>
                <DenseAppBar/>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
            </div>
        )
    }
}
export default withRouter(Cart);