import Info from "./Info";
import WeatherMap from "./WeatherMap";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));

const formatDat = (date) =>
  new Intl.DateTimeFormat("en", {
    weekday: "long",
  }).format(new Date(date));

function WeatherInfo({ dataa, setQuery, lat, long, forecast }) {
  const { location, current } = dataa;
  console.log(dataa);

  return (
    <div>
      <div className="flex justify-between p-5 pl-10  bg-blue-400 text-white text-[1.2rem] flex-col gap-[50px] rounded-xl ">
        <div className="flex gap-[10px] flex-col">
          <h1 className="text-[3rem] font-bold">
            {formatDat(location?.localtime || null)}
          </h1>
          <p className="text-[1rem] font-medium">
            {formatDate(location?.localtime || null)}
          </p>
          <p className="text-[0.9rem] font-normal">
            {location?.name || "--"}, <span>{location?.country || "--"}</span>
          </p>
        </div>

        <div>
          <img src={current?.condition?.icon} alt={location?.country} />

          <p className="text-[3.5rem] font-bold">
            {`${current?.temp_c || "--"} `}&deg;C
          </p>
          <p className="font-semibold">{` ${
            current?.condition?.text || "--"
          }`}</p>
        </div>
      </div>
      <Info dataa={dataa} setQuery={setQuery} forecast={forecast} />
      <div className="mt-3">
        <WeatherMap lat={lat} long={long} />
      </div>
    </div>
  );
}

export default WeatherInfo;
