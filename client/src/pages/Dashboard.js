import React, { Component } from "react";
import API from "../utils/API";
import Cookies from 'universal-cookie';
import { ProfileDetail } from "../components/ProfileDetail"
const cookies = new Cookies();

class Login extends Component {
  state = {

    username: "",
    name: "",
    description: "",
    picture: ""
  };

  componentDidMount() {
    const userId = cookies.get('user');
    if(userId) {
      // Load user dashboard info
      API.getUserById(userId)
        .then(res => this.setState( res.data ));
    } else {
      // Login cookie not found, redirect to login page
      this.props.history.push("/");
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
            <ProfileDetail
              profileInfo={this.state}
            />
        </div>
      </div>
    )
  }
}

export default Login;