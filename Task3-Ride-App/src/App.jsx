import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BookRide from "./pages/BookRide";
import RideHistory from "./pages/RideHistory";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book-ride" element={<BookRide />} />
        <Route path="/ride-history" element={<RideHistory />} />
      </Routes>
    </Router>
  );
};

export default App;
