// Componente: Es un conjunto de elementos y se crean para ser reutilizados.


//Es para crear estados en react, como eventos y mas:
import { useState} from 'react' 

// Children como parametro es lo que tiene adentro en el contenido de el App.jsx donde lo pongas.
export function TwitterFollowCard({ children,formatUserName,userName='unknown', initialIsFollowing}){
    // Crear un estado: 
     //Esto devuelve un array con 2 posiciones, en la 1ra tenemos el valor del estado y en la 2da tenemos una funcion que nos va a permitir actualizar el estado para la nueva version.
    // Antes se hacia asi:
    // const state = useState(false)
    // const isFollowing = state[0]
    // const setIsFollowing = state[1]

    // Ahora es asi:
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'aside-button siguiendo' : 'aside-button'

    const handleClick = ()=>{
        setIsFollowing(!isFollowing)
    }

    return(
    <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img  className='tw-followCard-header-avatar' alt="El avatar de Midudev" src={`https://unavatar.io/${userName}`} />
            <div  className='tw-followCard-header-div'>
                {children}
                <span  className='tw-followCard-header-div-span'>
                    {formatUserName(userName)}
                </span>
            </div>  
        </header>

        <aside >
            <button className={buttonClassName} onClick={handleClick}>
                <span className='tw-followCard-text'>{text}</span>
                <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
            </button>
        </aside>
    </article>
    )
}