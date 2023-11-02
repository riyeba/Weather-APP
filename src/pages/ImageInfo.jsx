import React from "react";

function ImageInfo({ data, result = 0, ico = 0 }) {
  const showforecast = data?.forecast?.forecastday;
  console.log(data);
  return (
    <div>
      <img
        src={showforecast?.map((mov, i) => mov.day)[ico].condition.icon}
        alt="i"
      />
      <p>{showforecast?.map((mov) => mov.day)[result].condition.text}</p>
    </div>
  );
}

export default ImageInfo;
