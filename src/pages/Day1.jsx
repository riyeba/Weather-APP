import React from "react";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    hour: "numeric",
  }).format(new Date(date));

const formatDater = (date) =>
  new Intl.DateTimeFormat("en", {
    weekday: "long",
  }).format(new Date(date));

const formatDaterr = (date) =>
  new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));

function Day1({ data, day = 0 }) {
  const { forecast } = data;
  const showforecast = forecast?.forecastday;
  console.log(showforecast);
  console.log(forecast);

  const dater = new Date();
  const dater1 = dater.setDate(dater.getDate() + day);

  return (
    <div className="p-6">
      <p className="text-center text-[1.5rem] pb-2">{formatDater(dater1)}</p>

      <p>
        {showforecast
          ?.map((mov, i) => mov.hour)
          [day].map((mov, i) => (
            <table className="shadow-lg bg-white border-collapse w-[100%]">
              <tr>
                <th class="bg-blue-100 border text-left px-8 py-4">
                  {formatDate(mov.time)} <br />
                  {formatDaterr(mov.time)}
                </th>
                <th class="bg-blue-100 border text-left px-8 py-4">
                  {`${mov.temp_c}`}&deg;C
                </th>
                <th class="bg-blue-100 border text-left px-8 py-4">
                  <img src={mov.condition.icon} alt={mov.time} />
                </th>
              </tr>

              <tr class="hover:bg-gray-50">
                <p class="px-8 py-4">{`Humidity: ${mov.humidity}%`}</p>
                <p class="px-8 py-4">{`Condition: ${mov.condition.text}`}</p>
              </tr>
            </table>
          ))}
      </p>
    </div>
  );
}

export default Day1;
