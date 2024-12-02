import { connectDB } from '../utils/mongoose'
import TipoEquipo from '../models/TipoEquipo'
import TipoEquipoCard from '../components/TipoEquipoCard'

async function loadTiposEquipos() {
  connectDB()
  const tipoEquipos = await TipoEquipo.find()
  return tipoEquipos
}

async function Home() {
  const tipoEquipos = await loadTiposEquipos()
  return (
    <div className='grid grid-col-3 gap-2'>
      {
        tipoEquipos.map( (element: { _id: string | null ; nombre: string | null; username: string | null;}) => (
          <div key={element._id} className="bg-gray-800 p-10 text-white roumded-md hover:cursor-pointer hover:bg-gray-700">
            <h3>{element.nombre}</h3>
            <p>{element.username}</p>
            
        </div>
        ))
      }
      
    </div>
  );
}

export default Home
