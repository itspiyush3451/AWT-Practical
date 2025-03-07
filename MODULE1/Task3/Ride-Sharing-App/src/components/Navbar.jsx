import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex gap-4">
      <Link to="/" className="hover:underline">Home</Link>
      <Link to="/book-ride" className="hover:underline">Book Ride</Link>
      <Link to="/ride-history" className="hover:underline">Ride History</Link>
    </nav>
  );
};

export default Navbar;
