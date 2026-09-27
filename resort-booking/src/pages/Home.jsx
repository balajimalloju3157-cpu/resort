import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">

      <section className="hero-section">
        <div className="hero-content">

          <p className="hero-small">
            WELCOME TO RESORTEASE
          </p>

          <h1>
            Relax. Refresh.
            <br />
            <span>Reconnect.</span>
          </h1>

          <p>
            Discover beautiful resorts, comfortable rooms and
            peaceful getaways for your next memorable vacation.
          </p>

          <Link to="/resorts" className="hero-button">
            Explore Resorts
          </Link>

        </div>
      </section>

      <section className="about-section">

        <h2>Plan Your Perfect Getaway</h2>

        <p>
          ResortEase is a resort booking system that allows
          users to explore resorts, choose room types and
          reserve a comfortable stay easily.
        </p>

        <div className="feature-container">

          <div className="feature-card">
            <div className="feature-icon">🏝️</div>

            <h3>Beautiful Resorts</h3>

            <p>
              Explore peaceful and comfortable resort
              destinations.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🛏️</div>

            <h3>Comfortable Rooms</h3>

            <p>
              Choose a room type according to your needs.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📅</div>

            <h3>Easy Booking</h3>

            <p>
              Reserve your resort stay quickly and easily.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;