import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import DenseAppBar from "./BottomBar";
import PrimarySearchAppBar from "./TopToolBar";
import CartBookDetails from "./CartBookDetails";
import ls from 'local-storage';


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
        return (
            <div>
                <PrimarySearchAppBar/>
                <div style={{height:"85vh"}}>
                    <CartBookDetails/>
                </div>
                <DenseAppBar/>
            </div>
        )
    }
}

export default withRouter(Cart);