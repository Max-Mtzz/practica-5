import { useEffect, useState } from "react";
import CustomTable from "../components/CustomTable";
import CustomButton from "../components/CustomButton";
import { useNavigate } from "react-router-dom";
import { httpClient } from "../API/http_client.gateway";
import { useAuth } from "../security/authContext";

function UserList() {
    const { borrarInformacionDeSesion } = useAuth()
    const [users, setUsers] = useState([])
    const columns = ['Username', 'Nombre', 'Apellido', 'Email', 'Password', 'Acciones']
    const navigate = useNavigate()

    const getUsers = async () => {
        //fetch es una promesa (función asincrona)
        //para manejar la respueta debo esperar a que se resuelva la promesa
        const data = await httpClient("users", "GET");

        setUsers(data)
    }

    useEffect(() => {
        //cuando el comoponente se monta se ejecuta el efecto
        getUsers()
    }, [])

    const logout = () => {
        borrarInformacionDeSesion()
    }

    const deleteUser = async (id) => {
        // Hacemos la petición 
        const data = await httpClient(`users/${id}`, 'DELETE');

        // Si la API responde exitosamente
        if (data) {
            alert('¡Usuario eliminado con éxito!');
        } else {
            alert('Hubo un error al eliminar el usuario.');
        }
    }

    return (
        <>
            <h2>UsersList</h2>
            <CustomButton action={() => { navigate('/createUser') }}>
                Crear usuario
            </CustomButton>
            <CustomButton action={logout}>
                Cerrar Sesión
            </CustomButton>
            {
                users.length === 0 ?
                    (<p>Cargando Usuarios...</p>)
                    :
                    (
                        <CustomTable
                            columns={columns}
                            data={users.map((user) => (
                                {
                                    id: user.id,
                                    username: user.username,
                                    nombre: user.name.firstname,
                                    apellido: user.name.lastname,
                                    email: user.email,
                                    password: user.password,
                                    acciones: <>
                                        <CustomButton action={() => { navigate(`/userDetail/${user.id}`) }}>
                                            Ver Detalle
                                        </CustomButton>
                                        <CustomButton action={deleteUser}>
                                            Borrar usuario
                                        </CustomButton>
                                    </>
                                }
                            ))} />
                    )
            }
        </>
    )
}

export default UserList;