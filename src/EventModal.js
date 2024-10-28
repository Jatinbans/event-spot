import React from 'react';
import './Modal.css';

const EventModal = ({ event, onClose }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close-button" onClick={onClose}>&times;</span>
                <h2>{event.name}</h2>
                <p>{event.date} - {event.location}</p>
                <p>{event.description}</p>
                <img src={`/${event.image}`} alt={event.name} style={{ maxWidth: '100%' }} />
                <br />
                <button 
                    onClick={() => window.open(`https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.name)}&dates=${event.startDate}/${event.endDate}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}`, '_blank')} 
                    className="add-to-calendar-button"
                >
                    Add to Calendar
                </button>
            </div>
        </div>
    );
};


export default EventModal;
