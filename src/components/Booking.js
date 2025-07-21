import { useState, useContext } from 'react';
     import { useNavigate } from 'react-router-dom';
     import { LanguageContext } from './LanguageContext';
     import { db } from '../data/db';
     import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
     import { faBus, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

     const Booking = () => {
       const { translations, language } = useContext(LanguageContext);
       const navigate = useNavigate();
       const [city, setCity] = useState('');
       const [route, setRoute] = useState(null);
       const [shuttle, setShuttle] = useState(null);
       const [selectedSeat, setSelectedSeat] = useState(null);
       const [paymentMethod, setPaymentMethod] = useState('');
       const [paymentStatus, setPaymentStatus] = useState(null);
       const [bookingDetails, setBookingDetails] = useState(null);

       const cities = [...new Set(db.routes.map(r => r.city))];
       const filteredRoutes = city ? db.routes.filter(r => r.city === city) : [];

       const handleCitySelect = (e) => {
         setCity(e.target.value);
         setRoute(null);
         setShuttle(null);
         setSelectedSeat(null);
       };

       const bookRoute = (routeId) => {
         const selectedRoute = db.routes.find(r => r.id === routeId);
         setRoute(selectedRoute);
         setShuttle(null);
         setSelectedSeat(null);
       };

       const selectShuttle = (shuttleId) => {
         const selectedShuttle = db.shuttles.find(s => s.id === shuttleId);
         setShuttle(selectedShuttle);
         setSelectedSeat(null);
       };

       const selectSeat = (seat) => {
         if (!db.seats[shuttle.id].booked.includes(seat)) {
           setSelectedSeat(seat);
         }
       };

       const handlePayment = () => {
         if (!selectedSeat) {
           alert(translations[language].selectSeat);
           return;
         }
         if (!paymentMethod) {
           alert(translations[language].selectPayment);
           return;
         }
         if (paymentMethod === 'cash') {
           const booking = {
             id: Math.random().toString(),
             routeId: route.id,
             shuttleId: shuttle.id,
             userId: 'p1',
             seat: selectedSeat,
             status: 'confirmed',
             paymentMethod,
             fare: route.fare
           };
           db.bookings.push(booking);
           setBookingDetails(booking);
           setPaymentStatus('success');
         } else {
           // Razorpay Integration (Demo Mode)
           alert('Razorpay integration in demo mode. Payment successful.');
           const booking = {
             id: Math.random().toString(),
             routeId: route.id,
             shuttleId: shuttle.id,
             userId: 'p1',
             seat: selectedSeat,
             status: 'confirmed',
             paymentMethod,
             fare: route.fare
           };
           db.bookings.push(booking);
           setBookingDetails(booking);
           setPaymentStatus('success');
         }
       };

       const cabPrice = route ? (route.fare * 1.5).toFixed(2) : 0;
       const savings = route ? (((route.fare * 1.5 - route.fare) / (route.fare * 1.5) * 100).toFixed(2)) : 0;

       if (paymentStatus === 'success') {
         return (
           <div className="text-center p-4">
             <FontAwesomeIcon icon={faCheckCircle} className="text-secondary text-4xl mb-4" />
             <h2 className="text-2xl font-bold text-primary mb-4 font-noto-hindi">
               {translations[language].confirmBooking}
             </h2>
             <p>Booking ID: {bookingDetails.id}</p>
             <p>Route: {route.from} to {route.to}</p>
             <p>Seat: {bookingDetails.seat}</p>
             <p>Fare: ₹{route.fare}</p>
             <p>Payment: {bookingDetails.paymentMethod}</p>
             <p>Shuttle: {shuttle.regNumber}</p>
             <p>Conductor: {db.drivers.find(d => d.id === shuttle.driverId).name}</p>
             <img src="https://via.placeholder.com/300?text=ShuttleSetu+Bus" alt="Shuttle" className="mx-auto my-4" />
             <button
               className="bg-secondary text-white px-4 py-2 rounded mt-4"
               onClick={() => navigate('/passenger')}
             >
               {translations[language].toDashboard}
             </button>
           </div>
         );
       }

       return (
         <div className="p-4">
           <h2 className="text-2xl font-bold text-primary mb-4 font-noto-hindi">
             {translations[language].bookNow}
           </h2>
           <div className="mb-4">
             <label className="block text-primary font-bold mb-2 font-noto-hindi">
               {translations[language].selectCity}
             </label>
             <select
               value={city}
               onChange={handleCitySelect}
               className="w-full p-2 border rounded"
             >
               <option value="">{translations[language].selectCity}</option>
               {cities.map(c => (
                 <option key={c} value={c}>{c}</option>
               ))}
             </select>
           </div>
           {city && (
             <div className="grid grid-cols-1 gap-4">
               {filteredRoutes.map(r => (
                 <div key={r.id} className="border p-4 rounded">
                   <p className="font-bold">{r.from} to {r.to} - ₹{r.fare}</p>
                   <p>Stops: {r.stops.join(' → ')}</p>
                   <p>Times: {r.times.join(' → ')}</p>
                   <p>Seats Available: {r.seats}</p>
                   <p>Cab Price: ₹{cabPrice} (Save {savings}%)</p>
                   <button
                     className="bg-secondary text-white px-4 py-2 rounded mt-2"
                     onClick={() => bookRoute(r.id)}
                   >
                     {translations[language].selectRoute}
                   </button>
                 </div>
               ))}
             </div>
           )}
           {route && (
             <div className="mt-4">
               <h3 className="text-xl font-bold text-primary font-noto-hindi">
                 {translations[language].selectShuttle}
               </h3>
               {route.shuttleIds.map(sid => {
                 const s = db.shuttles.find(sh => sh.id === sid);
                 return (
                   <button
                     key={s.id}
                     className="bg-primary text-white px-4 py-2 rounded m-2"
                     onClick={() => selectShuttle(s.id)}
                   >
                     {s.regNumber}
                   </button>
                 );
               })}
             </div>
           )}
           {shuttle && (
             <div className="mt-4">
               <h3 className="text-xl font-bold text-primary font-noto-hindi">
                 {translations[language].selectSeat}
               </h3>
               <div className="grid grid-cols-4 gap-2">
                 {Array.from({ length: db.seats[shuttle.id].total }, (_, i) => i + 1).map(seat => (
                   <button
                     key={seat}
                     className={`p-2 border rounded ${
                       db.seats[shuttle.id].booked.includes(seat)
                         ? 'bg-gray-300 cursor-not-allowed'
                         : selectedSeat === seat
                         ? 'bg-secondary text-white'
                         : 'bg-white'
                     }`}
                     onClick={() => selectSeat(seat)}
                     disabled={db.seats[shuttle.id].booked.includes(seat)}
                   >
                     {seat}
                   </button>
                 ))}
               </div>
               <div className="mt-4">
                 <h3 className="text-xl font-bold text-primary font-noto-hindi">
                   {translations[language].selectPayment}
                 </h3>
                 <select
                   value={paymentMethod}
                   onChange={e => setPaymentMethod(e.target.value)}
                   className="w-full p-2 border rounded"
                 >
                   <option value="">{translations[language].selectPayment}</option>
                   <option value="UPI">UPI</option>
                   <option value="card">Card</option>
                   <option value="wallet">Wallet</option>
                   <option value="cash">Cash on Boarding</option>
                 </select>
                 {paymentMethod === 'cash' && (
                   <p className="mt-2 text-primary">{translations[language].cashInstructions}</p>
                 )}
                 <button
                   className="bg-secondary text-white px-4 py-2 rounded mt-4"
                   onClick={handlePayment}
                 >
                   {translations[language].payNow}
                 </button>
               </div>
             </div>
           )}
         </div>
       );
     };

     export default Booking;
