import React, { Component } from "react";
import API from "../utils/API";
import Cookies from 'universal-cookie';
import { ProfileDetail } from "../components/Profile"
const cookies = new Cookies();

class Login extends Component {
  state = {
    name: "",
    description: "",
    picture: ""
  };

  componentDidMount() {
    API.getUserById(this.props.match.params.id)
      .then(res => this.setState({
        name: res.data.name,
        description: res.data.description,
        picture: res.data.picture
      }))
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