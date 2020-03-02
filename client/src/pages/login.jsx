import React, { Component } from "react";
import {
  Button,
  FormControl,
  TextField,
  Container
  //Input,
  //InputLabel,
} from "@material-ui/core";
import axios from "axios";

export default class login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("submit: ");
    console.log(this.state);

    axios
      .post("/api/auth/login", {
        email: this.state.email,
        password: this.state.password
      })
      .then(response => {
        console.log(response);

        this.props.setUser(response.data);
        this.props.history.push("/");
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <Container className="login">
        <div className="loginHeader">
          <h3>Welcome to h.express</h3>
        </div>
        <form onSubmit={this.handleSubmit} autoComplete="on">
          <FormControl>
            <div className="loginEmail">
              <TextField
                name="email"
                id="email"
                type="email"
                label="E-Mail"
                variant="filled"
                onChange={this.handleChange}
                required
                autoComplete="current-email"
              />
            </div>
          </FormControl>
          <FormControl>
            <div className="loginPassword">
              <TextField
                name="password"
                id="password"
                type="password"
                label="Password"
                variant="filled"
                onChange={this.handleChange}
                required
                autoComplete="current-password"
              />
            </div>
          </FormControl>
          <div className="loginButton">
            <Button size="large" color="inherit" type="submit">
              Login
            </Button>
          </div>
        </form>
      </Container>
    );
  }
}
