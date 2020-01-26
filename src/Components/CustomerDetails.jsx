import React, {Component} from 'react';
import '../CSS/CustomerDetails.css'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {withRouter} from "react-router-dom";
import DenseAppBar from "./BottomBar";
import Cart from "./Cart";

class CustomerDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {
                address : "",
                country : "India",
                email : "",
                name : "",
                pinCode : ""
            },
            errors: {},
            displaySummary:false,
            totalAmount:0,
            OrderDetails:[]

        }
         this.createOrderDetails = this.createOrderDetails.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.validateForm = this.validateForm.bind(this);
        // this.totalAmount = this.totalAmount.bind(this);
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
            this.setState({ displaySummary: true });
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

        if (!fields["email"]) {
            formIsValid = false;
            errors["email"] = "*Please enter your email-ID.";
        }

        if (typeof fields["email"] !== "undefined") {
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(fields["email"])) {
                formIsValid = false;
                errors["email"] = "*Enter valid email-ID.";
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

   /* totalAmount(){
        console.log("in totalAmount")
        if(this.state.fields.country === "India"){
            this.setState({totalAmount : this.props.totalAmount+50})
        }
        this.setState({totalAmount : this.props.totalAmount+200})
    }*/

    createOrderDetails(){
        let book = localStorage.getItem('bookCart')
        let consumerDto =this.state.fields
        localStorage.setItem('bookList',book)
        localStorage.setItem('consumerDto',JSON.stringify(consumerDto))
    }



    render() {
        return (<div>
            <div className="subMain" style={{ height: '600px' }}>
                <div className={"FormTitle"}>Customer Details</div>
                <form  name="userRegistrationForm" onSubmit={this.submituserRegistrationForm} >
                    <div className='content'>
                        <div className='name'>
                            <label>Name</label>
                            <input type="text" name="name" value={this.state.fields.name} onChange={this.handleChange} />
                            <div className="errorMsg">{this.state.errors.name}</div>
                        </div>
                    </div>
                    <div className='content'>
                        <div className='email'>
                            <label>Email ID:</label>
                            <input type="text" name="email" value={this.state.fields.email} onChange={this.handleChange} />
                            <div className="errorMsg">{this.state.errors.email}</div>
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
                            <select name="country" value={this.state.fields.country}  onChange={this.handleChange}>
                                <option  value="India">India</option>
                                <option  value="Other">Other</option>
                            </select>
                        </div>
                    </div>
                    <div className='emptydiv'>
                        <input type="submit" className="button" value="Continue" />
                    </div>
                </form>
                {this.state.displaySummary ?
                    <div>
                        {this.createOrderDetails()}
                        <Cart totalAmount={this.state.totalAmount}/></div>
                        :
                    <div className={"DisplaySummary"}>
                        <div className={"summaryText"}>Order Summary</div>
                    </div>
                }
                <DenseAppBar/>
            </div>
        </div>);
    }
}

export default withRouter(CustomerDetails);