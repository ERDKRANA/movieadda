import React, { Component } from "react";

class SideNav extends Component {
  render() {
    return (
      <div className="sidenav-container">
        <div
          className={
            this.props.active_nav === "User"
              ? "side-nav-list-active"
              : "side-nav-list"
          }
          onClick={() => this.props.handleChangeSideNav("User")}
        >
          {" "}
          User{" "}
        </div>
        <div
          className={
            this.props.active_nav === "Movie"
              ? "side-nav-list-active"
              : "side-nav-list"
          }
          onClick={() => this.props.handleChangeSideNav("Movie")}
        >
          {" "}
          Movie{" "}
        </div>

        <div
          className={
            this.props.active_nav === "Group"
              ? "side-nav-list-active"
              : "side-nav-list"
          }
          onClick={() => this.props.handleChangeSideNav("Group")}
        >
          {" "}
          Group{" "}
        </div>
        <div
          className={
            this.props.active_nav === "Text"
              ? "side-nav-list-active"
              : "side-nav-list"
          }
          onClick={() => this.props.handleChangeSideNav("Text")}
        >
          {" "}
          Text{" "}
        </div>

        <div
          className={
            this.props.active_nav === "Upcoming"
              ? "side-nav-list-active"
              : "side-nav-list"
          }
          onClick={() => this.props.handleChangeSideNav("Upcoming")}
        >
          {" "}
          Upcoming{" "}
        </div>
      </div>
    );
  }
}
export default SideNav;
