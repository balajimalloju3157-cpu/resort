import { useEffect, useState } from "react";
import { supabase } from "../supabase";

function BookingHistory() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  async function fetchBookings() {
    const { data, error } = await supabase
      .from("resort_bookings")
      .select("*")
      .order("created_at", {
        ascending: false
      });

    if (error) {
      console.error(error);
      return;
    }

    setBookings(data);
  }

  return (
    <div className="history-page">

      <div className="booking-header">

        <p>YOUR RESERVATIONS</p>

        <h1>Resort Booking History</h1>

        <span>
          View your previous resort bookings.
        </span>

      </div>

      {bookings.length === 0 ? (

        <div className="no-bookings">

          <h2>No bookings yet</h2>

          <p>
            Your resort bookings will appear here.
          </p>

        </div>

      ) : (

        <div className="history-grid">

          {bookings.map((booking) => (

            <div
              className="history-card"
              key={booking.id}
            >

              <h2>{booking.resort}</h2>

              <p>
                <strong>Guest:</strong>{" "}
                {booking.name}
              </p>

              <p>
                <strong>Guests:</strong>{" "}
                {booking.guests}
              </p>

              <p>
                <strong>Room:</strong>{" "}
                {booking.room_type}
              </p>

              <p>
                <strong>Check-in:</strong>{" "}
                {booking.check_in}
              </p>

              <p>
                <strong>Check-out:</strong>{" "}
                {booking.check_out}
              </p>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default BookingHistory;