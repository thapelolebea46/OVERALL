import React from "react";
import { roomsData } from "./roomsData";
import ClientRoomList from "./ClientRoomList";



const Home = () => {
  return <ClientRoomList rooms={roomsData}/>;
};

export default Home;
