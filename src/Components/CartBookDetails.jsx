import {Link, withRouter} from "react-router-dom";
import React, {Component} from "react";
import "../CSS/CartBookDetails.css"
import {Typography} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Button from "@material-ui/core/Button";
import ToolBar from "./ToolBar";
import DenseAppBar from "./BottomBar";
import CustomerDetails from "./CustomerDetails";

class CartBookDetails extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            books:[],
            displayDetails:false,
            selectedBooks:[]
        }
        this.getDetails= this.getDetails.bind(this)
        this.handleChange=this.handleChange.bind(this);
        this.calculateTotalPrice=this.calculateTotalPrice.bind(this);
    }

    async componentDidMount() {
      let  data = JSON.parse(localStorage.getItem('bookCart'))
        await this.setState({books: data, totalAmount:0})
        this.state.selectedBooks = data
      this.state.selectedBooks.map(book => book.quantity = 1);

    };


    removeItem(i) {
        let updatedCart = this.state.books
        updatedCart.splice(i, 1)
        this.setState({books: updatedCart})
        localStorage.clear()
       localStorage.setItem('bookCart', this.state.books)
    }

    getDetails() {
        if(this.state.books.length > 0) {
            this.setState({displayDetails: true})
        }
    }

    handleChange(event){
        this.state.selectedBooks.filter(function(item){
            let num=Number(item.bookId);
            if(num == event.target.id){
                item.quantity = event.target.value;
            };
        });
        this.calculateTotalPrice(this.state.selectedBooks)
    }


    calculateTotalPrice(selectedBooks){
        let amount = 0;
        this.state.totalAmount = selectedBooks.map( book => {
            amount += book.price*book.quantity})
        this.setState({totalAmount: amount})
    }


    render() {
        var Books = this.state.books.map((item, i) => {
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
                            <input id={item.bookId} className={"quantityButton.plusMinus"} name="quantity" type="number" defaultValue={1} min="1"
                                   max={item.quantity} onChange={this.handleChange}/>
                            <Link className={"RemoveButton"} onClick={() => this.removeItem(i)}>
                                <Typography>Remove</Typography>
                            </Link>
                        </div>
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
                    id="panel1a-header" onClick={() => this.getDetails()}>Proceed</Button>
            </div>
                {this.state.displayDetails ? <CustomerDetails totalAmount={this.state.totalAmount}/> :
                <div>
                    <div className={"CustomerDetails"}>
                   <div className={"HeadText"}>Customer Details</div>
                </div>
                    <div className={"CustomerDetails"}>
                    <div className={"HeadText"}>Order Summary</div>
                    </div>
                </div>
                }
                <DenseAppBar/>
            </div>
        )
    }
}



export default withRouter(CartBookDetails)