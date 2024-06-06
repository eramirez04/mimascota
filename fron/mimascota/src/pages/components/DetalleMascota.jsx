import React, { useState, useEffect } from "react";
import axiosCliente from "../components/api/Axios";

const DetalleMascota = ({ id }) => {
  const [mascota, setMascota] = useState({});

  useEffect(() => {
    const mascotaId = async () => {
      try {
        const response = await axiosCliente.get(`/mascotas/${id}`);
        setMascota(response.data.mascota);
      } catch (error) {
        console.error(error);
      }
    };
    mascotaId();
  }, [id]);

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-auto">
        <div className="relative h-96">
          <div className="inset-0 flex items-center justify-center">
            <div className="w-64 h-64 rounded-full overflow-hidden">
              <figure>
                <img
                  src={`http://localhost:3000/imagenes/${mascota.foto}`}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </figure>
            </div>
          </div>
          <div className="flex flex-col gap-4 p-3 ">
            <section className="flex flex-row bg-[url('info-name.svg')] bg-no-repeat h-12">
              <div className="w-4/12"></div>
              <span className="flex pl-9 items-center w-4/6">
                {mascota.nombre}
              </span>
            </section>
            <section className="flex flex-row bg-[url('info-race.svg')] bg-no-repeat h-12">
              <div className="w-4/12"></div>
              <span className="flex pl-9 items-center w-4/6">
                {mascota.raza}
              </span>
            </section>
            <section className="flex flex-row bg-[url('info-category.svg')] bg-no-repeat h-12">
              <div className="w-4/12"></div>
              <span className="flex pl-9 items-center w-4/6">
                {mascota.categoria}
              </span>
            </section>
            <section className="flex flex-row bg-[url('info-gender.svg')] bg-no-repeat h-12">
              <div className="w-4/12"></div>
              <span className="flex pl-9 items-center w-4/6">
                {mascota.genero}
              </span>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetalleMascota;
