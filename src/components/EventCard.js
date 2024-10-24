import React from 'react';
import EventSec from '../sections/EventSec'; // Adjust the import path as necessary
// import { EventsList } from '../assets/Event_data'; // Import your event data
 import { EventsList } from '../assets/Events_data';
function Event() {
  return (
    <div>
      <EventSec events={EventsList} />
    </div>
  );
}

export default Event;