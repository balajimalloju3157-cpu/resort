import { Link } from "react-router-dom";

const resorts = [
  {
    name: "Ocean Pearl Resort",
    location: "Goa",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80",
    description:
      "A relaxing beachfront resort with beautiful rooms and peaceful surroundings."
  },
  {
    name: "Green Valley Resort",
    location: "Coorg",
    image:
      "https://images.unsplash.com/photo-1582610116397-edb318620f90?auto=format&fit=crop&w=900&q=80",
    description:
      "Enjoy nature, fresh air and a comfortable stay surrounded by greenery."
  },
  {
    name: "Royal Lake Resort",
    location: "Udaipur",
    image:
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=900&q=80",
    description:
      "A premium resort offering a peaceful stay with beautiful scenic views."
  }
];

function Resorts() {
  return (
    <div className="resorts-page">

      <div className="page-heading">

        <p>DISCOVER YOUR DESTINATION</p>

        <h1>Our Resorts</h1>

        <span>
          Choose a beautiful place for your next relaxing getaway.
        </span>

      </div>

      <div className="resort-grid">

        {resorts.map((resort) => (
          <div className="resort-card" key={resort.name}>

            <img
              src={resort.image}
              alt={resort.name}
            />

            <div className="resort-card-content">

              <h2>{resort.name}</h2>

              <p className="resort-location">
                📍 {resort.location}
              </p>

              <p>
                {resort.description}
              </p>

              <Link
                to="/booking"
                className="book-button"
              >
                Book This Resort
              </Link>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Resorts;