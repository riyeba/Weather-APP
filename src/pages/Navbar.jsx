import { NavLink } from "react-router-dom";
import ImageInfo from "./ImageInfo";

export default function NavBar({ data }) {
  const formatDater = (date) =>
    new Intl.DateTimeFormat("en", {
      weekday: "long",
    }).format(new Date(date));
  const dater = new Date();
  return (
    <nav className="mt-7 text-white">
      <p className="pl-4">Tourch a day to see the full forecast</p>
      <ul className="flex justify-between p-4">
        <li>
          <NavLink to="/day0">
            <span className="border p-1 underline">
              {formatDater(dater.setDate(dater.getDate() + 0))
                .slice(0, 3)
                .toUpperCase()}
            </span>

            <ImageInfo data={data} />
          </NavLink>
        </li>

        <li>
          <NavLink to="/day1">
            <span className="border p-1 underline">
              {formatDater(dater.setDate(dater.getDate() + 1))
                .slice(0, 3)
                .toUpperCase()}
            </span>
            <ImageInfo data={data} result={1} ico={1} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/day2">
            <span className="border p-1 underline">
              {formatDater(dater.setDate(dater.getDate() + 1))
                .slice(0, 3)
                .toUpperCase()}
            </span>
            <ImageInfo data={data} result={2} ico={2} />
          </NavLink>
        </li>
        {/* <li>
          <NavLink to="/day3">
            <span className="border p-1 underline">
              {formatDater(dater.setDate(dater.getDate() + 1))
                .slice(0, -3)
                .toUpperCase()}
            </span>
            <ImageInfo data={data} result={3} ico={3} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/day4">
            <span className="border p-1 underline">
              {formatDater(dater.setDate(dater.getDate() + 1))
                .slice(0, -3)
                .toUpperCase()}
            </span>
            <ImageInfo data={data} result={4} ico={4} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/day5">
            <span className="border p-1 underline">
              {formatDater(dater.setDate(dater.getDate() + 1))
                .slice(0, -4)
                .toUpperCase()}
            </span>
            <ImageInfo data={data} result={5} ico={5} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/day6">
            <span className="border p-1 underline">
              {formatDater(dater.setDate(dater.getDate() + 1))
                .slice(0, -6)
                .toUpperCase()}
            </span>
            <ImageInfo data={data} result={6} ico={6} />
          </NavLink>
        </li> */}
      </ul>
    </nav>
  );
}
