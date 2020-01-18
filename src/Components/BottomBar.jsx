import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    bottomBar: {
        backgroundColor: "#2E1D1E",
    },
    copyRight: {

    },

}));

export default function DenseAppBar() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar variant="dense" className={classes.bottomBar}>
                    <Typography color="inherit" className={classes.copyRight}>
                        Copyright 2020, TallTales BookStore Private Limited. All Rights Reserved.
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}
