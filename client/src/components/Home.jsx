import React from "react";
import RoomsClient from "./RoomsClient";
import { roomsData } from "./roomsData";



const Home = () => {
  return <RoomsClient rooms={roomsData} />;
};

export default Home;
