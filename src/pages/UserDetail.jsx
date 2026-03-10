import { useEffect } from "react";
import { useParams } from "react-router-dom";

function UserDetail(){

    const {id} = useParams()

    const getUser = async () =>{
        const response = await fetch(`https://fakestoreapi.com/users/${id}`)
        const data = await response.json() // esperar a que json nos devuelva el cuerpo de la respuesta
        console.log(data)
    }

    useEffect(() =>{
        // cuando el componente se monta
        if(id){
            getUser()
        }
    },[id])

    return(
        <h2>UserDetail</h2>
    )
}

export default UserDetail;