import React, {Component} from "react";
import Typography from '@material-ui/core/Typography';
import "../CSS/Cart.css"
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import {withRouter} from 'react-router-dom';


class Cart extends Component {


    constructor(props) {
        super(props);
        this.state = {
            book: [],
            totalAmount : 0
        }
    }


    async componentDidMount() {
        let data = JSON.parse(localStorage.getItem('bookCart'))
        await this.setState({book: data,totalAmount : this.props.totalAmount});

    };

    handleClick = () => {
        this.props.history.push('/checkout')
    }

    render() {

        var Books = this.state.book.map((item, i) => {
            return (

                <Card className="userCard">
                    <div className="cart">
                        <div>
                            <img className="bookImages" src={item.image} style={{height: "17vh"}}/>
                        </div>
                        <div style={{marginLeft: '5%'}}>
                            <Typography className="cartTitle" style={{
                                fontSize: '14px',
                                fontFamily: 'Arial, Helvetica, sans-serif',
                                fontWeight: '450'
                            }}>{item.bookName}</Typography>
                            <Typography className="cartAuthor" style={{fontSize: '10px'}}>{item.authorName}</Typography>
                            <Typography className="cartPrice" style={{
                                fontSize: '14px',
                                fontFamily: 'Arial, Helvetica, sans-serif',
                                fontWeight: '600'
                            }}>Rs. {item.price}</Typography>
                        </div>
                    </div>
                </Card>
            )
        });
        return (<div>
                <div className={"DisplaySummary"}>
                    <div className={"summaryText"}>Order Summary</div>
                </div>
                {console.log(this.state.totalAmount)}
                {Books}
                <div>{this.state.totalAmount}</div>
                <div className="chekoutButton">
                    <Button variant="contained" color="primary" onClick={this.handleClick}>
                        Checkout
                    </Button>
                </div>

            </div>
        )
    }

}

export default withRouter(Cart);
