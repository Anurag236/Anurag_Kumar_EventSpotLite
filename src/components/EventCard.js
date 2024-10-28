import React from "react";

function EventCard({ event, onClick }) {
    return (
        <div className="event-card" onClick={onClick}>
            <img src={event.image} alt={event.name} />
            <h3>{event.name}</h3>
            <p>{event.location}</p>
            <p>{event.date}</p>
            
        </div>
    );
}

export default EventCard;
