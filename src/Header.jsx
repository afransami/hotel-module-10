import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-orange-500">
      {/* <img
        className="bg-cover rounded absolute h-64 w-full"
        src="/public/hotel2.jpg"
        alt=""
      /> */}

      <div className="navbar justify-between text-white">
        <Link to="/">
          <a className="btn btn-ghost normal-case text-2xl ">
            Burj Al Khalifa Hotel
          </a>
        </Link>

        <div className="gap-4">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-semibold" : "default"
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-semibold" : "default"
            }
            to="/profile"
          >
            Profile
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-semibold" : "default"
            }
            to="/login"
          >
            Login
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-semibold" : "default"
            }
            to="/register"
          >
            Register
          </NavLink>
        </div>
      </div>

      {/* <h1 className="text-3xl absolute text-white top-20 left-1/3">
        Your Luxury on the way
      </h1> */}
    </div>
  );
};

export default Header;
