import React, { Component } from "react";
import { RoomContext } from "../Context";

export default class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    const value = this.context;
    console.log(value);
    return <div>This is FeaturedRooms---{value}</div>;
  }
}
