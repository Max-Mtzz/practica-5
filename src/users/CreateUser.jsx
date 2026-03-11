import { useState } from "react";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { useNavigate } from "react-router-dom";
import { httpClient } from "../API/http_client.gateway";

function CreateUser(){  
    const navigate = useNavigate()

    const [newUser, setNewUser] = useState({
        username:'',
        email: '',
        password: ''
    })

    const handleCreateUser = async() =>{

        //validaciones
        if(newUser.username === '' || newUser.username === null){
            alert('El nombre es requerido')
            return
        }

        if(newUser.email === '' || newUser.email === null){
            alert('El correo es requerido')
            return
        }

        if(newUser.password === '' || newUser.password === null){
            alert('La contraseña es requerida')
            return
        }

        //try catch para manejar errores
        try {
            //si dentro del try catch hay un error se ejecuta el catch y deja de ejecutar el codigo que sigue
            //hacemos una peticion
             
            const data = await httpClient('users','POST', newUser)

            //si la respuesta no es ok, creamos un error personalizado
            if(!data && data.id){
                //crear error
                const error = new Error('Error al crear el usuario')
                error.status = response.status
                error.statusText = data.message

                throw error //lanzar el error
            }

            navigate('/userDetail/' + data.id)

        } catch (error) {
            console.log(error.status, error.statusText)
            alert(`Error ${error.status}: ${error.statusText}`)
        }
    }

    return(
        <>
            <h2>Create User</h2>
            <CustomButton action={() => { navigate('/users') }}>
                Listar Usuarios
            </CustomButton>
            {JSON.stringify(newUser)}
            <div>
                <CustomInput
                label={"Username"}
                type={"text"}
                name={"username"}
                value={newUser.username}
                onChange={
                    (event) =>{
                        setNewUser({...newUser, username: event.target.value})
                    }
                }
                />
                <CustomInput
                label={"Correo"}
                type={"email"}
                name={"email"}
                value={newUser.email}
                onChange={
                    (event) =>{
                        setNewUser({...newUser, email: event.target.value})
                    }
                }
                />
                <CustomInput
                label={"Contraseña"}
                type={"password"}
                name={"password"}
                value={newUser.password}
                onChange={
                    (event) =>{
                        setNewUser({...newUser, password: event.target.value})
                    }
                }
                />
                <CustomButton action={handleCreateUser}>
                    Crear Usuario
                </CustomButton>
            </div>
        </>
    )
}

export default CreateUser;