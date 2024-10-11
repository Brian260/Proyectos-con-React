import { useState } from 'react'

export function Contador() {
    const [count, setCount] = useState(0)
    const [isSelect,setIsSelect] = useState(false)

    const className = `${isSelect ? 'is-select' : 'button' }`

    function handlePrevClick(){
        if(count>0){
            if(count===1){  
                setIsSelect(false)
            }
            setCount(count - 1)
        }
    }

    function handleResetClick(){
        if(count===0) return
        else{
            setCount(0)
            setIsSelect(false)
        }
    }

    function handleNextClick(){
        if(count >=0){
            setIsSelect(true)
            setCount(count + 1)
        }
    }

  return (
    <>
    <h2>El contador es:  {count}</h2>
    <button className={className} onClick={handlePrevClick}>
        Anterior
    </button>
    <button onClick={handleResetClick}>
        Reiniciar
    </button>
    <button onClick={handleNextClick}>
        Siguiente
    </button>
    </>
  )
}
