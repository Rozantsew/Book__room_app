import React, { Component } from "react";
import { RoomContext } from "../../context/context";
import Loading from "../loading/Loading";
import Room from "../room/Room";
import Title from "../title/Title";

export default class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    let { loading, featuredRooms: rooms } = this.context;
    rooms = rooms.map((room) => {
      return <Room key={room.id} room={room} />;
    });

    return (
      <section className="featured-rooms">
        <Title title="Wyróżnione pokoje" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : rooms}
        </div>
      </section>
    );
  }
}
