import React, { useState, useEffect } from 'react';

interface AirlineStatusProps {
  response: { [key: string]: string };
}

const AirlineStatus: React.FC<AirlineStatusProps> = ({ response }) => {
  const [airlineStatus, setAirlineStatus] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    setAirlineStatus(response);
  }, [response]);

  return (
    <div id="airline-status" className="mt-4">
      {Object.keys(airlineStatus).map((airline) => (
        <div
          key={airline}
          className={`p-4 m-2 text-center ${
            airlineStatus[airline] === 'SUCCESS' ? 'bg-green-500' : 'bg-red-500'
          }`}
        >
          {airline}
        </div>
      ))}
    </div>
  );
};

export default AirlineStatus;