import React from "react";

import { Link } from "react-router-dom";

import Nav from "./components/Nav";

const Home = () => {
  const holaMundo = () => {
    alert("hola mundo");
  };

  return (
    <>
      <div className="bg-blue-900 min-h-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-auto">
          <Nav contenido={"Administrar Mascotas"} />

          <div className="flex content-center justify-center pt-6">
            <Link to="/añadir">
              <button className="">
                <img src="btn-add.svg" alt="" />
              </button>
            </Link>
          </div>

          <main>
            <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 mt-6">
              <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                <li className="bg-gray-400  rounded-2xl">
                  <div className="flex flex-row w-full items-center gap-x-3">
                    <div className="flex h-20 w-1/5 items-center justify-center content-center">
                      <img
                        src="photo-lg-1.svg"
                        className="h-14 w-16 rounded-full"
                        alt=""
                      />
                    </div>
                    <div className="flex  flex-col justify-center h-20 w-2/5 pl-1 ">
                      <span>hola soy Lolodrilo</span>
                      <span>y mi raza es</span>
                    </div>
                    <div className="flex justify-center content-center h-20 w-1/4 gap-x-2">
                      {" "}
                      <figure className="flex justify-center items-center">
                        <Link to="/detalle">
                          <img
                            src="btn-show.svg"
                            className="cursor-pointer"
                            alt="btn-show"
                          />
                        </Link>
                      </figure>
                      <figure className="flex justify-center items-center">
                        <img
                          src="btn-edit.svg"
                          className="cursor-pointer"
                          alt="btn-edit"
                        />
                      </figure>
                      <figure className="flex justify-center items-center">
                        <img
                          src="btn-delete.svg"
                          className="cursor-pointer"
                          alt="btn-delete"
                        />
                      </figure>
                    </div>
                  </div>
                </li>
                <li className="bg-gray-400 lg:w-full rounded-s-md">hola</li>
                <li className="bg-gray-400 lg:w-full rounded-s-md">hola</li>
              </ul>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Home;
