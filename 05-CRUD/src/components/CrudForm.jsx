import { useState, useEffect } from 'react'

export function CrudForm({ añadirEquipo, editarEquipo, editarData }){
    const [formData, setFormData] = useState({
        equipo: '',
        pais: '',
        id: null
    })

    useEffect(()=>{
        if(editarData !== null){
            setFormData(editarData)
        }else{
            setFormData({
                equipo: '',
                pais: '',
                id: null
            })
        }
    }
    ,[editarData])

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(formData.equipo !== '' && formData.pais !== ''){
            if(editarData !== null){
                editarEquipo(formData)
            }else{
                formData.id = Date.now();
                añadirEquipo(formData)
                setFormData({
                    equipo: '',
                    pais: '',
                    id: null
                })
            }
        }else{
            alert('No puedes dejar ningun campo vacio') 
        } 
    }

    const handleChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleReset = ()=>{
        setFormData('')
    }

    return (
        <>
            <h2>Crud de equipos de futbol:</h2>
            <form autoComplete='off' className='form' onSubmit={handleSubmit}>
                <label htmlFor='equipo'>Equipo:</label>
                <input value={formData.equipo} onChange={handleChange} name='equipo' placeholder='FC-Barcelona, Pumas, Boca Junior' />
                <label htmlFor='pais'>Pais:</label>
                <input value={formData.pais} onChange={handleChange} name='pais' placeholder='España, Mexico, Argentina' />
                <div className='contenedor'>
                <input type='submit' value='Enviar' />
                <input type='reset' value='Limpiar' onClick={handleReset} />
            </div>
            </form>
        </>
    )
}