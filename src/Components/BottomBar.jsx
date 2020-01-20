import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import '../CSS/BottomBar.css'

export default class DenseAppBar extends Component{
    render() {
        return (
            <div className='root'>
                <AppBar position="static">
                    <Toolbar variant="dense" className='bottomBar'>
                        <Typography color="inherit">
                            Copyright 2020, TallTales BookStore Private Limited. All Rights Reserved.
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}
