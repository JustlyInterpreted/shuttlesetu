import { useContext } from 'react';
import { LanguageContext } from './LanguageContext';

const Home = () => {
  const { translations, language } = useContext(LanguageContext);
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold text-primary mb-4 font-noto-hindi">
        {translations[language].welcome}
      </h2>
      <p className="text-lg font-noto-hindi">
        घर से दूर, घर सा सुकून - अब हर शहर, अपने घर जैसा
      </p>
      <img src="https://via.placeholder.com/300" alt="Shuttle" className="mx-auto my-4" />
    </div>
  );
};

export default Home;
