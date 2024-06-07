import React from "react";

import { Link } from "react-router-dom";

import { Logout } from "../../routes/rutasProtegidas";

const Nav = ({ contenido }) => {
  return (
    <>
      <nav className="flex justify-center h-16 text-white">
        <div className="flex justify-center items-center w-2/3">
          <Link to="/home">
            <img src="btn-back.svg" className="cursor-pointer" />
          </Link>
        </div>
        <div className="flex justify-center items-center  content-center w-2/3 py-8">
          <div>{contenido}</div>
        </div>
        <div className="flex justify-center items-center w-2/3">
          <button onClick={Logout}>
            {" "}
            <img src="btn-close.svg" alt="" />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Nav;
