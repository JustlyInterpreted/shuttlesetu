import { useContext } from 'react';
import { LanguageContext } from './LanguageContext';

const RoleSelection = ({ login }) => {
  const { translations, language } = useContext(LanguageContext);
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-primary">
      <h1 className="text-3xl text-white mb-8 font-noto-hindi">{translations[language].selectRole}</h1>
      <div className="space-y-4">
        <button
          className="bg-secondary text-white px-6 py-3 rounded-lg text-lg"
          onClick={() => login('passenger')}
        >
          {translations[language].passenger}
        </button>
        <button
          className="bg-secondary text-white px-6 py-3 rounded-lg text-lg"
          onClick={() => login('driver')}
        >
          {translations[language].driver}
        </button>
        <button
          className="bg-secondary text-white px-6 py-3 rounded-lg text-lg"
          onClick={() => login('admin')}
        >
          {translations[language].admin}
        </button>
      </div>
    </div>
  );
};

export default RoleSelection;
