import React, { Component } from "react";

// Components
import PostList from "../components/PostList.jsx";
import Announcement from "../components/Announcement";
import { Container, FormControl, Select, Divider } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";

export default class dashboard extends Component {
  state = {};

  componentDidMount = () => {
    console.log("dashboard props:", this.props);
    this.props.backButton.off();
    this.props.setPageTitle("House Log");
  };

  handlePropertySelect = event => {
    this.props.setSelectedProperty(event.target.value);
  };

  render() {
    const renderPropertySelector = () => {
      if (this.props.user && this.props.user.property) {
        return this.props?.user.property.map((property, index) => {
          return (
            <option value={property._id} key={index}>
              {`${property.property_street}, ${property.property_postal}`}
            </option>
          );
        });
      }
    };

    return (
      <Container>
        <div className="dashboardHeader">
          <LocationOnIcon className="locationDropDownIcon" />
          <FormControl
            className="locationDropDownSelect"
            style={{ width: "90%" }}
          >
            <Select
              native
              value={this.props.selectedProperty}
              onChange={this.handlePropertySelect}
              inputProps={{
                name: "property",
                id: "age-native-simple"
              }}
            >
              {renderPropertySelector()}
            </Select>
          </FormControl>
        </div>

        <Announcement selectedProperty={this.props.selectedProperty} />
        {/* <p>Messages</p> */}
        <Divider />
        <PostList
          {...this.props}
          selectedProperty={this.props.selectedProperty}
        />
      </Container>
    );
  }
}
