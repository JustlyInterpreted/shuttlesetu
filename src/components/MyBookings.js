import { useContext } from 'react';
import { LanguageContext } from './LanguageContext';
import { db } from '../data/db';

const MyBookings = () => {
  const { translations, language } = useContext(LanguageContext);
  return (
    <div>
      <h2 className="text-2xl font-bold text-primary mb-4 font-noto-hindi">
        {translations[language].myBookings}
      </h2>
      {db.bookings.map((b) => (
        <div key={b.id} className="border p-4 rounded mb-4">
          <p>Booking ID: {b.id}</p>
          <p>
            Route: {db.routes.find((r) => r.id === b.routeId).from} to{' '}
            {db.routes.find((r) => r.id === b.routeId).to}
          </p>
          <p>Seat: {b.seat}</p>
          <button className="bg-secondary text-white px-4 py-2 rounded mt-2">
            {translations[language].feedback}
          </button>
        </div>
      ))}
    </div>
  );
};

export default MyBookings;
