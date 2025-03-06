import { useDispatch } from "react-redux";
import { bookEvent } from "../redux/eventSlice";
import { useState } from "react";

const Event = ({ event }) => {
  const dispatch = useDispatch();
  const [seatsLeft, setSeatsLeft] = useState(event.availableSeats);

  const handleBooking = () => {
    if (seatsLeft > 0) {
      dispatch(bookEvent(event.id));
      setSeatsLeft(seatsLeft - 1);
    }
  };

  return (
    <div className="border p-4 rounded shadow-lg mb-4">
      <h3 className="text-xl font-bold">{event.name}</h3>
      <p className="text-gray-600">{event.date} | {event.venue}</p>
      <p className="text-gray-700 mt-2">Available Seats: {seatsLeft}</p>
      <button
        onClick={handleBooking}
        disabled={seatsLeft === 0}
        className={`mt-2 px-4 py-2 rounded ${
          seatsLeft === 0 ? "bg-gray-400" : "bg-blue-500 text-white"
        }`}
      >
        {seatsLeft === 0 ? "Sold Out" : "Book Now"}
      </button>
    </div>
  );
};

export default Event;
