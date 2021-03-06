import React, { Component } from "react";
import axios from "axios";
import AnnouncementsList from "./AnnouncementsList";

export default class Announcements extends Component {
  state = {
    announcements: []
  };

  componentDidMount() {
    this.getData();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.selectedProperty !== this.props.selectedProperty) {
      this.getData();
    }
  }

  getData = () => {
    axios
      .get(`/api/announcements?property=${this.props.selectedProperty}`)
      .then(response => {
        this.setState({
          announcements: response.data
        });
      });
  };

  getNewestAnnouncements = () => {
    axios.get("/api/announcements?sortBy=created_at").then(response => {
      this.setState({
        announcements: response.data
      });
    });
  };

  render() {
    return (
      <div>
        <AnnouncementsList announcements={this.state.announcements} />
      </div>
    );
  }
}
