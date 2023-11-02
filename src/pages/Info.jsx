import NavBar from "./Navbar";

function Info({ dataa, setQuery, forecast }) {
  const { location, current } = dataa;
  console.log(dataa);

  return (
    <div className=" flex flex-col justify-between p-7 bg-slate-800">
      <div className="flex justify-between p-4 text-white">
        <h1 className="text-[1.3rem] font-semibold">Humidity</h1>
        <p className="text-[1.3rem]">{`${current?.humidity || "--"}%`}</p>
      </div>
      <div className="flex justify-between p-4 text-white">
        <h1 className="text-[1.3rem] font-semibold">Wind Direction</h1>
        <p className="text-[1.3rem]">{` ${current?.wind_dir || "--"}`}</p>
      </div>

      <div className="flex justify-between p-4 text-white">
        <h1 className="text-[1.3rem] font-semibold">Wind Speed</h1>
        <p className="text-[1.3rem]">{` ${current?.wind_mph || "--"}mph`}</p>
      </div>
      <NavBar data={forecast} />
    </div>
  );
}

export default Info;
