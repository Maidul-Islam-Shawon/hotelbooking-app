import React from "react";
import { RoomConsumer } from "../Context";
import Loading from "./Loading";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";

export default function RoomsContainer() {
  return (
    <RoomConsumer>
      {(value) => {
        //console.log(value);
        const { loading, sortedRooms, rooms } = value;

        if (loading) return <Loading />;

        return (
          <div>
            <h2>RoomsContainer</h2>
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms} />
          </div>
        );
      }}
    </RoomConsumer>
  );
}
