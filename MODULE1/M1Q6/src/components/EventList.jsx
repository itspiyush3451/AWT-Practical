import { useSelector } from "react-redux";
import Event from "./Event";

const EventList = () => {
  const events = useSelector((state) => state.events.events);

  return (
    <div className="p-4">
      {events.length === 0 ? <p>No events available.</p> : events.map((event) => <Event key={event.id} event={event} />)}
    </div>
  );
};

export default EventList;
