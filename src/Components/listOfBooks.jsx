import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import {Container} from "@material-ui/core";
import "../CSS/listOfBooks.css"
import Button from "@material-ui/core/Button";
import {withRouter} from 'react-router-dom';
import "../App";
import {blue} from "@material-ui/core/colors";
import ls from 'local-storage';
 class SimpleCard extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {loading: true, listOfBooks: [], bookCart: ls.get('bookCart') || [],text: "Add To Cart"}
    }

    addToCart(selectedItem) {
        let books = this.state.bookCart;
        books.push(selectedItem)
        this.setState({bookCart: books})
        ls.set('bookCart',books)
        console.log(this.state.bookCart);
    };

    async componentDidMount() {
        const url = "http://192.168.0.106:8080/TallTalesBooks/list";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({listOfBooks: data, loading: false/*,bookCart:ls.get('bookCart')||[]*/});
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
                <div className="tooltip">
                    <span className={"tooltiptext"}><h4>Book Details</h4>
                        <div className={"bookDetails"}>{item.description}
                        </div>
                    </span>
                    <Card elevation={3}
                          style={{
                              height: '22vmax',
                              width: '16vw',
                              display: "block",
                              verticalAlign: 'middle',
                              marginTop: "15%"
                          }} className={"card"}>

                        <div className={"imageBackGround"}>
                            <img className={"cardImage"}
                                 src={item.image}/>
                        </div>
                        <div className={"BookData"}>
                            <div className={"bookName"}>{item.bookName}</div>
                            <div className={"authorName"}>{item.authorName}</div>
                            <div className={"bookPrice"}>Rs.{item.price}</div>
                            <div>
                                {
                                    this.state.bookCart.filter(book => book.bookId === item.bookId)
                                        .length === 1 ?
                                        <Button className={"cartButton"} id={"cartButton"+item.bookId} style={{
                                            backgroundColor: "#3371B5",
                                            color: "white",
                                            marginLeft: "20%",
                                            marginTop: "7%"
                                        }} >ADDED TO CART</Button>
                                        :
                                        <Button className={"cartButton"} id={"cartButton"+item.bookId} value="ADD TO CART" style={{
                                            backgroundColor: "#A03037",
                                            color: "white",
                                            marginLeft: "20%",
                                            marginTop: "7%"
                                        }} onClick={() => {
                                            this.addToCart(item)
                                        }}> {text}
                                        </Button>
                                }
                            </div>
                        </div>
                    </Card>
                </div>

            )
        });

        return (
            <Container className={'listContainer'} style={{marginBottom: "3%"}} >
                {Books}
            </Container>

        )
    }
}

export default withRouter(SimpleCard);



