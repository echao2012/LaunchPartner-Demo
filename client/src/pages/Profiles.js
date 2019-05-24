import React, { Component } from "react";
import API from "../utils/API";
import { ProfileListItem } from "../components/Profile"

class Login extends Component {
  state = {
    profiles: []
  };

  componentDidMount() {
    API.getUsers()
      .then(res => this.setState({ profiles: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="card mt-4" style={{ width: "40rem" }}>
            <div className="card-header">
              <h5 className="card-title">Profiles</h5>
            </div>
            <ul className="list-group list-group-flush">
              {this.state.profiles.map(profile => (
                <ProfileListItem
                  key={profile._id}
                  profileInfo={profile}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;