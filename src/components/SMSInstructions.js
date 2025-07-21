import { useContext } from 'react';
     import { LanguageContext } from './LanguageContext';
     import { db } from '../data/db';
     import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
     import { faCommentSms } from '@fortawesome/free-solid-svg-icons';

     const SMSInstructions = () => {
       const { translations, language } = useContext(LanguageContext);

       return (
         <div className="p-4">
           <h2 className="text-2xl font-bold text-primary mb-4 font-noto-hindi">
             {translations[language].smsInstructions}
           </h2>
           <p className="mb-4">Send SMS to 12345 with format: SS[RouteID]</p>
           <p>Example: For Ranchi to Hazaribagh, send <strong>SSr1</strong></p>
           <p>Sample Response: "Booking confirmed for SSr1, Seat 10, Fare ₹150. Pay on boarding."</p>
           <h3 className="text-xl font-bold text-primary mt-4 font-noto-hindi">Route Codes</h3>
           <ul className="list-disc pl-5">
             {db.routes.map(r => (
               <li key={r.id}>SS{r.id}: {r.from} to {r.to}</li>
             ))}
           </ul>
           <h3 className="text-xl font-bold text-primary mt-4 font-noto-hindi">Offline Map</h3>
           <img src="https://via.placeholder.com/300?text=Offline+Map" alt="Offline Map" className="my-4" />
           <FontAwesomeIcon icon={faCommentSms} className="text-primary text-2xl" />
         </div>
       );
     };

     export default SMSInstructions;
