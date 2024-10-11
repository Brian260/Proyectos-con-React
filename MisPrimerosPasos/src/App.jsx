// AQUI VA LA UTILIZACION DE LOS COMPONENTES YA QUE EN CONTENIDO DE REACT NO SE PUEDEN PONER TODO LO QUE TIENE ESTO PORQUE VA UN SOLO ELEMENTO:

import './App.css'
import { TwitterFollowCard } from "./TwitterFollowCard.jsx"

const users = [
    {
        userName: 'Brayan.com',
        name: 'Brayan Herrera',
        isFollowing: true
    },
    {
        userName: 'Giuliana.com',
        name: 'Giuliana Rivero',
        isFollowing: false
    },
    {
        userName: 'Giuli.com',
        name: 'Giuli Rivero',
        isFollowing: true    
    },
    {
        userName: 'Mario.com',
        name: 'Mario Herrera',
        isFollowing: false
    }
]
// La key cuando haces mapeamiento de un array es obligatoria sino tendremos un error minimo.La key es la llave primaria solo puede haber una y en este caso es el correo electronico:
export function App() {
    const format = (userName) => `@${userName}`;
    return(
        <div className="contenedor">
            {
                users.map(({ userName, name, isFollowing }) =>(
                        <TwitterFollowCard 
                        key= {userName}
                        formatUserName={format}
                        userName = {userName}
                        initialIsFollowing = {isFollowing}
                        >
                            {name}
                        </TwitterFollowCard>    
                ))
                } 
        </div>
    )
}
