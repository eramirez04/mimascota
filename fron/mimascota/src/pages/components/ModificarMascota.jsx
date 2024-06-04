import React, { useState, useEffect } from "react";
import axiosCliente from "./api/Axios";

import { useParams } from "react-router-dom"

import Nav from "./Nav";
import axios from "axios";

const ModificarMascota = () => {
    const { id } = useParams()
    const [mascota, setMascota] = useState({
        nombre: '',
        raza: '',
        categoria: '',
        genero: '',
        foto: ''
    });

    // estado de variables, para poder obtener los datos de la base de datos
    // en arrays o objetos
    const [razas, setRazas] = useState([]);
    const [categorias, setCategoria] = useState([]);
    const [generos, setGenero] = useState([]);

    // poder obtener las razas 
    // 
    const getRaza = async () => {
        try {
            const response = await axiosCliente.get('/raza')
            setRazas(response.data);
        } catch (error) {
            console.error(error);
        }
    }
    // obtener las categorias de perros de la base de datos
    const getCategoria = async () => {
        try {
            const response = await axiosCliente.get('/categoria')
            setCategoria(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    // obtener todos los generos de la base de datos
    const getGenero = async () => {
        try {
            const response = await axiosCliente.get('/genero');
            setGenero(response.data);
            console.log(response.data)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {

        const mascotaId = async () => {
            try {
                const response = await axiosCliente.get(`/mascotas/${id}`);
                setMascota(response.data.mascota);
                /*   console.log(response.data.mascota) */
            } catch (error) {
                console.error(error);
            }
        }

        //ejecutamos las funciones para poder obtener los datos
        // y poder almacenarlos en las variables de estado
        mascotaId();
        getRaza();
        getCategoria();
        getGenero();
    }, [id]);
    const actualizarMascota = async (id) => {

        const token = localStorage.getItem('token')

        const config = {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'multipart/form-data'
            }
        }

        const formMascota = new FormData()
        formMascota.append('nombre', mascota.nombre)
        formMascota.append('raza', mascota.raza)
        formMascota.append('categoria', mascota.categoria)
        formMascota.append('genero', mascota.genero)
        formMascota.append('img', foto)
        try {
            console.log(mascota)

            const response = await axios.put(`http://localhost:3000/mascotas/${id}`, formMascota, config)

            if (response.status === 200) {
                alert("mascota actulizada")
            }
        } catch (error) {
            console.error(error.response.data);
        }
    }

    // funcion que permitira enviar los datos 
    // que se quieren actualizar al servidor


    // cargar imagen a las variables para poder visualizarla de manera local
    const [foto, setFoto] = useState(null);
    // poder visualizar la imagen que se carga al formulario
    // antes de enviar el registro a la base de datos
    const [previewImagen, setPreviewImagen] = useState(null);
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
                                <figure className="flex bg-white h-full w-96 rounded-full items-center justify-center">
                                    {
                                        previewImagen && (
                                            <img
                                                src={previewImagen}
                                                alt="icon-camera"
                                                className="rounded-full h-full"
                                            />
                                        )
                                    }
                                </figure>
                            </div>
                            <div className="flex flex-col items-center h-3/5 pt-11">
                                <ul className=" grid gap-x-8 gap-y-4 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                                    <li className="rounded-2xl bg-name-main  bg-no-repeat ">
                                        <section className="flex flex-row bg-white h-12 w-96 rounded-s-2xl">
                                            <div className="w-4/12 bg-blue-600 flex items-center pl-8">Nombre</div>
                                            <input type="text"
                                                className="flex pl-9 items-center w-4/6"
                                                value={mascota.nombre}
                                                onChange={(e) => setMascota(
                                                    { ...mascota, nombre: e.target.value }
                                                )}
                                            />
                                        </section>
                                    </li>
                                    <li className="">
                                        <section className="flex flex-row bg-[url('info-race.svg')] bg-no-repeat h-12 w-96">
                                            <div className="w-4/12"></div>

                                            <select name="" id=""
                                                className="appearance-none w-11/12 py-2 px-4 pr-8 rounded-lg bg-gray-200 focus:outline-none focus:bg-white focus:border-blue-500"
                                                value={mascota.raza}
                                                onChange={(e) => setMascota(
                                                    { ...mascota, raza: e.target.value }
                                                )}
                                            >
                                                {
                                                    razas.map(raza => (
                                                        <option key={raza._id} value={raza._id}>
                                                            {raza.name}
                                                        </option>
                                                    ))
                                                }
                                            </select>
                                        </section>
                                    </li>
                                    <li className="">
                                        <section className="flex flex-row bg-[url('info-category.svg')] bg-no-repeat h-12 w-96">
                                            <div className="w-4/12"></div>
                                            <select name="" id=""
                                                className="appearance-none w-11/12 py-2 px-4 pr-8 rounded-lg bg-gray-200 focus:outline-none focus:bg-white focus:border-blue-500"
                                                value={mascota.categoria}
                                                onChange={(e) => setMascota({ ...mascota, categoria: e.target.value })}
                                            >
                                                {
                                                    categorias.map(categoria => (
                                                        <option key={categoria._id} value={categoria._id}>{categoria.name}</option>
                                                    ))
                                                }
                                            </select>
                                        </section>
                                    </li>
                                    <li>
                                        <div>
                                            <input type="file"
                                                value={''}
                                                onChange={handleFileUpload}
                                                className="appearance-none w-full py-2 px-4 pr-8 rounded-lg bg-gray-200 focus:outline-none focus:bg-white focus:border-blue-500" />
                                        </div>
                                    </li>
                                    <li className="">
                                        <section className="flex flex-row bg-[url('info-gender.svg')] bg-no-repeat h-12 w-96">
                                            <div className="w-4/12"></div>
                                            {/*  <span className="flex pl-9 items-center w-4/6">
                                                {mascota.genero}
                                            </span> */}
                                            <select name="" id=""
                                                className="appearance-none w-full py-2 px-4 pr-8 rounded-lg bg-gray-200 focus:outline-none focus:bg-white focus:border-blue-500"
                                                value={mascota.genero}
                                                onChange={(e) => setMascota({ ...mascota, genero: e.target.value })}
                                            >
                                                {
                                                    generos.map(genero => (
                                                        <option key={genero._id} value={genero._id}>{genero.name}</option>
                                                    ))
                                                }
                                            </select>
                                        </section>
                                    </li>

                                </ul>
                                <button onClick={() => { actualizarMascota(mascota.id) }}
                                    className="mt-9 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                                >
                                    Modificar
                                </button>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}

export default ModificarMascota