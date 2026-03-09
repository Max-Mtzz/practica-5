import { useEffect, useState } from "react";

function UserList(){

    const [users, setUsers] = useState([])

    const getUsers = async() => {
        //fetch es una promesa (función asincrona)
        //para manejar la respueta debo esperar a que se resuelva la promesa
        const response = await fetch('https://fakestoreapi.com/users')
        //response es un objeto de tipo response
        //para obtener el cuerpo de la respuesta debo usar el método JSON
        const data = await response.json()
        console.log(data)
        setUsers(data)
    }

    useEffect(() => {
        //cuando el comoponente se monta se ejecuta el efecto
        getUsers()
    },[])

    return(
        <>
            <h2>UsersList</h2>
            {
                users.length === 0 ?
                (<p>Cargando Usuarios...</p>)
                :
                (
                    users.map((user) =>{
                        return(
                            <div>
                                <h3>{user.username}</h3>
                            </div>
                        )
                    })
                )
            }
        </>
    )
}

export default UserList;