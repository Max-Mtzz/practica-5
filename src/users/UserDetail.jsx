import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UserDetail(){

    const {id} = useParams() // obtenemos el id de los params de la url
    const [user, setUser] = useState(null) // incializamos el estado usuario como nulo

    const getUser = async () =>{
        // hacemos petición a la API
        const response = await fetch(`https://fakestoreapi.com/users/${id}`)
        const data = await response.json() // esperar a que json nos devuelva el cuerpo de la respuesta
        console.log(data)

        setUser(data)
    }

    useEffect(() =>{
        // cuando el componente se monta
        if(id){
            getUser()
        }
    },[id])

    return(
        <>
        {
            user ? (
                <>
                    <h2>User Detail</h2>
                    <p>Nombre de usuario: {user.username}</p>
                    <p>Nombre: {user.name.firstname}</p>
                    <p>Apellido: {user.name.lastname}</p>
                    <p>Correo: {user.email}</p>
                    <p>Contraseña: {user.password}</p>
                </>
            ) : (
                <p>Cargando Usuario...</p>
            )
        }
           
        </>
    )
}

export default UserDetail;