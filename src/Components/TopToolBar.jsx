import React from 'react';
import {fade, makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import {Icon} from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import {Link} from "react-router-dom";
import "../App";

const useStyles = makeStyles(theme => ({
    grow: {
        flexGrow: 1,
    },
    toolBar: {
        backgroundColor: "#A03037",
    },
    BookIcon: {
        marginRight: theme.spacing(2),
        marginLeft: "7%",
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: '45%',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));

export default function PrimarySearchAppBar() {

    const classes = useStyles();

    return (
        <div className={classes.grow}>
            <AppBar position="static" className={classes.toolBar}>
                <Toolbar>
                    <Icon
                        edge="start"
                        className={classes.BookIcon}
                        color="inherit">
                        <MenuBookIcon/>
                    </Icon>
                    <Typography className={classes.title} variant="h6" noWrap>
                        TallTales Books
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon/>
                        </div>
                        <InputBase
                            placeholder="Search Books…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{'aria-label': 'search'}}
                        />
                    </div>
                    <div>
                        Cart
                    </div>
                    <Link to={"/Cart"}>
                        <IconButton arial-label={"add to shopping cart"}>
                            <AddShoppingCartIcon style={{color: "white"}}/>
                        </IconButton>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}
