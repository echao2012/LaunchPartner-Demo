import React from "react";
import "./style.css"

export function ProfileDetail(props) {
  return (
    <div className="card mt-4 profile-detail">
      {props.profileInfo.username ? (
        <div className="card-header">
          <h5 className="card-title">{props.profileInfo.username}'s Dashboard</h5>
          <a href="/edit" className="btn btn-primary">Edit Profile</a>
        </div>
      ) : null}
      <div className="card-body">
        <img class="img-fluid mb-4" src={props.profileInfo.picture ? props.profileInfo.picture : "https://place-hold.it/400x300&text=Picture&fontsize=16"}></img>
        <h5 className="card-title">Name: {props.profileInfo.name}</h5>
        <p className="card-text">Description of yourself: {props.profileInfo.description ? props.profileInfo.description : "None"}</p>
      </div>
    </div>
  );
}