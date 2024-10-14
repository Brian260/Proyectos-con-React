import {CrudForm} from './CrudForm.jsx'
import {CrudTable} from './CrudTable.jsx'
import { useState,useEffect } from 'react'
import './Crud.css'

export function CrudApp(){
    const [editarData, setEditarData] = useState(null)
    const [equipos, setEquipos] = useState(()=>{
    const salvarEquipos = window.localStorage.getItem("equiposData");
    if(salvarEquipos){
        return JSON.parse(salvarEquipos);
    }else{
        return []
    }});

    useEffect(()=>{
        window.localStorage.setItem("equiposData", JSON.stringify(equipos))
    }, [equipos])

    const añadirEquipo = (equipo)=>{
        setEquipos([
        ...equipos, equipo
        ])
    }

    const editarEquipo = (equipo)=>{
        const newEquipo = equipos.map(el => el.id === equipo.id ? equipo : el)
        setEquipos(newEquipo)
        setEditarData(null)
    }

    // .filter es
    const eliminarEquipo = (id)=>{
        const isDelete = confirm("¿Deseas eliminar el registro con el id= " + id+"?")
        if(isDelete){
            const newEquipo = equipos.filter(el=> el.id !== id)
            setEquipos(newEquipo)
        } 
    }

    return (
        <>
            <CrudForm añadirEquipo={añadirEquipo} editarEquipo={editarEquipo} editarData={editarData} />
            <CrudTable equipos={equipos} setEditarData={setEditarData} eliminarEquipo={eliminarEquipo} />
        </>
    )
}