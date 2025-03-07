import { useDispatch } from "react-redux";
import { addRide } from "../redux/rideSlice";

const BookRide = () => {
  const dispatch = useDispatch();

  const handleBookRide = () => {
    const newRide = { id: Date.now(), location: "City Center", time: new Date().toLocaleTimeString() };
    dispatch(addRide(newRide));
    alert("Ride booked successfully!");
  };

  return (
    <div className="text-center mt-10">
      <h2 className="text-2xl font-semibold">Book a Ride</h2>
      <button
        onClick={handleBookRide}
        className="bg-blue-600 text-white px-4 py-2 mt-4 rounded"
      >
        Confirm Ride
      </button>
    </div>
  );
};

export default BookRide;
    