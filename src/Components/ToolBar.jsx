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
    }

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
                    <Typography style={{color: "white",marginLeft: '45%'}}>
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
