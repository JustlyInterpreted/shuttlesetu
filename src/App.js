import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
     import { LanguageProvider } from './components/LanguageContext';
     import Header from './components/Header';
     import Home from './components/Home';
     import Booking from './components/Booking';
     import PassengerDashboard from './components/PassengerDashboard';
     import DriverDashboard from './components/DriverDashboard';
     import AdminDashboard from './components/AdminDashboard';
     import SMSInstructions from './components/SMSInstructions';

     function App() {
       return (
         <LanguageProvider>
           <Router basename="/shuttlesetu">
             <div className="min-h-screen bg-white">
               <Header />
               <main className="container mx-auto p-4">
                 <Routes>
                   <Route path="/" element={<Home />} />
                   <Route path="/booking" element={<Booking />} />
                   <Route path="/passenger" element={<PassengerDashboard />} />
                   <Route path="/driver" element={<DriverDashboard />} />
                   <Route path="/admin" element={<AdminDashboard />} />
                   <Route path="/sms" element={<SMSInstructions />} />
                 </Routes>
               </main>
             </div>
           </Router>
         </LanguageProvider>
       );
     }

     export default App;
