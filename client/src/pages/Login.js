import React, { Component } from "react";
import API from "../utils/API";
import { Input, FormBtn } from "../components/Form";
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class Login extends Component {
  state = {
    loginUsername: "",
    newUsername: "",
    newName: ""
  };

  componentDidMount() {
    const userId = cookies.get('user');
    if(userId) {
      // Login cookie found, redirect to dashboard
      this.props.history.push("/dashboard");
    }
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleLogin = event => {
    event.preventDefault();
    if(this.state.loginUsername) {
      API.getUserByUsername(this.state.loginUsername)
        .then(res => {
          cookies.set('user', res.data._id, { path: '/' });
          this.props.history.push("/dashboard");
        })
        .catch(err => console.log(err));
    }
  };

  handleNewUser = event => {
    event.preventDefault();
    if(this.state.newUsername && this.state.newName) {
      API.saveUser({
        username: this.state.newUsername,
        name: this.state.newName
      })
        .then(res => {
          cookies.set('user', res.data._id, { path: '/' });
          this.props.history.push("/dashboard");
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="card mt-4" style={{ width: "30rem" }}>
            <div className="card-header">
              <h5 className="card-title">Login</h5>
            </div>
            <div className="card-body text-center">
              <form>
                <Input
                  value={this.state.loginUsername}
                  onChange={this.handleInputChange}
                  name="loginUsername"
                  placeholder="Enter username"
                />
                <FormBtn
                  disabled={!this.state.loginUsername}
                  onClick={this.handleLogin}
                >
                  Login
                </FormBtn>
              </form>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="card mt-4" style={{ width: "30rem" }}>
            <div className="card-header">
            <h5 className="card-title">New User</h5>
            </div>
            <div className="card-body text-center">
              <form>
                <Input
                  value={this.state.newUserName}
                  onChange={this.handleInputChange}
                  name="newUsername"
                  placeholder="Enter username"
                />
                <Input
                  value={this.state.newName}
                  onChange={this.handleInputChange}
                  name="newName"
                  placeholder="Enter full name"
                />
                <FormBtn
                  disabled={!(this.state.newUsername && this.state.newName)}
                  onClick={this.handleNewUser}
                >
                  Sign Up
                </FormBtn>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;