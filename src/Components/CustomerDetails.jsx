import React, { Component } from 'react';
import '../CSS/CustomerDetails.css'
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import axios from "axios";
import DenseAppBar from "./BottomBar";
import PrimarySearchAppBar from "./TopToolBar";
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from "react-router-dom";

class CustomerDetails extends Component {
    constructor() {
        super();
        this.state = {
            fields: {},
            errors: {}
        }

        this.handleChange = this.handleChange.bind(this);
        this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

    };

    handleChange(e) {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
            fields
        });

    }

    submituserRegistrationForm(e) {
        e.preventDefault();
        if (this.validateForm()) {
            let fields = {};
            fields["name"] = "";
            fields["emailid"] = "";
            fields["mobileno"] = "";
            fields["pinCode"] = "";
            fields["address"] = "";
            fields["country"] = "";
            this.setState({ fields: fields });
            alert("Form submitted");
        }

    }

    validateForm() {

        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if (!fields["name"]) {
            formIsValid = false;
            errors["name"] = "*Please enter your name.";
        }

        if (typeof fields["name"] !== "undefined") {
            if (!fields["name"].match(/^[A-Z]{1}[a-z]{2,}/)) {
                formIsValid = false;
                errors["name"] = "*Enter name with atleast 3 letters and 1st letter capital.";
            }
        }

        if (!fields["emailid"]) {
            formIsValid = false;
            errors["emailid"] = "*Please enter your email-ID.";
        }

        if (typeof fields["emailid"] !== "undefined") {
            //regular expression for email validation
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(fields["emailid"])) {
                formIsValid = false;
                errors["emailid"] = "*Enter valid email-ID.";
            }
        }

        if (!fields["pinCode"]) {
            formIsValid = false;
            errors["pinCode"] = "*Enter your pinCode.";
        }

        if (typeof fields["pinCode"] !== "undefined") {
            if (!fields["pinCode"].match(/^[0-9]{6}$/)) {
                formIsValid = false;
                errors["pinCode"] = "*Enter valid pinCode with 6 digits.";
            }
        }

        if (!fields["address"]) {
            formIsValid = false;
            errors["address"] = "*Enter your Address.";
        }

        if (typeof fields["address"] !== "undefined") {
            if (!fields["address"].match(/^[a-zA-Z0-9]*$/)) {
                formIsValid = false;
                errors["name"] = "*Enter alphabet characters only.";
            }
        }

        this.setState({
            errors: errors
        });
        return formIsValid;
    }

    render() {
        return (<div>
            <div className="subMain" style={{ height: '600px' }}>
                <h1>CUSTOMER DETAILS</h1>
                <form method="post" name="userRegistrationForm" onSubmit={this.submituserRegistrationForm} >
                    <div className='content'>
                        <div className='name'>
                            <label>Name</label>
                            <input type="text" name="name" value={this.state.fields.name} onChange={this.handleChange} />
                            <div className="errorMsg">{this.state.errors.name}</div>
                        </div>
                        <div className='phonenumber'>
                            <label>Mobile(optional)</label>
                            <input type="text" name="phonenumber" value={this.state.fields.phonenumber} onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className='content'>
                        <div className='name'>
                            <label>Email ID:</label>
                            <input type="text" name="emailid" value={this.state.fields.emailid} onChange={this.handleChange} />
                            <div className="errorMsg">{this.state.errors.emailid}</div>
                        </div>
                        <div className='phonenumber'>
                            <label>PinCode:</label>
                            <input type="text" name="pinCode" value={this.state.fields.pinCode} onChange={this.handleChange} />
                            <div className="errorMsg">{this.state.errors.pinCode}</div>
                        </div>
                    </div>
                    <div className='address'>
                        <label>Address:</label>
                        <input type="text" name="address" value={this.state.fields.address} onChange={this.handleChange} />
                        <div className="errorMsg">{this.state.errors.address}</div>
                    </div>
                    <div className='content'>
                        <div className='name'>
                            <div className='text'>Type</div>

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
                        </div>
                        <div className='phonenumber'>
                            <label>Country:</label>
                            <select>
                                <option value="India">India</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                    </div>
                    <div className='emptydiv'>
                        <input type="submit" class="button" value="Continue" />
                    </div>
                </form>
            </div>
        </div>);
    }
}

export default withRouter(CustomerDetails);