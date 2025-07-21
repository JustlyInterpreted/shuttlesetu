import { useState } from 'react';
import { LanguageContext } from './components/LanguageContext';
import Header from './components/Header';
import RoleSelection from './components/RoleSelection';
import PassengerDashboard from './components/PassengerDashboard';
import DriverDashboard from './components/DriverDashboard';
import AdminDashboard from './components/AdminDashboard';

const App = () => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [language, setLanguage] = useState('en');

  const translations = {
    en: {
      welcome: 'Welcome to ShuttleSetu',
      selectRole: 'Select Role',
      passenger: 'Passenger',
      driver: 'Driver',
      admin: 'Admin',
      bookNow: 'Book Now',
      trackShuttle: 'Track Shuttle',
      myBookings: 'My Bookings',
      payNow: 'Pay Now',
      confirmBooking: 'Confirm Booking',
      boarding: 'Boarding',
      feedback: 'Share Feedback',
      routes: 'Routes',
      home: 'Home',
    },
    hi: {
      welcome: 'शटलसेतु में आपका स्वागत है',
      selectRole: 'भूमिका चुनें',
      passenger: 'यात्री',
      driver: 'चालक',
      admin: 'प्रशासक',
      bookNow: 'अभी बुक करें',
      trackShuttle: 'शटल ट्रैक करें',
      myBookings: 'मेरी बुकिंग',
      payNow: 'अब भुगतान करें',
      confirmBooking: 'बुकिंग की पुष्टि करें',
      boarding: 'बोर्डिंग',
      feedback: 'प्रतिक्रिया साझा करें',
      routes: 'मार्ग',
      home: 'होम',
    },
  };

  const login = (role) => {
    setUser({ id: Math.random().toString(), role });
    setRole(role);
  };

  const logout = () => {
    setUser(null);
    setRole(null);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations }}>
      <div className="bg-white text-gray-800 min-h-screen">
        {!user ? (
          <RoleSelection login={login} />
        ) : (
          <div>
            <Header logout={logout} />
            {role === 'passenger' && <PassengerDashboard />}
            {role === 'driver' && <DriverDashboard />}
            {role === 'admin' && <AdminDashboard />}
          </div>
        )}
      </div>
    </LanguageContext.Provider>
  );
};

export default App;