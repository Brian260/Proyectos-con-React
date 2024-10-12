import {usePokemon} from '../Hooks/useObtenerPokemones.js'
import { useState } from 'react'

export function Pokemones(){
    const [actual, setActual] = useState("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0") 
    const { pokemones, loading, anterior, siguiente} = usePokemon(actual)
    const className = `${anterior ? '' : 'anterior' }`

    const obtenerAnt = ()=>{
        if(anterior !== null){
            setActual(anterior)
        }
    }

    const obtenerSig = ()=>{
        if(siguiente !== null){
            setActual(siguiente)
        }
    }

    return(
        loading ?
                <p className='centrado'>Cargando...</p>
                :
        <main>
            <h1>Lista de Pokemones:</h1>
                <ul>{
                pokemones.map((pokemon,index)=>{
                    return (
                        <div key={index}>
                            <h3>NOMBRE: {pokemon.name}</h3>
                            <a>URL: {pokemon.url}</a>
                        </div>
                        )
                    })
                }</ul>
                <button className={className} onClick={obtenerAnt}>Anteriores</button>
                <button onClick={obtenerSig} >Siguientes</button>
        </main>
    )
}