import React from "react";
import RoomsList from "./RoomsList";
import RoomsFilter from "./RoomsFilter";
import Loading from "../loading/Loading";
import { withRoomConsumer } from "../../context/context";

function RoomsContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    <Loading />;
  }
  return (
    <>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </>
  );
}

export default withRoomConsumer(RoomsContainer);
