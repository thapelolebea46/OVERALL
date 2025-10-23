import React from "react";
import { roomsData } from "./roomsData";
import ClientRoomList from "./ClientRoomList";
import Navbar from "./Navbar";
import Footer from "./Footer";



const Home = () => {
  return(<div>
    <Navbar/>
     <ClientRoomList rooms={roomsData}/>
     <Footer/>
  
  </div>);
};

export default Home;
