import React, { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

// importamos la base ruta de el servidor
import axiosCliente from "./components/api/Axios";

// componentes
import Nav from "./components/Nav";

const AddMascota = () => {
  const navegacion = useNavigate();

  // estado de variables, para poder obtener los datos de la base de datos
  // en arrays o objetos
  const [razas, setRazas] = useState([]);
  const [categorias, setCategoria] = useState([]);
  const [generos, setGenero] = useState([]);

  // variables de estado para agregar nueva mascota
  // 
  const [nombre, seTnombre] = useState('');
  const [idRaza, setIdRaza] = useState('');
  const [idCategoria, setIdCategoria] = useState('');
  const [foto, setFoto] = useState(null);
  const [idGenero, setIdGenero] = useState('');

  // poder visualizar la imagen que se carga al formulario
  // antes de enviar el registro a la base de datos
  const [previewImagen, setPreviewImagen] = useState(null);

  // validacion de campos con libreria react-hook-form
  const { register, formState: { errors }, handleSubmit, watch } = useForm();

  useEffect(() => {
    getCategoria();
    getGenero();
    getRaza();
  }, []);

  // poder obtener las razas 
  // 
  const getRaza = async () => {
    try {
      const response = await axiosCliente.get('/raza')
      setRazas(response.data);
    } catch (error) {
      console.error(error)
    }
  }

  // obtener las categorias de perros de la base de datos
  const getCategoria = async () => {
    try {
      const response = await axiosCliente.get('/categoria')
      setCategoria(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  // obtener todos los generos de la base de datos
  const getGenero = async () => {
    try {
      const response = await axiosCliente.get('/genero');
      setGenero(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  // cargar imagen a las variables
  const handleFileUpload = (event) => {
    const archivo = event.target.files[0];
    if (archivo) {
      const previewUrl = URL.createObjectURL(archivo);
      setFoto(archivo);
      setPreviewImagen(previewUrl);
    }
    else {
      setPreviewImagen(null);
    }
  };

  // registrar una nueva mascota en la base de datos
  const registrarMascota = async () => {
    // datos en forma data, para que el servidor los reconosca

    const data = new FormData();
    data.append('name', nombre);
    data.append('race_id', idRaza);
    data.append('categoria_id', idCategoria);
    data.append('genero_id', idGenero);
    data.append('img', foto);

    try {
      const response = await axiosCliente.post('/mascotas', data);

      // si se registro con exito 
      // retorne a la pagina principal
      if (response) {
        alert("Tu nuevo amigo");
        navegacion('/home');
      }
    } catch (error) {
      console.error(error.response.data);
    }
  }

  const [imagenPredeterminada, setImagenPredeterminada] = useState(' icon-camera.svg')
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
                  {/* icon-camera.svg */}
                  {
                    previewImagen && (
                      <img
                        src={previewImagen || imagenPredeterminada}
                        alt="icon-camera"
                        className="rounded-full w-full h-full"
                      />
                    )
                  }

                </figure>
              </div>
              <div className="flex flex-col items-center h-3/5 pt-11">
                <div className="flex h-full flex-col justify-center items-center content-center lg:w-6/12 md:w-6/12 sm:w-6/12 max-sm:w-4/5 gap-y-4 text-center">
                  <form
                    onSubmit={handleSubmit(registrarMascota)}
                    className="flex flex-col max-sm:w-full h-full lg:w-9/12 md:w-9/12 gap-y-4">
                    <label>
                      <input
                        value={nombre}
                        onChange={e => seTnombre(e.target.value)}
                        type="text"
                        className="block w-full p-3 text-gray-900  rounded-2xl  text-xs focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Nombre"
                      />
                    </label>

                    <label htmlFor="">
                      <div className="relative">
                        <select name="" id=""
                          value={idRaza}
                          onChange={e => setIdRaza(e.target.value)}
                          className="appearance-none w-full py-2 px-4 pr-8 rounded-lg bg-gray-200 focus:outline-none focus:bg-white focus:border-blue-500">
                          <option value="" disabled> Seleccione una raza</option>
                          {
                            razas.map(raza => (
                              <option key={raza._id} value={raza._id}>
                                {raza.name}
                              </option>
                            ))
                          }
                        </select>
                      </div>
                    </label>

                    <label htmlFor="">
                      <div className="relative">
                        <select
                          name=""
                          id="cateforia"
                          value={idCategoria}
                          onChange={e => setIdCategoria(e.target.value)}
                          className="appearance-none w-full py-2 px-4 pr-8 rounded-lg bg-gray-200 focus:outline-none focus:bg-white focus:border-blue-500"
                        >
                          <option value="">Selecciona una Categoria</option>
                          {
                            categorias.map(categoria => (
                              <option key={categoria._id} value={categoria._id}>{categoria.name}</option>
                            ))
                          }
                        </select>
                      </div>
                    </label>

                    <div>
                      <input type="file"
                        value={''}
                        onChange={handleFileUpload}
                        className="appearance-none w-full py-2 px-4 pr-8 rounded-lg bg-gray-200 focus:outline-none focus:bg-white focus:border-blue-500" />
                    </div>

                    <div className="relative">
                      <select
                        name=""
                        value={idGenero}
                        onChange={e => setIdGenero(e.target.value)}
                        id="cateforia"
                        className="appearance-none w-full py-2 px-4 pr-8 rounded-lg bg-gray-200 focus:outline-none focus:bg-white focus:border-blue-500"
                      >
                        <option value="">Selecciona una Genero</option>
                        {
                          generos.map(genero => (
                            <option key={genero._id} value={genero._id}>{genero.name}</option>
                          ))
                        }
                      </select>
                    </div>

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
