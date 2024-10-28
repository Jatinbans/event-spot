// import React, { useState, useEffect } from 'react';
// import { events } from './data';
// import EventModal from './EventModal';
// import Spinner from './Spinner';

// const EventList = () => {
//     const [search, setSearch] = useState("");
//     const [selectedEvent, setSelectedEvent] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         setTimeout(() => setLoading(false), 1000);
//     }, []);

//     const handleSearch = (e) => {
//         setSearch(e.target.value);
//     };

//     const filteredEvents = events.filter(
//         event => event.name.toLowerCase().includes(search.toLowerCase()) || event.location.toLowerCase().includes(search.toLowerCase())
//     );

//     if (loading) {
//         return <Spinner />;
//     }

//     return (
//         <div className="container">
//             <input type="text" className="search-bar" placeholder="Search events..." value={search} onChange={handleSearch} />
//             <div className="event-list">
//                 {filteredEvents.map(event => (
//                     <div key={event.id} className="event-card" onClick={() => setSelectedEvent(event)}>
//                         <h2>{event.name}</h2>
//                         <p>{event.date} - {event.location}</p>
//                     </div>
//                 ))}
//             </div>
//             {selectedEvent && <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />}
//         </div>
//     );
// };

// export default EventList;

import React, { useState, useEffect } from 'react';
import { events } from './data';
import EventModal from './EventModal';
import Spinner from './Spinner';

const EventList = () => {
    const [search, setSearch] = useState("");
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 1000);
    }, []);

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    const filteredEvents = events.filter(
        event =>
            event.name.toLowerCase().includes(search.toLowerCase()) ||
            event.location.toLowerCase().includes(search.toLowerCase())
    );

    if (loading) {
        return <Spinner />;
    }

    return (
        <div className="container">
            <input
                type="text"
                className="search-bar"
                placeholder="Search events..."
                value={search}
                onChange={handleSearch}
            />
            <div className="event-list">
                {filteredEvents.map(event => (
                    <div
                        key={event.id}
                        className="event-card"
                        onClick={() => setSelectedEvent(event)}
                    >
                        <h2>{event.name}</h2>
                        <p>{event.date} - {event.location}</p>
                    </div>
                ))}
            </div>
            {selectedEvent && (
                <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
            )}
        </div>
    );
};

export default EventList;
