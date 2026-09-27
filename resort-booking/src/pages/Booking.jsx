import { useState } from "react";
import { supabase } from "../supabase";

function Booking() {
  const [name, setName] = useState("");
  const [guests, setGuests] = useState("");
  const [roomType, setRoomType] = useState("");
  const [resort, setResort] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  async function handleBooking(e) {
    e.preventDefault();

    if (
      !name ||
      !guests ||
      !roomType ||
      !resort ||
      !checkIn ||
      !checkOut
    ) {
      alert("Please fill all the details.");
      return;
    }

    if (checkOut <= checkIn) {
      alert("Check-out date must be after check-in date.");
      return;
    }

    const { error } = await supabase
      .from("resort_bookings")
      .insert([
        {
          name: name,
          guests: Number(guests),
          room_type: roomType,
          resort: resort,
          check_in: checkIn,
          check_out: checkOut
        }
      ]);

    if (error) {
      console.error(error);
      alert("Booking failed. Please try again.");
      return;
    }

    alert("Resort booked successfully!");

    setName("");
    setGuests("");
    setRoomType("");
    setResort("");
    setCheckIn("");
    setCheckOut("");
  }

  return (
    <div className="booking-page">

      <div className="booking-header">

        <p>RESERVE YOUR STAY</p>

        <h1>Resort Booking</h1>

        <span>
          Fill in your details to reserve your perfect getaway.
        </span>

      </div>

      <div className="booking-container">

        <form
          className="booking-form"
          onSubmit={handleBooking}
        >

          <label htmlFor="name">
            Guest Name
          </label>

          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="guests">
            Number of Guests
          </label>

          <input
            id="guests"
            type="number"
            min="1"
            placeholder="Enter number of guests"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
          />

          <label htmlFor="roomType">
            Select Room Type
          </label>

          <select
            id="roomType"
            value={roomType}
            onChange={(e) => setRoomType(e.target.value)}
          >
            <option value="">
              -- Select Room Type --
            </option>

            <option value="Deluxe Room">
              Deluxe Room
            </option>

            <option value="Suite">
              Suite
            </option>

            <option value="Villa">
              Villa
            </option>
          </select>

          <label htmlFor="resort">
            Select Resort
          </label>

          <select
            id="resort"
            value={resort}
            onChange={(e) => setResort(e.target.value)}
          >
            <option value="">
              -- Select Resort --
            </option>

            <option value="Ocean Pearl Resort">
              Ocean Pearl Resort
            </option>

            <option value="Green Valley Resort">
              Green Valley Resort
            </option>

            <option value="Royal Lake Resort">
              Royal Lake Resort
            </option>
          </select>

          <label htmlFor="checkIn">
            Check-in Date
          </label>

          <input
            id="checkIn"
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
          />

          <label htmlFor="checkOut">
            Check-out Date
          </label>

          <input
            id="checkOut"
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
          />

          <button type="submit">
            Book Resort
          </button>

        </form>

        <section className="booking-details">

          <h2>Booking Details</h2>

          <div className="detail-item">
            <span>Guest Name</span>
            <strong>{name || "-"}</strong>
          </div>

          <div className="detail-item">
            <span>Guests</span>
            <strong>{guests || "-"}</strong>
          </div>

          <div className="detail-item">
            <span>Room Type</span>
            <strong>{roomType || "-"}</strong>
          </div>

          <div className="detail-item">
            <span>Resort</span>
            <strong>{resort || "-"}</strong>
          </div>

          <div className="detail-item">
            <span>Check-in</span>
            <strong>{checkIn || "-"}</strong>
          </div>

          <div className="detail-item">
            <span>Check-out</span>
            <strong>{checkOut || "-"}</strong>
          </div>

        </section>

      </div>

    </div>
  );
}

export default Booking;
