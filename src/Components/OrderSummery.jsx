import {Link, withRouter} from "react-router-dom";
import React, {Component} from "react";
import "../CSS/CartBookDetails.css"
import {Typography} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Button from "@material-ui/core/Button";
import ToolBar from "./ToolBar";
import DenseAppBar from "./BottomBar";

class OrderSummery extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            book:[]
        }
        console.log("in Order")
    }

    async componentDidMount() {
        let  data = JSON.parse(localStorage.getItem('bookCart'))
        await this.setState({book: data});
    };

    render() {
        var Books = this.state.book.map((item, i) => {
            return (
                <div>
                    <Card className={"bookData"} elevation={1}>
                        <img className={"image"}
                             src={item.image}/>
                    </Card>
                    <div className={"BookDetails"}>
                        <Typography className={"bookName"}>{item.bookName}</Typography>
                        <Typography className={"authorName"}>{item.authorName}</Typography>
                        <Typography className={"bookPrice"}>Rs. {item.price}</Typography>
                    </div>
                </div>

            )
        });
        return (<div>
                <ToolBar/>
                <div style={{overflow: 'scroll', overflowX: "hidden"}} className="main">
                    <div className={"myCart"}>
                        My Cart ({Books.length})
                    </div>
                    {Books}
                    <Button style={{
                        backgroundColor: "rgb(51, 113, 181)",
                        color: "white",
                        marginLeft: "85%",
                        marginTop: "1%",
                        width: "13%",
                        height: "5vh",
                    }}  aria-controls="panel1a-content"
                            id="panel1a-header" onClick={this.props.history.push("/OrderConfirmation")}>CHECKOUT</Button>
                </div>
                <DenseAppBar/>
            </div>
        )
    }
}
export default withRouter(OrderSummery);