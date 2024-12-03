"use client"
import {ChangeEvent, FormEvent, useState, useEffect} from 'react';
import { useRouter, useParams } from 'next/navigation';

function FormPage() {
    const [newTipoEquipo, setNewTipoEquipo] = useState({
        nombre:"",
        username:""
    })

    const router = useRouter()
    const params = useParams()

    const getTipoEquipo = async () => {
        try {
            const res = await fetch(`/api/tipo-equipos/${params.id}`)
            const data = await res.json()
            console.log(data)
            setNewTipoEquipo({
                nombre: data.nombre,
                username: data.username,
            })
        } catch (error) {
            console.log(error)
        }
    }

    const createTipoEquipo = async () => {
        try {
            const res = await fetch('/api/tipo-equipos', {
                method: "POST",
                body: JSON.stringify(newTipoEquipo),
                headers:{
                    "Content-Type": "application/json"
                }
            })
            const data = await res.json()
            if (res.status === 200){
                router.push('/')
                router.refresh()
            }  
        } catch (error) {
            console.log(error)
        }
    }

    const updateTipoEquipo = async () => {
        try {
            const res = await fetch(`/api/tipo-equipos/${params.id}`, {
                method: "PUT",
                body: JSON.stringify(newTipoEquipo),
                headers:{
                    "Content-Type": "application/json"
                }
            })
            const data = await res.json()
            router.push('/')
            router.refresh()
             
        } catch (error) {
            console.log(error)
        }
    }

    const handleDelete = async (e:FormEvent) => {
        if (window.confirm("Desea eliminar el Tipo de equipo?")){
            try {
                const res = await fetch(`/api/tipo-equipos/${params.id}`, {
                    method: "DELETE",
                })
                router.push('/')
                router.refresh()
            } catch (error) {
                console.log(error)
            }
            
        }
        
    };

    const handleSubmit = async (e:FormEvent) => {
        e.preventDefault();
        if (!params.id) {
           await createTipoEquipo(); 
        } else {
            await updateTipoEquipo();
        }
        
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTipoEquipo({ ... newTipoEquipo, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        console.log(params);
        if (params.id) {
            getTipoEquipo(); 
         }
    }, [])
 
    return (
        <div className="h-[calc(100vh-7rem)] flex justify-center items-center">
            <form action="" onSubmit={handleSubmit}>
                <header className='flex justify-between'>
                    <h1 className='font-blod text-3xl'>
                        { !params.id ? "Crear ": "Editar " }
                        Tipos de Equipos     
                    </h1>
                    <button 
                     type='button' 
                     className='bg-red-500 px-3 py-1 rounded-md'
                     onClick={handleDelete}>
                        Eliminar
                    </button>
                </header>
                <input 
                 type="text" 
                 name="nombre" 
                 id="nombre" 
                 placeholder="Nombre"
                 className="bg-gray-800 borde-2 w-full p-4 rounded-lg my-4"
                 onChange={handleChange} 
                 value={newTipoEquipo.nombre} />
                <input 
                 type="text" 
                 name="username" 
                 id="username" 
                 placeholder="UserName"
                 className="bg-gray-800 borde-2 w-full p-4 rounded-lg my-4"
                 onChange={handleChange} 
                 value={newTipoEquipo.username} />
                <button
                 type='submit' 
                 className="bg-green-600 hover:bg-green-700 text-white font-bold px-4 rounded-lg">
                    { !params.id ? "Crear": "Guardar" }
                </button>
            </form>
        </div>
    );
}

export default FormPage
