import React, {Component} from "react";
import hurrayImage from '../Assets/Order-placed-successfully.png';
import {Link, NavLink} from "react-router-dom";
import { withRouter} from "react-router-dom";
import "../CSS/GreetingOnConfirmPage.css"
import Button from "@material-ui/core/Button";



class GreetingOnConfirmPage extends Component{
    constructor(props) {
        super(props);
        this.confirmOrder = this.confirmOrder.bind(this)
    }

    confirmOrder(){
        localStorage.clear()
        this.props.history.push("/")
    }
    render() {
        console.log("this.props in final confirmation",this.props)
        return <div>
            <div className='subOrder'>
                <img className={'confirmOrderImage'} src={hurrayImage}  alt="Logo" />
                <div className='paragraph'>

                    <p style={{marginLeft: '27%'}}>Hurray!!!... Your order is confirmed.</p>
                    <p style={{marginLeft: '12%'}}>Your orderId is #{this.props.match.params} save the order id for further communication.</p>
                </div>
                <Button style={{
                    backgroundColor: "rgb(51, 113, 181)",
                    color: "white",
                    marginLeft: "33%",
                    marginTop: "9%",
                    width: "37%",
                    height: "5vh",
                }}  aria-controls="panel1a-content"
                        id="panel1a-header" onClick={this.confirmOrder}>CONTINUE SHOPPING</Button>
            </div>

        </div>
    }
}
export default withRouter(GreetingOnConfirmPage)