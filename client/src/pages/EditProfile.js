import React, { Component } from "react";
import API from "../utils/API";
import { Input, TextArea, FormBtn } from "../components/Form";
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class Login extends Component {
  state = {
    userId: cookies.get('user'),
    name: "",
    picture: "",
    description: ""
  };

  componentDidMount() {
    if(this.state.userId) {
      // Load user dashboard info
      API.getUserById(this.state.userId)
        .then(res => this.setState( res.data ));
    } else {
      // Login cookie not found, redirect to login page
      this.props.history.push("/");
    }
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    if(this.state.name) {
      API.updateUser(this.state.userId, {
        name: this.state.name,
        picture: this.state.picture,
        description: this.state.description
      })
        .then(res => this.props.history.push("/dashboard"))
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="card mt-4" style={{ width: "40rem" }}>
            <div className="card-header">
              <h5 className="card-title">Edit Profile</h5>
            </div>
            <div className="card-body">
              <form>
                <label htmlFor="name">Name</label>
                <Input
                  value={this.state.name}
                  onChange={this.handleInputChange}
                  name="name"
                  id="name"
                  placeholder="Enter full name"
                />
                <label htmlFor="picture">Profile picture URL (optional)</label>
                <Input
                  value={this.state.picture}
                  onChange={this.handleInputChange}
                  name="picture"
                  id="picture"
                  placeholder="Enter profile picture URL"
                />
                <label htmlFor="description">Description of yourself (optional)</label>
                <TextArea
                  value={this.state.description}
                  onChange={this.handleInputChange}
                  name="description"
                  id="description"
                  placeholder="Enter your description"
                />
                <FormBtn
                  disabled={!this.state.name}
                  onClick={this.handleSubmit}
                >
                  Submit
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