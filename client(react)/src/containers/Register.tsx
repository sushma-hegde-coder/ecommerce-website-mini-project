import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Register = () => {
  //   const [user, setUser] = useState({
  //     name: "",
  //     username: "",
  //     email: "",
  //     phone: "",
  //     website: ""
  //   });

  // const [allusers, setAllUsers] = useState([]);

  //   const { name, username, email, phone, website } = user;
  //   const onInputChange = e => {
  //     setUser({ ...user, [e.target.name]: e.target.value });
  //   };

  //   const onSubmit = async e => {
  //     e.preventDefault();
  //     console.log("users"+JSON.stringify(user));
  //     var user_array=[user, ...allusers];
  //     console.log("User array new var"+JSON.stringify(user_array));
  //     setAllUsers(user_array);
  //     console.log(typeof allusers);

  //     console.log("All users"+JSON.stringify(allusers));
  //     };

  return (
    <div className="container">
      <form>
        <div className="w-75 mx-auto mt-5 shadow p-5">
          <h2 className="text-center mb-2">Add A User</h2>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value="name"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Username"
              name="username"
              value="username"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              value="email"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Phone Number"
              name="phone"
              value="phone"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Website Name"
              name="website"
              value="website"
            />
          </div>
        </div>

        <div className="container">
          <div className="py-4">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">User Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone no</th>
                  <th scope="col">web site</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>name</td>
                  <td>username</td>
                  <td>item.email</td>
                  <td>item.phone</td>
                  <td>item.website</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <button className="btn btn-primary btn-block">Add User</button>
      </form>
    </div>
  );
};

export default Register;
