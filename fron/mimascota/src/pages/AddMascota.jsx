import React from "react";

// componentes
import Nav from "./components/Nav";

const AddMascota = () => {
  return (
    <>
      <div className="bg-blue-900 min-h-screen">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-auto">
          <Nav
            contenido={"Añadir Mascota"}
            salir={<img src="btn-back.svg" className="cursor-pointer" />}
          />
          <main>
            <div className="h-svh">
              <div className="flex justify-center h-2/5">
                <figure className="bg-white w-64 h-64  rounded-full border-blue-500 flex items-center justify-center">
                  <img
                    src="icon-camera.svg"
                    alt="icon-camera"
                    className="rounded-full w-96 h-40"
                  />
                </figure>
              </div>
              <div className="flex flex-col items-center h-3/5 pt-11">
                <div className="flex h-full flex-col justify-center items-center content-center lg:w-6/12 md:w-6/12 sm:w-6/12 max-sm:w-4/5 gap-y-4 text-center">
                  <form className="flex flex-col max-sm:w-full h-full lg:w-9/12 md:w-9/12 gap-y-4">
                    <label>
                      <input
                        type="text"
                        className="block w-full p-3 text-gray-900  rounded-2xl  text-xs focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Nombre"
                      />
                    </label>

                    <label htmlFor="">
                      <div>
                        <div className="relative">
                          <select
                            name=""
                            id="raza"
                            className="appearance-none w-full py-2 px-4 pr-8 rounded-lg bg-gray-200 focus:outline-none focus:bg-white focus:border-blue-500"
                          >
                            <option value="">Seleccion una raza</option>
                            <option value="opcion1">Opción 1</option>
                            <option value="opcion2">Opción 2</option>
                            <option value="opcion3">Opción 3</option>
                          </select>
                        </div>
                      </div>
                    </label>

                    <label htmlFor="">
                      <div>
                        <div className="relative">
                          <select
                            name=""
                            id="cateforia"
                            className="appearance-none w-full py-2 px-4 pr-8 rounded-lg bg-gray-200 focus:outline-none focus:bg-white focus:border-blue-500"
                          >
                            <option value="">Selecciona una Categoria</option>
                            <option value="opcion1">Opción 1</option>
                            <option value="opcion2">Opción 2</option>
                            <option value="opcion3">Opción 3</option>
                          </select>
                        </div>
                      </div>
                    </label>

                    <div>
                      <button>
                        <img src="btn-save.svg" alt="btn-save" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default AddMascota;
