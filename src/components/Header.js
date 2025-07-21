import { useContext } from 'react';
import { LanguageContext } from './LanguageContext';

const Header = ({ logout }) => {
  const { language, setLanguage, translations } = useContext(LanguageContext);
  return (
    <header className="bg-primary text-white p-4 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <img src="https://via.placeholder.com/40" alt="ShuttleSetu Logo" className="h-10" />
        <h1 className="text-xl font-bold">{translations[language].welcome}</h1>
      </div>
      <div className="flex space-x-4">
        <select
          className="bg-secondary text-white p-2 rounded"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="en">English</option>
          <option value="hi">हिन्दी</option>
        </select>
        <button className="bg-secondary px-4 py-2 rounded" onClick={logout}>
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;