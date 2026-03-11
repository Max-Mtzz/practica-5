import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CustomButton from "../components/CustomButton";
import { Navigate } from "react-router-dom";
import { httpClient } from "../API/http_client.gateway";

function UserDetail() {
    const navigate = useNavigate()
    const { id } = useParams() // obtenemos el id de los params de la url
    const [user, setUser] = useState(null) // incializamos el estado usuario como nulo

    const getUser = async () => {
        // hacemos petición a la API
        const data = await httpClient(`users/${id}`)
        console.log(data)

        setUser(data)
    }

    useEffect(() => {
        // cuando el componente se monta
        if (id) {
            getUser()
        }
    }, [id])

    return (
        <>
            <CustomButton action={() => { navigate('/users') }}>
                Listar Usuarios
            </CustomButton>
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