import React, { useState, useEffect } from "react";
import axiosCliente from "./components/api/Axios";
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";

// componente
import Nav from "./components/Nav";

const Home = () => {
  const navegacion = useNavigate()
  const [mascotas, setMascotas] = useState([])
  const [errorMensaje, setErrorMensaje] = useState('');

  useEffect(() => {
    getMascotas()
  }, [])

  //obtener todos los registros de la base de datos  
  const getMascotas = async () => {
    try {
      const response = await axiosCliente.get('/mascotas')
      // captura los registros de la base de datos
      setMascotas(response.data)
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setErrorMensaje('No se encontraron mascotas');
      }

      if (error.response.status === 401 || error.response.status === 403) {
        navegacion('/')
      }
    }
  }

  // mandar solicitud a back-end para eliminar una mascota
  const eliminarMascota = async (id) => {
    try {
      const response = await axiosCliente.delete(`/mascotas/${id}`)
      alert(response.data.mensaje)
    } catch (error) {
      console.error(error)
    }
  }

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
                {
                  mascotas.map((mascota) => (
                    <li className="bg-gray-400  rounded-2xl" key={mascota._id}>
                      <div className="flex flex-row w-full items-center gap-x-3">
                        <div className="flex h-20 w-1/5 items-center justify-center content-center">
                          <img
                            src={`http://localhost:3000/imagenes/${mascota.foto}`}
                            className="h-14 w-16 rounded-full"
                            alt=""
                          />
                        </div>
                        <div className="flex  flex-col justify-center h-20 w-2/5 pl-1 ">
                          <span>{mascota.name}</span>
                          <span>{mascota.race_id.name}</span>
                        </div>
                        <div className="flex justify-center content-center h-20 w-1/4 gap-x-2">
                          {" "}
                          <figure className="flex justify-center items-center">
                            <Link to={`/detalle/${mascota._id}`}>
                              <img
                                src="btn-show.svg"
                                className="cursor-pointer"
                                alt="btn-show"
                              />
                            </Link>
                          </figure>
                          <figure className="flex justify-center items-center">
                            <Link to={`/editar/${mascota._id}`} >
                              <img
                                src="btn-edit.svg"
                                className="cursor-pointer"
                                alt="btn-edit"
                              />
                            </Link>

                          </figure>
                          <button>
                            <figure className="flex justify-center items-center">
                              <img
                                src="btn-delete.svg"
                                className="cursor-pointer"
                                alt="btn-delete"
                                onClick={() => eliminarMascota(mascota._id)}
                              />
                            </figure>
                          </button>

                        </div>
                      </div>
                    </li>
                  ))
                }

                <li className="bg-gray-400 lg:w-full rounded-s-md">
                  {errorMensaje && <p>{errorMensaje}</p>}
                </li>
              </ul>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Home;
