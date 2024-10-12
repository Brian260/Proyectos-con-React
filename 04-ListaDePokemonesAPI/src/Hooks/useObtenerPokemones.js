import { useState,useEffect } from 'react'

    export function usePokemon(url){
        const [pokemones, setPokemones] = useState([])
        const [anterior, setAnterior] = useState(null)
        const [siguiente, setSiguiente] = useState(null)
        const [loading, setLoading] = useState(true)

        useEffect(() => {
            setLoading(true)
            async function obtenerPokemones(){
                const res = await fetch(url)
                const data = await res.json()

                setPokemones(data.results)
                setAnterior(data.previous)
                setSiguiente(data.next)
                setLoading(false)
            }
            obtenerPokemones()

        }, [url])  

        return { pokemones, loading, anterior, siguiente}
    }