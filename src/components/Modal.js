import React from "react";

function Modal({ event, onClose }) {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose}>X</button>
                <h2>{event.name}</h2>
                <img src={event.image} alt={event.name} />
                <p>{event.description}</p>
                <p><strong>Location:</strong> {event.location}</p>
                <p><strong>Date:</strong> {event.date}</p>
                
            </div>
        </div>
    );
}

export default Modal;
