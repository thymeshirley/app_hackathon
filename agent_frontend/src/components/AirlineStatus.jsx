import React, { useState, useEffect } from "react";

const AirlineStatus = ({ response }) => {
  const [airlineStatus, setAirlineStatus] = useState({});
  const [selectedAirline, setSelectedAirline] = useState(null);

  useEffect(() => {
    if (response) {
      setAirlineStatus(response);
    }
  }, [response]);

  const handleClick = (airline) => {
    setSelectedAirline(airline);
  };

  return (
    <div id="airline-status" className="mt-4 flex flex-wrap justify-center">
      {airlineStatus &&
        Object.keys(airlineStatus).map((airline) => (
          <div
            key={airline}
            onClick={() => handleClick(airline)}
            className={`p-4 m-2 text-left font-semibold text-white text-xl w-full md:w-1/2 lg:w-1/4 xl:w-1/5 rounded-lg shadow-lg cursor-pointer ${
              airlineStatus[airline] === "SUCCESS"
                ? "bg-green-600"
                : "bg-red-600"
            }`}
          >
            {airline}
            {selectedAirline === airline && (
              <div className="mt-4">
                {/* Render more details about the airline here */}
                Status: {airlineStatus[airline]}
              </div>
            )}
          </div>
        ))}
    </div>
  );
};

export default AirlineStatus;
