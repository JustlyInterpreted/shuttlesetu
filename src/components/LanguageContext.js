import { createContext, useState } from 'react';

     export const LanguageContext = createContext();

     export const LanguageProvider = ({ children }) => {
       const [language, setLanguage] = useState('en');

       const translations = {
         en: {
           bookNow: 'Book Now',
           selectCity: 'Select City',
           selectRoute: 'Select Route',
           selectShuttle: 'Select Shuttle',
           selectSeat: 'Select Seat',
           selectPayment: 'Select Payment Method',
           payNow: 'Pay Now',
           confirmBooking: 'Booking Confirmed',
           toDashboard: 'Go to Dashboard',
           cashInstructions: 'Pay the fare to the conductor upon boarding.',
           trackShuttle: 'Track Shuttle',
           myBookings: 'My Bookings',
           feedback: 'Feedback',
           smsInstructions: 'SMS Instructions'
         },
         hi: {
           bookNow: 'अब बुक करें',
           selectCity: 'शहर चुनें',
           selectRoute: 'रूट चुनें',
           selectShuttle: 'शटल चुनें',
           selectSeat: 'सीट चुनें',
           selectPayment: 'भुगतान विधि चुनें',
           payNow: 'अब भुगतान करें',
           confirmBooking: 'बुकिंग की पुष्टि',
           toDashboard: 'डैशबोर्ड पर जाएं',
           cashInstructions: 'बोर्डिंग के समय कंडक्टर को किराया दें।',
           trackShuttle: 'शटल ट्रैक करें',
           myBookings: 'मेरी बुकिंग्स',
           feedback: 'फीडबैक',
           smsInstructions: 'एसएमएस निर्देश'
         }
       };

       return (
         <LanguageContext.Provider value={{ translations, language, setLanguage }}>
           {children}
         </LanguageContext.Provider>
       );
     };
