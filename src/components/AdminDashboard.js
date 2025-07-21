import { useContext } from 'react';
import { LanguageContext } from './LanguageContext';
import { db } from '../data/db';

const AdminDashboard = () => {
  const { translations, language } = useContext(LanguageContext);
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-primary mb-4 font-noto-hindi">Admin Dashboard</h2>
      <div className="grid grid-cols-1 gap-4">
        <div className="border p-4 rounded">
          <h3 className="text-xl font-bold">{translations[language].routes}</h3>
          {db.routes.map((r) => (
            <p key={r.id}>
              {r.from} to {r.to} - Seats: {r.seats}
            </p>
          ))}
        </div>
        <div className="border p-4 rounded">
          <h3 className="text-xl font-bold">Analytics</h3>
          <p>Total Bookings: {db.bookings.length}</p>
          <p>
            Occupancy: {(db.bookings.length / (db.routes.length * 20) * 100).toFixed(2)}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;