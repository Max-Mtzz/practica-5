import { useState } from "react";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

function CreateUser(){

    const [newUser, setNewUser] = useState({
        username: '',
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
            alert('El nombre es requerido')
            return
        }

        if(newUser.password === '' || newUser.password === null){
            alert('El nombre es requerido')
            return
        }

        //try catch para manejar errores
        try {
            //si dentro del try catch hay un error se ejecuta el catch y deja de ejecutar el codigo que sigue
            //hacemos una peticion
             const response = await fetch('https://fakestoreapi.com/users',{
            method: 'POST', //método de la petición
            headers: { //metadatos de la petición
                'Content-Type': 'application-json' //tipo de contenido de la petición
            },
            body: JSON.stringify(newUser) //información que se envía a la petición
            })
            //obtener respuesta
            const data = await response.json()

            //si la respuesta no es ok, creamos un error personalizado
            if(!response.ok){
                //crear error
                const error = new Error('Error al crear el usuario')
                error.status = response.status
                error.statusText = data.message

                throw error //lanzar el error
            }

        } catch (error) {
            console.log(error.status, error.statusText)
            alert(`Error ${error.status}: ${error.statusText}`)
        }
    }

    return(
        <>
            <h2>Create User</h2>
            {JSON.stringify(newUser)}
            <div>
                <CustomInput
                label={"username"}
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
                label={"email"}
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
                label={"password"}
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