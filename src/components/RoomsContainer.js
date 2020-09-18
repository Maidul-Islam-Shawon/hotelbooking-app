import React from "react";
import { RoomConsumer, withRoomConsumer } from "../Context";
import Loading from "./Loading";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";

function RoomsContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;

  //console.log(rooms);

  if (loading) return <Loading />;

  return (
    <>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </>
  );
}

export default withRoomConsumer(RoomsContainer);

// import React from "react";
// import { RoomConsumer } from "../Context";
// import Loading from "./Loading";
// import RoomsFilter from "./RoomsFilter";
// import RoomsList from "./RoomsList";

// export default function RoomsContainer() {
//   return (
//     <RoomConsumer>
//       {(value) => {
//         //console.log(value);
//         const { loading, sortedRooms, rooms } = value;

//         if (loading) return <Loading />;

//         return (
//           <div>
//             <h2>RoomsContainer</h2>
//             <RoomsFilter rooms={rooms} />
//             <RoomsList rooms={sortedRooms} />
//           </div>
//         );
//       }}
//     </RoomConsumer>
//   );
// }
