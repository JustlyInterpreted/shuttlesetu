import { useContext } from 'react';
import { LanguageContext } from './LanguageContext';
import { db } from '../data/db';

const DriverDashboard = () => {
  const { translations, language } = useContext(LanguageContext);
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-primary mb-4 font-noto-hindi">Driver Dashboard</h2>
      <div className="border p-4 rounded">
        <p>Assigned Route: Ranchi to Hazaribagh</p>
        <p>Current Stop: {db.shuttles[0].currentStop}</p>
        <p>Passengers: {db.bookings.filter((b) => b.routeId === 1).length}</p>
        <div className="h-64 bg-gray-200 flex items-center justify-center">
          <p>Map Placeholder (Passenger Locations)</p>
        </div>
      </div>
    </div>
  );
};

export default DriverDashboard;
