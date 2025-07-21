import { useEffect, useContext } from 'react';
import { LanguageContext } from './LanguageContext';
import { db } from '../data/db';

const TrackShuttle = () => {
  const { translations, language } = useContext(LanguageContext);
  useEffect(() => {
    const map = {
      display: () => console.log('Map loaded with shuttle position'),
    };
    map.display();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold text-primary mb-4 font-noto-hindi">
        {translations[language].trackShuttle}
      </h2>
      <div className="h-64 bg-gray-200 flex items-center justify-center">
        <p>Map Placeholder (Shuttle at {db.shuttles[0].currentStop})</p>
      </div>
      <p>Passenger Location: Highlighted on Map</p>
      <p>Shuttle Registration: {db.shuttles[0].regNumber}</p>
    </div>
  );
};

export default TrackShuttle;