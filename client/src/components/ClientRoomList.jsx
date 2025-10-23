import React, { useState } from "react";
import "./ClientRoomList.scss";

const ClientRoomList = ({ rooms }) => {
  const [filterStatus, setFilterStatus] = useState("All");
  const [sortPrice, setSortPrice] = useState("none");
  const [modalRoom, setModalRoom] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Filter rooms
  const filteredRooms = rooms.filter((room) => {
    if (filterStatus === "All") return true;
    return room.status === filterStatus;
  });

  // Sort rooms
  const sortedRooms = [...filteredRooms].sort((a, b) => {
    if (sortPrice === "lowToHigh") return a.price - b.price;
    if (sortPrice === "highToLow") return b.price - a.price;
    return 0;
  });

  // Modal navigation
  const handlePrevImage = () => {
    if (!modalRoom) return;
    setCurrentImageIndex((prev) =>
      prev === 0 ? modalRoom.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    if (!modalRoom) return;
    setCurrentImageIndex((prev) =>
      prev === modalRoom.images.length - 1 ? 0 : prev + 1
    );
  };

  const handleCloseModal = () => {
    setModalRoom(null);
    setCurrentImageIndex(0);
  };

  return (
    <div className="client-rooms-wrapper">
      {/* Filter & Sort Controls */}
      <div className="filter-controls">
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option value="All">All Rooms</option>
          <option value="Available">Available Only</option>
          <option value="Booked">Booked Only</option>
        </select>

        <select
          value={sortPrice}
          onChange={(e) => setSortPrice(e.target.value)}
        >
          <option value="none">Sort by Price</option>
          <option value="lowToHigh">Low → High</option>
          <option value="highToLow">High → Low</option>
        </select>
      </div>

      {/* Rooms Grid */}
      <div className="client-rooms-grid">
        {sortedRooms.map((room) => (
          <div key={room.roomNumber} className="client-room-card">
            <img
              src={room.images[0]}
              alt={`Room ${room.roomNumber}`}
              className="client-room-image"
              onClick={() => setModalRoom(room)}
            />
            <div className="client-room-info">
              <h3>Room {room.roomNumber}</h3>
              <p>
                <span
                  className={
                    room.status === "Available" ? "available" : "booked"
                  }
                >
                  {room.status}
                </span>
              </p>
              <p>Type: {room.type}</p>
              <p>R{room.price} / night</p>
              <p className="desc">{room.description}</p>
              <button
                className="book-btn"
                disabled={room.status !== "Available"}
              >
                {room.status === "Available" ? "Book Now" : "Unavailable"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Viewer */}
      {modalRoom && (
        <div className="image-modal-overlay">
          <div className="image-modal">
            <button className="close-btn" onClick={handleCloseModal}>
              &times;
            </button>
            <img
              key={currentImageIndex}
              src={modalRoom.images[currentImageIndex]}
              alt={`Room ${modalRoom.roomNumber}`}
            />
            <div className="navigation">
              <button onClick={handlePrevImage}>⟨</button>
              <button onClick={handleNextImage}>⟩</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClientRoomList;
