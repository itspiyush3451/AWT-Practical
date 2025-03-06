import { useSelector } from "react-redux";

const RideHistory = () => {
  const rides = useSelector((state) => state.ride.rides);

  return (
    <div className="text-center mt-10">
      <h2 className="text-2xl font-semibold">Ride History</h2>
      {rides.length === 0 ? (
        <p>No rides booked yet.</p>
      ) : (
        <ul className="mt-4">
          {rides.map((ride) => (
            <li key={ride.id} className="border p-2 my-2">
              Ride to {ride.location} at {ride.time}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RideHistory;
