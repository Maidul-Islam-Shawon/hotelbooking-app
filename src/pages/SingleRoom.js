import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Banner } from "../components/Banner";
import { Hero } from "../components/Hero";
import { RoomContext } from "../Context";
import defaultImg from "../images/room-1.jpeg";

export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    //console.log(props);

    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg: defaultImg,
    };
  }

  static contextType = RoomContext;

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);

    console.log(room);

    if (!room) {
      return (
        <div className="error">
          <h3> no such room could be found...</h3>
          <Link to="/rooms" className="btn-primary">
            Back to rooms
          </Link>
        </div>
      );
    }

    const {
      name,
      description,
      capacity,
      size,
      prices,
      extras,
      breakfast,
      pets,
      images,
    } = room;

    return (
      <>
        <Hero hero="roomsHero">
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              back to rooms
            </Link>
          </Banner>
        </Hero>

        <h4>{description}</h4>
      </>
    );
  }
}
