import { useState, useContext } from 'react';
import { LanguageContext } from './LanguageContext';
import { db } from '../data/db';

const Booking = ({ setView }) => {
  const { translations, language } = useContext(LanguageContext);
  const [route, setRoute] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [bookingDetails, setBookingDetails] = useState(null);

  const bookRoute = (routeId) => {
    const selectedRoute = db.routes.find((r) => r.id === routeId);
    setRoute(selectedRoute);
  };

  const initiatePayment = () => {
    const options = {
      key: 'rzp_test_1234567890',
      amount: route.fare * 100,
      currency: 'INR',
      name: 'ShuttleSetu',
      description: `Booking for ${route.from} to ${route.to}`,
      handler: (response) => {
        setPaymentStatus('success');
        const booking = {
          id: Math.random().toString(),
          routeId: route.id,
          userId: 'user1',
          seat: Math.floor(Math.random() * route.seats) + 1,
          status: 'confirmed',
        };
        db.bookings.push(booking);
        setBookingDetails(booking);
      },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const smsBooking = () => {
    alert(`SMS Booking: Send code SS${route.id} to 12345`);
  };

  if (paymentStatus === 'success') {
    return (
      <div className="text-center">
        <h2 className="text-2xl font-bold text-primary mb-4 font-noto-hindi">
          {translations[language].confirmBooking}
        </h2>
        <p>Booking ID: {bookingDetails.id}</p>
        <p>Route: {route.from} to {route.to}</p>
        <p>Seat: {bookingDetails.seat}</p>
        <p>Fare: ₹{route.fare}</p>
        <img src="https://via.placeholder.com/300" alt="Shuttle" className="mx-auto my-4" />
        <p>Bus Registration: JH01AB1234</p>
        <p>Conductor: John Doe</p>
        <button
          className="bg-secondary text-white px-4 py-2 rounded mt-4"
          onClick={() => setView('track')}
        >
          {translations[language].trackShuttle}
        </button>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-primary mb-4 font-noto-hindi">
        {translations[language].bookNow}
      </h2>
      <div className="grid grid-cols-1 gap-4">
        {db.routes.map((r) => (
          <div key={r.id} className="border p-4 rounded">
            <p>
              {r.from} to {r.to} - ₹{r.fare}
            </p>
            <p>Stops: {r.stops.join(' -> ')}</p>
            <p>Times: {r.times.join(' -> ')}</p>
            <p>Seats Available: {r.seats}</p>
            <p>
              Cab Price: ₹{r.fare * 1.5} (Save {((r.fare * 1.5 - r.fare) / (r.fare * 1.5) * 100).toFixed(2)}%)
            </p>
            <button
              className="bg-secondary text-white px-4 py-2 rounded mt-2"
              onClick={() => bookRoute(r.id)}
            >
              {translations[language].bookNow}
            </button>
            <button
              className="bg-primary text-white px-4 py-2 rounded mt-2 ml-2"
              onClick={smsBooking}
            >
              SMS Booking
            </button>
          </div>
        ))}
      </div>
      {route && (
        <div className="mt-4">
          <h3 className="text-xl font-bold">Payment</h3>
          <button
            className="bg-secondary text-white px-4 py-2 rounded"
            onClick={initiatePayment}
          >
            {translations[language].payNow}
          </button>
        </div>
      )}
    </div>
  );
};

export default Booking;
