import {Link, withRouter} from "react-router-dom";
import React, {Component} from "react";
import "../CSS/CartBookDetails.css"
import ls from 'local-storage';
import {Typography} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Button from "@material-ui/core/Button";

class CartBookDetails extends Component {
    book;


    constructor(props, context) {
        super(props, context);
        this.state = {book: ls.get('bookCart') || 0}
    }

    removeItem(i) {
        let updatedCart = this.state.book
        updatedCart.splice(i, 1)
        console.log(updatedCart)
        this.setState({book: updatedCart})
        ls.set('bookCart', this.book)
    }


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
                        <Typography className={"quantity"}>Available Quantity : {item.quantity}</Typography>
                        <div className={"quantityButton"}>Quantity:
                            <input className={"quantityButton.plusMinus"} type="number" defaultValue={1} min="1"
                                   max={item.quantity}/>
                            <Link className={"RemoveButton"} onClick={() => this.removeItem(i)}>
                                <Typography>Remove</Typography>
                            </Link>
                        </div>
                    </div>
                </div>

            )
        });
        return (<div style={{overflow: 'scroll', overflowX: "hidden"}} className="main">
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
                    id="panel1a-header">Proceed</Button>
            </div>

        )
    }
}

export default withRouter(CartBookDetails)