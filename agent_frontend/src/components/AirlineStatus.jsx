import React, { useState, useEffect } from "react";

// Status bar component
const StatusBar = ({ airline, status, isSelected, onClick }) => {
  const getBackgroundColor = () => {
    switch (status) {
      case "SUCCESS":
        return "bg-green-600";
      case "FAILURE":
        return "bg-red-600";
      case "COMING SOON":
        return "bg-gray-600 bg-stripes relative";
      case "DEFAULT":
        return "bg-blue-600";
      case "IN PROGRESS":
        return "bg-moving-stripes";
      default:
        return "";
    }
  };
  return (
    <div
      onClick={onClick}
      className={`relative m-2 w-full md:w-1/2 lg:w-1/2 xl:w-1/2 rounded-lg shadow-lg cursor-pointer transform transition-all duration-500 ease-in-out overflow-hidden ${getBackgroundColor()} ${
        isSelected ? "scale-110" : ""
      }`}
    >
      <div className="p-4 text-left font-semibold text-white text-xl">
        {airline}
        {isSelected && (
          <div className="mt-4 transition-all duration-500 ease-in-out">
            {/* Render more details about the airline here */}
            Status: {status}
          </div>
        )}
      </div>
    </div>
  );
};

// Parent component
const AirlineStatus = ({ response }) => {
  const [airlineStatus, setAirlineStatus] = useState({});
  const [selectedAirline, setSelectedAirline] = useState(null);

  useEffect(() => {
    if (response) {
      setAirlineStatus(response);
    }
  }, [response]);

  const handleStatusBarClick = (airline) => {
    setSelectedAirline(airline);
  };

  return (
    <div id="airline-status" className="mt-4 flex flex-wrap justify-center">
      {airlineStatus &&
        Object.keys(airlineStatus).map((airline) => (
          <StatusBar
            key={airline}
            airline={airline}
            status={airlineStatus[airline]}
            isSelected={selectedAirline === airline}
            onClick={() => handleStatusBarClick(airline)}
          />
        ))}
    </div>
  );
};

export default AirlineStatus;
