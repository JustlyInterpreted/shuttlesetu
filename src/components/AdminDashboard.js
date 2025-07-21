import { useContext } from 'react';
      import { LanguageContext } from './LanguageContext';
      import { db } from '../data/db';

      const AdminDashboard = () => {
        const { translations, language } = useContext(LanguageContext);

        return (
          <div className="p-4">
            <h2 className="text-2xl font-bold text-primary mb-4 font-noto-hindi">
              {translations[language].adminDashboard}
            </h2>
            <h3 className="text-xl font-bold text-primary">Manage Routes</h3>
            <ul className="list-disc pl-5">
              {db.routes.map(r => (
                <li key={r.id}>{r.from} to {r.to} - ₹{r.fare}</li>
              ))}
            </ul>
            <h3 className="text-xl font-bold text-primary mt-4">Manage Shuttles</h3>
            <ul className="list-disc pl-5">
              {db.shuttles.map(s => (
                <li key={s.id}>{s.regNumber} (Seats: {s.seats})</li>
              ))}
            </ul>
            <h3 className="text-xl font-bold text-primary mt-4">Analytics</h3>
            <p>Total Bookings: {db.bookings.length}</p>
            <p>Total Feedback: {db.feedback.length}</p>
          </div>
        );
      };

      export default AdminDashboard;
