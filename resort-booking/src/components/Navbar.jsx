import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        🌴 ResortEase
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/resorts">Resorts</Link>
        <Link to="/booking">Book Stay</Link>
        <Link to="/history">Booking History</Link>
      </div>
    </nav>
  );
}

export default Navbar;