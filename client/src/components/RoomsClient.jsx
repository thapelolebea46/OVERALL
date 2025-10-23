import React, { useState } from "react";
import "./RoomsClient.scss";

const RoomsClient = ({ rooms }) => {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openImageModal = (room, index = 0) => {
    setSelectedRoom(room);
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedRoom(null);
    setSelectedImageIndex(0);
  };

  const nextImage = () => {
    if (!selectedRoom) return;
    setSelectedImageIndex(
      (selectedImageIndex + 1) % selectedRoom.images.length
    );
  };

  const prevImage = () => {
    if (!selectedRoom) return;
    setSelectedImageIndex(
      (selectedImageIndex - 1 + selectedRoom.images.length) % selectedRoom.images.length
    );
  };

  return (
    <div className="client-rooms-wrapper">
      <div className="client-rooms-grid">
        {rooms.map((room) => (
          <div key={room.roomNumber} className="client-room-card">
            <img
              className="client-room-image"
              src={room.images[0]}
              alt={`Room ${room.roomNumber}`}
              onClick={() => openImageModal(room)}
            />
            <div className="client-room-info">
              <h3>Room {room.roomNumber}</h3>
              <p>Status: <span className={room.status.toLowerCase()}>{room.status}</span></p>
              <p>Type: {room.type}</p>
              
              <p>{room.description}</p>
              <button
                className="book-btn"
                disabled={room.status.toLowerCase() === "booked"}
              >
                {room.status.toLowerCase() === "booked" ? "Booked" : "Book Now"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Image Modal */}
      {selectedRoom && (
        <div className="image-modal-overlay" onClick={closeModal}>
          <div className="image-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>×</button>
            <img
              src={selectedRoom.images[selectedImageIndex]}
              alt={`Room ${selectedRoom.roomNumber}`}
            />
            {selectedRoom.images.length > 1 && (
              <div className="navigation">
                <button onClick={prevImage}>‹</button>
                <button onClick={nextImage}>›</button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default RoomsClient;
