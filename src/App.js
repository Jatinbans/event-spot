import React from 'react';
import EventList from './EventList';
import './App.css';
import './Modal.css';
import './Spinner.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Event Listing</h1>
            </header>
            <EventList />
        </div>
    );
}

export default App;
