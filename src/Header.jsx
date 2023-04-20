import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-orange-500">
      <div className="navbar justify-between text-white">
        <Link to="/">
          <a className="text-2xl font-semibold text-black mx-10">
            Burj Al Khalifa Hotel
          </a>
        </Link>

        <div className="gap-4  sm:mx-10 text-black">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-white font-semibold" : "default"
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-white font-semibold" : "default"
            }
            to="/profile"
          >
            Profile
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-white font-semibold" : "default"
            }
            to="/login"
          >
            Login
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-white font-semibold" : "default"
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
