import Link from "next/link";

function TipoEquipoCard({data}) {
    return(
        <Link href={`/tipo-equipos/${data._id}`}>
            <div className="bg-gray-800 p-10 text-white rounded-md hover:cursor-pointer hover:bg-gray-700">
                <h3 className="text-2xl font-blod">{data.nombre}</h3>
                <p className="text-slate-300">{data.username}</p>
                <p className="text-slate-400 my-2">
                    <span className="mr-1">
                        Creado:
                    </span>
                    {new Date(data.createdAt).toLocaleDateString()}
                </p>
            </div>
        </Link>
    )
}

export default TipoEquipoCard