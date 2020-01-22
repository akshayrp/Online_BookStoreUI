import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import {Container} from "@material-ui/core";
import "../CSS/listOfBooks.css"
import Button from "@material-ui/core/Button";
import {withRouter} from 'react-router-dom';
import "../App";

class SimpleCard extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {loading: true, listOfBooks: []};
    }


    async componentDidMount() {

        const url = "http://192.168.0.106:8080/TallTalesBooks/list";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({listOfBooks: data, loading: false});
    };

    whenClicked = () => {
        this.props.history.push("/CustomerDetails")
    }


    render() {
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
                            <div className={"Buttons"}>
                                <Button style={{
                                    backgroundColor: "#A03037",
                                    color: "white",
                                    marginLeft: "25%",
                                    marginTop: "7%",
                                    width: "52%",
                                    height: "3em",
                                    fontSize: "75%",
                                }} onClick={this.whenClicked}>
                                    ADD TO CART
                                </Button>
                            </div>
                        </div>
                    </Card>
                </div>

            )
        });

        return (
            <Container className={'listContainer'} style={{marginBottom: "3%"}}>
                {Books}
            </Container>

        )
    }
}

export default withRouter(SimpleCard);




