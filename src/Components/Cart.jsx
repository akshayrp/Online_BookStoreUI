import React, {Component} from "react";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CustomerDetails from "./CustomerDetails";
import CartBookDetails from "./CartBookDetails";
import ToolBar from "./ToolBar";
import "../CSS/Cart.css"
import {withRouter} from "react-router-dom";


class Cart extends Component {
    render() {
        return <div>
            <ToolBar/>
            <CartBookDetails/>
            <div className="expansionPanel">
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header">
                        <Typography style={{color: "grey"}}>Customer Details</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <CustomerDetails/>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
        </div>
    }
}

export default withRouter(Cart);