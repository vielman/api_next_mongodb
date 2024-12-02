function TipoEquipoCard({data}) {
    return(
        <div className="bg-gray-800 p-10 text-white roumded-md hover:cursor-pointer hover:bg-gray-700">
            <h3>{data.nombre}</h3>
            <p>{data.fechaactivacion}</p>
        </div>
    )
}

export default TipoEquipoCard