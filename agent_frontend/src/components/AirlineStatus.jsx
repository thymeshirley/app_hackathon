import React, { useState, useEffect } from "react";

// Status bar component
const StatusBar = ({
  airline,
  status,
  isSelected,
  onClick,
  frequentFlyerNumber,
}) => {
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
      case "WORKING...":
        return "bg-yellow-600"; // Choose the appropriate color
      default:
        return "";
    }
  };

  const getAnimationClass = () => {
    if (isSelected && status === "WORKING...") {
      return "animate-pulse";
    }
    return "";
  };

  return (
    <div
      onClick={onClick}
      className={`relative m-2 w-full md:w-1/2 lg:w-1/2 xl:w-1/2 rounded-lg shadow-lg cursor-pointer transform transition-all duration-500 ease-in-out overflow-hidden ${getBackgroundColor()} ${
        isSelected ? "scale-110" : ""
      } ${getAnimationClass()}`}
    >
      <div className="p-4 text-left font-semibold text-white text-xl">
        {airline}
        {isSelected && (
          <div className="mt-4 transition-all duration-500 ease-in-out">
            {/* Render more details about the airline here */}

            {!!frequentFlyerNumber
              ? `Frequent Flyer Number: ${frequentFlyerNumber}`
              : `Status: ${status}`}
          </div>
        )}
      </div>
    </div>
  );
};

// Parent component
// Parent component
const AirlineStatus = ({ response, frequentFlyerNumbers }) => {
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
            frequentFlyerNumber={frequentFlyerNumbers[airline]} // pass the frequentFlyerNumber prop
          />
        ))}
    </div>
  );
};
export default AirlineStatus;
