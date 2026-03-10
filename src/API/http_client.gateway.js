// centralizar en una función reutilizable
//la lógica para hacer peticiones
import { API_URL } from "./constants"

export const httpClient = async(url, method, body, headers) =>{
    // si tengo un token para la autenticacion lo agrego a los headers
    const token = localStorage.getItem('token')
    
    if(token){
        // agrego el token al header de la peticion
        headers['Authorization'] = `Bearer ${token}`
    }

    try{
        //hago la peticion a mi base url + el recurso que quiero consumir
        const response = await fetch(API_URL+url,{
            method: method,
            body: body,
            headers: headers,
        })

        //valida si la respuesta es ok si no es ok hacemos un error personalizado
        if(!response.ok){
            const error = new Error('Error al hacer la petición')
            error.status = response.status
            error.statusText = response.statusText
            throw error
        }

        //retornamos directamente el cuerpo de la respuesta
        return await response.json()

    } catch (error){
        //mandamos el error
        console.log(error)
        throw error
    }
}