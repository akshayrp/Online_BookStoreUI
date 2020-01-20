import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import {Container} from "@material-ui/core";
import "../CSS/listOfBooks.css"
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";


export default class SimpleCard extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {loading: true, listOfBooks: []};
    }


    async componentDidMount() {
        const url = "http://localhost:8080/TallTalesBooks/list";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({listOfBooks: data, loading: false});
    };


    render() {

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
                            <div className={"bookQuantity"}>Quantities:{item.quantity}</div>
                            {/* <NumericInput
                                className="form-control"
                                value={ 50 }
                                min={ 0 }
                                max={ 100 }
                                step={ 1 }
                                precision={ 0 }
                                size={ 5 }
                            /> */}
                            <div>
                                <Button style={{
                                    backgroundColor: "#A03037",
                                    color: "white",
                                    marginLeft: "30%",
                                    marginTop: "7%"
                                }}>
                                    BUY NOW
                                </Button>
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




