import React, {Component, useLayoutEffect} from "react";
import {Redirect} from 'react-router-dom';
import '../CSS/UserLogin.css';
import axios from 'axios'


class UserLogin extends Component{
    constructor(props) {
        let loggedIn = false;
        super(props)

        this.state = {
            userName: "",
            password: "",
            loggedIn
        }

    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault()
        const {userName, password} = this.state
        console.log(this.state)
        axios.post("http://localhost:8080/book/login/",this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
        if (userName === "admin" && password === "1234") {
            localStorage.setItem("token", "blabla")
            this.setState({
                loggedIn: true
            })
        } else {
            alert("wrong user name or password")
        }
    }

    onSubmit = () => {
        this.props.history.push('/details');
    }

    render() {
        if (this.state.loggedIn) {
            return <Redirect to="/listOfBooks"/>
        }
        const {userName, password} = this.state
        return(
            <div className="form" style={{ height: '600px' }}>
                <form onSubmit={this.submitHandler}>
                    <label>
                    <div className="UserNameDetail">
                        UserName:<input type="username" name="userName" value={userName} onChange={this.changeHandler}/></div>
                    <div className="UserPasswordDetail">Password:<input type="password" name="password" value={password}
                                                                        onChange={this.changeHandler}/></div>
                    <button type="submit">Login</button>
                    </label>
                </form>
            </div>
        )
    }
}
export default UserLogin