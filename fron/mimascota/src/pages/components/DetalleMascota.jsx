import React, { useState, useEffect, } from "react";
import Nav from "./Nav";
import { useParams } from "react-router-dom";
import axiosCliente from "../components/api/Axios"

const DetalleMascota = () => {

  const { id } = useParams()
  const [mascota, setMascota] = useState({})

  useEffect(() => {

    const mascotaId = async () => {
      try {
        const response = await axiosCliente.get(`/mascotas/${id}`)
        setMascota(response.data.mascota)
        console.log(mascota)
      } catch (error) {
        console.error(error)
      }
    }
    mascotaId()

  }, [id])

  return (
    <>
      <div className="bg-blue-900 min-h-screen">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-auto">
          <header>
            <Nav contenido={"Consultar Mascota"} />
          </header>

          <main>
            <div className="h-svh">
              <div className="flex justify-center h-2/5">
                <figure className="flex items-center justify-center">
                  <img
                    src="photo-lg-1.svg"
                    alt="icon-camera"
                    className="rounded-full w-96 h-40"
                  />
                </figure>
              </div>

              <div className="flex flex-col items-center h-3/5 pt-11">
                <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                  <li className="rounded-2xl">
                    <section className="flex flex-row bg-[url('info-name.svg')] bg-no-repeat h-12 w-96">
                      <div className="w-4/12"></div>
                      <span className="flex pl-9 items-center w-4/6">
                        {mascota.nombre}
                      </span>
                    </section>
                  </li>

                  <li className="">
                    <section className="flex flex-row bg-[url('info-race.svg')] bg-no-repeat h-12 w-96">
                      <div className="w-4/12"></div>
                      <span className="flex pl-9 items-center w-4/6">
                        {mascota.raza}
                      </span>
                    </section>
                  </li>
                  <li className="">
                    <section className="flex flex-row bg-[url('info-category.svg')] bg-no-repeat h-12 w-96">
                      <div className="w-4/12"></div>
                      <span className="flex pl-9 items-center w-4/6">
                       {mascota.categoria}
                      </span>
                    </section>
                  </li>
                  <li className="">
                    <section className="flex flex-row bg-[url('info-gender.svg')] bg-no-repeat h-12 w-96">
                      <div className="w-4/12"></div>
                      <span className="flex pl-9 items-center w-4/6">
                        {mascota.genero}
                      </span>
                    </section>
                  </li>
                </ul>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default DetalleMascota;

/*    <section className="flex flex-row bg-[url('info-name.svg')] bg-no-repeat h-12 w-96">
                  
                  <div className="w-4/12"></div>
                  <span className="flex pl-9 items-center w-4/6">hola</span>
                </section>
              </div> */
