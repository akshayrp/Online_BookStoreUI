import React, {Component} from 'react';
import '../CSS/ToolBar.css';
import InputBase from '@material-ui/core/InputBase';
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import MenuBookIcon from "@material-ui/icons/MenuBook";
import {Badge, Icon} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {Link, withRouter} from "react-router-dom";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import "../App";


class ToolBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            badgeContent: 0
        }
    }


    async componentDidMount() {
        if (this.state.badgeContent < localStorage.getItem("bookCart").length) {
            await this.setState({badgeContent: JSON.parse(localStorage.getItem("bookCart")).length}
            )
        }
    }

    handleSearch = (event) => {
        if (event.target.value.length >= 1) {
            this.setState({searchValue: event.target.value});
        }
    }

    goToCart(){
        this.props.history.push("/Cart")
        /*if(this.props.clickCounter > 0 )
        {

        }*/
    }

    // handleSearchBook = () => {
    //     let searchDataValue = this.state.searchValue
    //     new getAllBooksService().searchService(searchDataValue).then((data) => {
    //         if (data.data.result.length > 0)
    //             this.setState({ getBooks: data.data.result });
    //
    //     }).catch((err) => {
    //         console.log(err);
    //     })
    // }


    render() {
        return <div className='main1'>
            <div className='upper'>
                <div className='dashboard'>
                    <Icon className={"icon"}
                          edge="start"
                          color="inherit">
                        <MenuBookIcon/>
                    </Icon>
                    <Typography className={"title"} variant="h6" noWrap>
                        TallTales Books
                    </Typography>
                    <div className="search">
                        <InputBase
                            type="search"
                            placeholder="Search Books…"
                            onChange={this.handleSearch}
                            onKeyDown={this.handleSearchBook}
                            startAdornment={(
                                <InputAdornment position="start">
                                    <IconButton>
                                        <SearchIcon/>
                                    </IconButton>
                                </InputAdornment>
                            )}
                        />
                    </div>
                    <Typography style={{color: "white"}}>
                        Cart
                    </Typography>
                    <Link to={"/Cart"}>
                        <IconButton arial-label={"add to shopping cart"}>
                                <AddShoppingCartIcon style={{color: "white"}}/>
                        </IconButton>
                    </Link>
                </div>
            </div>
        </div>


    }

}

export default withRouter(ToolBar);
