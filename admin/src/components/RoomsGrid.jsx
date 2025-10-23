import React, { useState } from "react";
import "./RoomsGrid.scss";

const RoomsGrid = () => {
  const [rooms, setRooms] = useState([
    { roomNumber: 101, status: "Available" },
    { roomNumber: 102, status: "Booked" },
    { roomNumber: 103, status: "Available" },
    { roomNumber: 104, status: "Booked" },
    { roomNumber: 105, status: "Available" },
    { roomNumber: 106, status: "Booked" },
    { roomNumber: 107, status: "Available" },
    { roomNumber: 108, status: "Available" },
    { roomNumber: 109, status: "Booked" },
    { roomNumber: 110, status: "Available" },
  ]);
  const [available, setAvailable] = useState(0);
  const [booked, setBooked] = useState(0);

  const countAvailable = () => {
    let bookedR = 0;
    let availableR = 0;
    for (let i = 0; i < rooms.length; i++) {
      if (rooms.at(i).status === "Booked") bookedR++;
      if (rooms.at(i).status === "Available") {
        availableR++;
      }
    }
    setAvailable(availableR);
    setBooked(bookedR);
  };

  const [selectedRoom, setSelectedRoom] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleRoomClick = (room) => {
    setSelectedRoom(room);
    setShowModal(true);
  };

  const confirmToggle = () => {
    const updatedRooms = rooms.map((r) =>
      r.roomNumber === selectedRoom.roomNumber
        ? {
            ...r,
            status: r.status === "Available" ? "Booked" : "Available",
          }
        : r
    );
    setRooms(updatedRooms);
    setShowModal(false);
    setSelectedRoom(null);
    countAvailable();
  };

  const cancelToggle = () => {
    setShowModal(false);
    setSelectedRoom(null);
    countAvailable();
  };

  return (
    <div className="rooms-wrapper">
      <div>
        <p> Available rooms: {available}</p>
        <p> Booked rooms: {booked}</p>
      </div>
      <div className="rooms-grid">
        {rooms.map((room) => (
          <div
            key={room.roomNumber}
            className={`room-card ${room.status.toLowerCase()}`}
            onClick={() => handleRoomClick(room)}>
            <div className="room-image">
              {/* 🖼️ Place your image here later */}
            </div>
            <div className="room-info">
              <h3>Room {room.roomNumber}</h3>
              <p>{room.status}</p>
            </div>
          </div>
        ))}
      </div>

      {showModal && selectedRoom && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>
              {selectedRoom.status === "Available"
                ? "Book this room?"
                : "Mark this room as available?"}
            </h2>
            <p>
              Are you sure you want to change the status of Room{" "}
              {selectedRoom.roomNumber}?
            </p>
            <div className="modal-actions">
              <button className="confirm" onClick={confirmToggle}>
                Yes
              </button>
              <button className="cancel" onClick={cancelToggle}>
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoomsGrid;
