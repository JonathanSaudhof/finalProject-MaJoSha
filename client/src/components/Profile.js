import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
//import { Avatar } from '@material-ui/core';
import IconButton from "@material-ui/core/IconButton";
import PersonIcon from "@material-ui/icons/AccountBox";

// icons
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";




// const Profile = props => {
//   const logout = () => {
//     axios.delete("/api/auth/logout").then(() => {
//       props.setUser(null);
//     });
//   };
// }

export default class Profile extends Component {
    state = {
      username: "",
      password: "",
      message: ""
    }
render() {
  return (
    <div className="navbar" id="navbar">
    Hello Profile
      {/* <div className="nav-title">{props.pageTitle}</div> */}
      {/* <Link className="profileIcon" onClick={logout} to="/"> */}
        {/* <Link className="profileIcon" to="/profile"> */}
        <PersonIcon />
      {/* </Link> */}
    </div>
  );
};
};

