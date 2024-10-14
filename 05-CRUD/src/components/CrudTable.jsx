

export function CrudTable({ equipos, setEditarData,eliminarEquipo }){

    return (
        <>
        {
            equipos.length === 0 ? <p className='vacio'>No hay equipos ingresados</p> : equipos.map((equipo)=>{
                return(
                    <main className='grid' key={equipo.id}> 
                        <div className='grid-Item'>{equipo.id}</div>
                        <div className='grid-Item'>{equipo.equipo}</div>
                        <div className='grid-Item'>{equipo.pais}</div>
                        <div className='contenedor-botones'>
                            <button onClick={()=> setEditarData(equipo)}>Editar</button>
                            <button onClick={()=> eliminarEquipo(equipo.id)}>Eliminar</button>
                        </div>
                    </main>
                )
            })
        }
        
        </>
    )
}