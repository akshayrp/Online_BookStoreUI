import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import DenseAppBar from "./BottomBar";
import PrimarySearchAppBar from "./TopToolBar";
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
        console.log(ls.get('bookCart'))
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