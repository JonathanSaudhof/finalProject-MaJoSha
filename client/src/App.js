// Final Project
//
import React from "react";
import { Route } from "react-router-dom";
import "./App.scss";

// Navbar
import Navbar from "./components/Navbar.js";
import LabelBottomNavigation from "./components/BottomNavigation.js";

// Profile
import Profile from "./pages/profile";

// Pages
import Dashboard from "./pages/dashboard";
import LoginPage from "./pages/login";

// Posts
import PostDetail from "./pages/postDetail.jsx";
import PostForm from "./pages/postForm.jsx";
import Post from "./pages/posts.jsx";

// Announcements
import AnnouncementDetail from "./components/AnnouncementDetail.js";
// import AnDetail from './components/AnnouncementDetail.js';

//Files
import File from "./pages/files.jsx";
import FileDetail from "./components/FileDetail.js";
//import { BottomNavigation } from "@material-ui/core";

// Properties

import Properties from "./pages/properties";

//CalenderEntries
import Calender from "./pages/calender.jsx";

class App extends React.Component {
  state = {
    user: this.props.user,
    pageTitle: "House Log",
    backNavButton: false
    // selectedProperty: this.props.user.property[0]._id
  };

  setUser = userObj => {
    if (userObj === null) {
      this.setState({
        user: null,
        selectedProperty: null
      });
    } else {
      this.setState({
        user: userObj,
        selectedProperty: userObj.property[0]._id
      });
    }
  };

  backButtonOn = () => {
    console.log("backbutton on");
    this.setState({
      backNavButton: true
    });
  };

  backButtonOff = () => {
    console.log("backbutton off");
    this.setState({
      backNavButton: false
    });
  };

  setPageTitle = title => {
    this.setState({
      pageTitle: title
    });
  };

  setSelectedProperty = propertyId => {
    this.setState({
      selectedProperty: propertyId
    });
  };

  componentDidMount = () => {
    this.setPageTitle("House Log");
    if (this.props.user) {
      this.setUser(this.props.user);
    }
  };

  render() {
    // if you are logged out, you are automatically redirected to the LoginPage!

    if (!!!this.state.user) {
      return (
        <div className="App">
          <LoginPage history={this.props.history} setUser={this.setUser} />
        </div>
      );
    }

    const showBackButton = {
      on: this.backButtonOn,
      off: this.backButtonOff
    };

    return (
      <div className="App">
        <Navbar
          setUser={this.setUser}
          showBackNavButton={this.state.backNavButton}
          pageTitle={this.state.pageTitle}
          user={this.state.user}
        />

        {/* Announcement: List all Announcements */}
        <Route
          exact
          path="/"
          render={props => (
            <Dashboard
              {...props}
              backButton={showBackButton}
              setPageTitle={this.setPageTitle}
              selectedProperty={this.state.selectedProperty}
              setSelectedProperty={this.setSelectedProperty}
              user={this.state.user}
            />
          )}
        />

        {/* Announcement: View one Announcement */}
        <Route
          exact
          path="/announcement/:announcementId"
          render={props => (
            <AnnouncementDetail {...props} user={this.state.user} />
          )}
        />

        {/* Post: Create form */}

        <Route
          exact
          path="/new-post"
          render={props => (
            <PostForm
              {...props}
              user={this.state.user}
              backButton={showBackButton}
              setPageTitle={this.setPageTitle}
              selectedProperty={this.state.selectedProperty}
            />
          )}
        ></Route>

        {/* Post: View one post */}

        <Route
          exact
          path="/posts/:postId"
          render={props => (
            <PostDetail
              {...props}
              backButton={showBackButton}
              setPageTitle={this.setPageTitle}
              user={this.state.user}
            />
          )}
        />

        <Route
          exact
          path="/posts/:postId/edit"
          render={props => (
            <PostForm
              {...props}
              user={this.state.user}
              backButton={showBackButton}
              setPageTitle={this.setPageTitle}
              selectedProperty={this.state.selectedProperty}
              edit
            />
          )}
        />

        {/* Post: View ALL posts */}
        <Route
          exact
          path="/posts"
          render={props => {
            return (
              <Post
                {...props}
                selectedProperty={this.state.selectedProperty}
                setPageTitle={this.setPageTitle}
                backButton={showBackButton}
              />
            );
          }}
        />

        {/* Calender */}
        <Route
          exact
          path="/calender"
          render={props => {
            return (
              <Calender
                {...props}
                backButton={showBackButton}
                selectedProperty={this.state.selectedProperty}
                setPageTitle={this.setPageTitle}
              />
            );
          }}
        />

        {/* Profile */}
        <Route
          exact
          path="/profile"
          render={props => {
            return (
              <Profile
                {...props}
                setUser={this.setUser}
                backButton={showBackButton}
                setPageTitle={this.setPageTitle}
                user={this.state.user}
              />
            );
          }}
        />
        {/* files */}
        <Route
          exact
          path="/files"
          render={props => {
            return (
              <File
                {...props}
                backButton={showBackButton}
                setPageTitle={this.setPageTitle}
              />
            );
          }}
        />

        <Route
          exact
          path="/files/:fileId"
          render={props => (
            <FileDetail
              {...props}
              user={this.state.user}
              setPageTitle={this.setPageTitle}
              backButton={showBackButton}
            />
          )}
        />

        <Route
          exact
          path="/properties"
          render={props => (
            <Properties
              {...props}
              user={this.state.user}
              setPageTitle={this.setPageTitle}
            />
          )}
        />

        {/* </div> */}
        <LabelBottomNavigation className="bottom-nav" />
      </div>
    );
  }
}

export default App;
