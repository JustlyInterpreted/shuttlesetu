import { useContext } from 'react';
     import { Link } from 'react-router-dom';
     import { LanguageContext } from './LanguageContext';
     import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
     import { faBus } from '@fortawesome/free-solid-svg-icons';

     const Header = () => {
       const { language, setLanguage } = useContext(LanguageContext);

       return (
         <header className="bg-primary text-white p-4 flex justify-between items-center">
           <div className="flex items-center">
             <FontAwesomeIcon icon={faBus} className="text-2xl mr-2" />
             <Link to="/" className="text-2xl font-bold font-noto-hindi">ShuttleSetu</Link>
           </div>
           <nav>
             <Link to="/" className="mx-2">Home</Link>
             <Link to="/booking" className="mx-2">Book</Link>
             <Link to="/passenger" className="mx-2">Passenger</Link>
             <Link to="/driver" className="mx-2">Driver</Link>
             <Link to="/admin" className="mx-2">Admin</Link>
             <Link to="/sms" className="mx-2">SMS</Link>
             <select
               value={language}
               onChange={e => setLanguage(e.target.value)}
               className="ml-4 p-1 bg-white text-primary rounded"
             >
               <option value="en">English</option>
               <option value="hi">हिन्दी</option>
             </select>
           </nav>
         </header>
       );
     };

     export default Header;
