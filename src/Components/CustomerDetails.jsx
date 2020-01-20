import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import {grey} from '@material-ui/core/colors';
import  '../CSS/CustomerDetails.css'
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 250,
            color:'black',
        },
    },
}));

const defaultProps = {
    bgcolor: 'background.paper',
    m: 1,
    border: 1,
    style: { width: '40rem',color: 'grey', height: '28rem' },
    color: grey,

};

const orderProps={
    bgcolor: 'background.paper',
    m: 1,
    border: 1,
    style: { width: '4rem',color: 'grey', height: '3rem' },

}

const useStylesButton = makeStyles(theme => ({
    root: {
        '& *': {
            margin: theme.spacing(1),
        },
    },
}));
const Country = [
    {
        value: 'India',
        label: 'INDIA',
    },
    {
        value: 'Other',
        label: 'OTHER',
    },
];

export default function FormPropsTextFields() {
    const classes = useStyles();
    const classes2 = useStylesButton();
    const classes1 = useStyles();
    const [country, setCurrency] = React.useState('EUR');

    const handleChange = event => {
        setCurrency(event.target.value);

    };

    return (
        <div className="detailsBox">
            <Box display="flex" justifyContent="center" borderColor="grey"{...defaultProps} >
                <form className={classes.root} noValidate autoComplete="off">
                    <p style={{color: 'black'}}
                    >Customer Details</p>
                    <div>
                        <TextField
                            required id="userName"
                            label="Name"
                            type="TextField"
                            variant="outlined"/>
                        <TextField
                            id="userEmail"
                            label="Email-Id"
                            type="EmailId"
                            variant="outlined"
                        />
                        <div>
                            <TextField style={{color: 'black'}}
                                       id="userAddress"
                                       label="Address"
                                       type="TextField"
                                       variant="outlined"
                                       width='20%'
                            />
                        </div>
                        <TextField
                            id="userPincode"
                            label="Pincode"
                            type="number"
                            variant="outlined"
                        />
                        <TextField
                            id="userCountry"
                            select
                            label="Country" color='black'
                            value={country}
                            onChange={handleChange}
                            variant="outlined"
                            helperText="Please select your Country"
                        >
                            {Country.map(option => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <div>
                            <p style={{color: 'black'}}>Type</p>
                            <div className="RadioButton1">
                                <input type="radio" name="place" value="home"/>Home</div>
                            <div className="RadioButton2">
                                <input type="radio" name="place" value="work"/>Work</div>
                            <div className="RadioButton3">
                                <input type="radio" name="place" value="other"/>Other</div>
                        </div>
                    </div>

                    <div className="continueButton">
                        <Button variant="contained" color="primary">
                            CONTINUE
                        </Button>
                    </div>
                </form>
            </Box>
        </div>
    );
}
