// centralizar en una función reutilizable
//la lógica para hacer peticiones
import { API_URL } from "./constants"

export async function httpClient(url, method = 'GET', body, headers={}) {
    // si tengo un token para la autenticacion lo agrego a los headers
    const token = localStorage.getItem('token')
    
    if(token){
        // agrego el token al header de la peticion
        headers['Authorization'] = `Bearer ${token}`
    }

    try{
        //hago la peticion a mi base url + el recurso que quiero consumir
        const response = await fetch(API_URL+url,{
            headers: {
                ...headers,
                'Content-Type': 'application/json'
            },
            method: method,
            body: JSON.stringify(body)
        })

        const data = await response.json()

        //retornamos directamente el cuerpo de la respuesta
        return data

    } catch (error){
        //mandamos el error
        console.log(error)
    }
}