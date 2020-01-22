import React, { Component } from 'react';
import '../CSS/CustomerDetails.css'
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import axios from "axios";



import { withStyles } from '@material-ui/core/styles';
import { withRouter } from "react-router-dom";

const CssTextField = withStyles({
    root: {
        'MuiOutlinedInput-root': {
            position: 'relative',
            width: '670px',
            borderRadius: '4px',
            height: '69px',
        }

    },
})(TextField);
class CustomerDetails extends Component {

    constructor(props) {
        super(props);

        this.state = {
            bookDetails : this.props,
            name: '',
            email: '',
            address: '',
            country: '',
            pincode: ''
        }
    }



    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state)
        axios.post('http://192.168.0.104:8080/TallTalesBooks/AddUserDetails', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }




    render() {
        const { address, country, email, name, pinCode } = this.state;
        return (<div>
            <div className="subMain" style={{ height: '600px' }}>

                <h2>Customer Details</h2>
                <div className='content'>
                    <div className='name' >
                        <TextField id="outlined-basic" label="Name" value={name} onChange={this.changeHandler} variant="outlined" style={{ width: '370px' }} />
                    </div>
                    <div className='phonenumber'>
                        <TextField id="outlined-basic" label="Phone Number" variant="outlined" style={{ width: '370px' }} />
                    </div>
                </div>

                <div className='content'>
                    <div className='name'>
                        <TextField id="outlined-basic" label="Pincode" value={pinCode} onChange={this.changeHandler} variant="outlined" style={{ width: '370px' }} />
                    </div>
                    <div className='phonenumber'>
                        <TextField id="outlined-basic" label="Email Id" value={email} onChange={this.changeHandler} variant="outlined" style={{ width: '370px' }} />
                    </div>
                </div>

                <div className='address'>
                    <CssTextField id="outlined-multiline-static" label="Address" value={address} onChange={this.changeHandler} multiline rows="3" variant="outlined" style={{ width: '775px' }} />
                </div>
                <div className='content'>
                    <div className='name'>
                        <TextField id="outlined-basic" label="City/Town" variant="outlined" style={{ width: '370px' }} />
                    </div>
                    <div className='phonenumber'>
                        <TextField id="outlined-basic" label="Country" value={country} onChange={this.changeHandler} variant="outlined" style={{ width: '370px' }} />
                    </div>
                </div>

                <div className='text'>Type</div>
                <div className='radioButtons'>
                    <FormControl component="fieldset" style={{ paddingLeft: '6%' }}>
                        <RadioGroup aria-label="position" name="position" row>
                            <div>
                                <FormControlLabel
                                    value="top"
                                    control={<Radio color="primary" />}
                                    label="Home"
                                    labelPlacement="end"
                                />
                            </div>
                            <FormControlLabel
                                value="start"
                                control={<Radio color="primary" />}
                                label="Work"
                                labelPlacement="end"
                            />
                            <FormControlLabel
                                value="bottom"
                                control={<Radio color="primary" />}
                                label="Other"
                                labelPlacement="end"

                            />
                        </RadioGroup>
                    </FormControl>

                    <Button variant="contained" color="primary" style={{ float: 'right' }} onClick={this.submitHandler}>
                        Continue </Button>
                </div>
            </div>
            <div className="orderSummary" style={{ height: '50px' }}>
                <h2>Order Summary</h2>
            </div>
        </div>);
    }
}

export default withRouter (CustomerDetails)