import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setEvents } from "../redux/eventSlice";
import EventList from "../components/EventList";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const eventData = [
      { id: 1, name: "Tech Conference", date: "March 15, 2025", venue: "Hall A", availableSeats: 10 },
      { id: 2, name: "Music Fest", date: "March 20, 2025", venue: "Outdoor Arena", availableSeats: 5 },
      { id: 3, name: "Startup Pitch", date: "April 10, 2025", venue: "Auditorium", availableSeats: 8 },
    ];
    
    dispatch(setEvents(eventData));
  }, [dispatch]);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Event Booking System</h1>
      <EventList />
    </div>
  );
};

export default Home;
