import axios from "axios";

export default {
  // Gets all users
  getUsers: function() {
    return axios.get("/api/users");
  },
  // Gets a single user with the given id
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  },
  updateUser: function(id, userData) {
    return axios.put("/api/users/" + id, userData);
  }
}