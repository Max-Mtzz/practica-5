import { useEffect, useState } from "react";
import { AuthContext } from "./authContext";

function AuthProvider({ children }) {
    // las variables de js no persisten al recargar la página
    const [session, setSession] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() =>{
        // asegurase que la información persista dentro del estado de react aunque se recarge la página
        const token = localStorage.getItem('token')

        if(token){
            setSession(token)
        }

        setIsLoading(false)
    },[])

    // funciones que manejan mi contexto las expongo para que cualquier componente pueda usarlos
    const guardarInformacionDeSesion = (token) =>{
        if(token){
            // guardar un estado apra react
            setSession(token)
            // guardamos en localstorage para mas seguridad
            localStorage.setItem('token',token)
        }
    }

    const borrarInformacionDeSesion = () =>{
        setSession(null)
        localStorage.removeItem('token')
    }

    return (
        <AuthContext.Provider value={{session,isLoading, guardarInformacionDeSesion, borrarInformacionDeSesion}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
