import { useEffect, useState } from "react";
import CustomTable from "../components/CustomTable";
import CustomButton from "../components/CustomButton";
import { useNavigate } from "react-router-dom";
import { httpClient } from "../API/http_client.gateway";

function UserList(){

    const [users, setUsers] = useState([])
    const columns = ['Nombre', 'Email', 'Acciones']
    const navigate = useNavigate()

    const getUsers = async() => {
        //fetch es una promesa (función asincrona)
        //para manejar la respueta debo esperar a que se resuelva la promesa
        const data = await httpClient("users", "GET");

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
                   <CustomTable 
                   columns={columns}
                   data={users.map((user) =>(
                    {
                        id: user.id,
                        nombre: user.username,
                        email: user.email,
                        acciones: <>
                            <CustomButton action={() => {navigate(`/userDetail/${user.id}`)}}>
                                Ver Detalle
                            </CustomButton>
                        </>
                    }
                   ))}/>
                )
            }
        </>
    )
}

export default UserList;