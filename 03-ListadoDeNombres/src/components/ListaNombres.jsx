import {useState} from 'react'

export function ListaNombres(){
    const [nombre,setNombre] = useState('')
    const [nombres,setNombres] = useState([])
    const [ordenar,setOrdenar] = useState([])

    const guardarDato = (e)=>{
        setNombre(e.target.value)
    }

    const guardarNombre =()=>{
            setNombres([...nombres,nombre])
            setNombre('')
    }

    const borrarLista = ()=>{
        setNombres([])
    }

    return(
        <div className='contenedor'>
            <header>
                <input value={nombre} onChange={guardarDato} placeholder='Brian, Mario, Giuliana, etc' />
                <button onClick={guardarNombre}>ENVIAR</button>
                <button onClick={borrarLista}>Limpiar</button>
            </header>
            <main>
                <h1>Lista de Nombres:</h1>
                <ul className='contenedor-grid'>
                    {
                        nombres.map((elemento,index)=>{
                            return <li key={index}>{elemento}</li>
                        })
                    }
                </ul>
            </main>
        </div>
    )
}