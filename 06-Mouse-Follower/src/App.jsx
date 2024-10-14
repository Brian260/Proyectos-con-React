import { useState, useEffect } from 'react'
import './App.css'
import './index.css'

const FollowMouse = ()=>{
    
    const [enabled, setEnabled] = useState(false)

    const [position, setPosition] = useState({x: 0,     y: 0})

    useEffect(()=>{
    const handleMove = (event)=>{
        const { clientX, clientY} = event
        setPosition({x: clientX, y: clientY})
        }
        if(enabled){  
        window.addEventListener('pointermove',  handleMove)

        document.querySelector(".circulo").style.border = '2px solid #26a'
        document.querySelector(".circulo").style.display = 'block'
        }
        // Lo que hace es limpiar el useEffect.Y    funciona cuando el componente se desmonta y    cuando cambian las dependencias, antes de  ejecutar el efecto de nuevo.
        return () =>{
            window.removeEventListener  ('pointermove',handleMove)
            document.querySelector(".circulo").style.display = 'none'    
        }
    },[enabled])

    useEffect(()=>{
        if(enabled){
            document.body.classList.toggle('no-cursor', enabled)
        }
        else{
            document.body.classList.remove('no-cursor')
        }
    },[enabled])

    return(
        <>
        <div className='circulo' style={{
            position: 'absolute',
            backgroundColor: 'transparent',
            borderRadius: '50%',
            opacity: 0.8,
            pointerEvents: 'none',
            top: 0,
            left: 0,
            width: 40,
            height: 40,
            transform: `translate(${position.x}px, ${position.y}px)`
        }}/>
        <button onClick={()=>{
            return setEnabled(!enabled)
        }}>
            {enabled ? 'Desactivar' : 'Activar'} seguir puntero
        </button>
        </>

    )
}

export function App3() {
  return (
    <main>
        <FollowMouse />
    </main>
  )
}

