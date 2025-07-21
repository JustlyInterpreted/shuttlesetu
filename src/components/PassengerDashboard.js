import { useState, useContext } from 'react';
import { LanguageContext } from './LanguageContext';
import Home from './Home';
import Booking from './Booking';
import TrackShuttle from './TrackShuttle';
import MyBookings from './MyBookings';

const PassengerDashboard = () => {
  const { translations, language } = useContext(LanguageContext);
  const [view, setView] = useState('home');

  return (
    <div className="p-4">
      <nav className="flex space-x-4 mb-4">
        <button className="text-primary font-bold" onClick={() => setView('home')}>
          {translations[language].home}
        </button>
        <button className="text-primary font-bold" onClick={() => setView('book')}>
          {translations[language].bookNow}
        </button>
        <button className="text-primary font-bold" onClick={() => setView('track')}>
          {translations[language].trackShuttle}
        </button>
        <button className="text-primary font-bold" onClick={() => setView('bookings')}>
          {translations[language].myBookings}
        </button>
      </nav>
      {view === 'home' && <Home />}
      {view === 'book' && <Booking setView={setView} />}
      {view === 'track' && <TrackShuttle />}
      {view === 'bookings' && <MyBookings />}
    </div>
  );
};

export default PassengerDashboard;