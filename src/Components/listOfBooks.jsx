import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import {Container} from "@material-ui/core";
import "../CSS/listOfBooks.css"
import Button from "@material-ui/core/Button";
import {blue} from "@material-ui/core/colors";


export default class SimpleCard extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {loading: true, listOfBooks: [], bookCart: [],text: "Add To Cart"}
    }

    addToCart(selectedItem) {
        let bookCart = this.state.bookCart;
        bookCart.push(selectedItem)
        this.setState({bookCart: bookCart})
        console.log(this.state.bookCart);
    };

    async componentDidMount() {
        const url = "http://192.168.0.106:8080/TallTalesBooks/list";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({listOfBooks: data, loading: false});
    };


    render() {
        const { text } = this.state
        if (this.state.loading) {
            return <div>loading...</div>;
        }

        if (!this.state.listOfBooks) {
            return <div>didn't get any book</div>;
        }
        var Books = this.state.listOfBooks.map((item, i) => {
            return (

                (i + 1) % 6 === 0 ? <br/> :
                    <Card elevation={3}
                          style={{
                              height: '22vmax',
                              width: '16vw',
                              display: "table-cell",
                              verticalAlign: 'middle',
                              marginTop: "3%"
                          }}>
                        <div className={"imageBackGround"}>
                            <img className={"cardImage"}
                                 src={item.image}/></div>
                        <div className={"BookData"}>
                            <div className={"bookName"}>{item.bookName}</div>
                            <div className={"authorName"}>{item.authorName}</div>
                            <div className={"bookPrice"}>Rs.{item.price}</div>
                            <div className={""}>
                                <div className={"bookQuantity"}>Available:{item.quantity}
                                </div>

                                <div id={"quantityButton"} className={"quantityButton"}>Qty :
                                    <input className={"quantityButton.plusMinus"} type="number" defaultValue={1} min="1"
                                           max={item.quantity}/>
                                </div>

                            </div>
                            <div>
                                {
                                    this.state.bookCart.filter(book => book.bookId === item.bookId)
                                        .length === 1 ?
                                        <Button className={"cartButton"} id={"cartButton"+item.bookId} style={{
                                            backgroundColor: "blue",
                                            color: "white",
                                            marginLeft: "30%",
                                            marginTop: "7%"
                                        }} >ADDED TO CART</Button>
                                        :
                                        <Button className={"cartButton"} id={"cartButton"+item.bookId} value="ADD TO CART" style={{
                                            backgroundColor: "#A03037",
                                            color: "white",
                                            marginLeft: "30%",
                                            marginTop: "7%"
                                        }} onClick={() => {
                                            this.addToCart(item)
                                        }}> {text}
                                        </Button>
                                }

                            </div>
                        </div>
                    </Card>
            )
        });
        return (
            <Container className={'listContainer'}>
                {Books}
            </Container>
        )
    }
}



