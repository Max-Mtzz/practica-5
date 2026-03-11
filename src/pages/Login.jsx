import { useState } from 'react'
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import { httpClient } from '../API/http_client.gateway';
import { useAuth } from '../security/authContext';
import { useNavigate } from 'react-router-dom';

function Login() {

    const navigate = useNavigate()
    const {guardarInformacionDeSesion} = useAuth()

    const [formLogin, setFormLogin] = useState({
        username:'',
        password:''
    })

    const login = async() => {
        const response = await httpClient('auth/login','POST', formLogin)
        guardarInformacionDeSesion(response.token)

        navigate("/users")
    }

    return (
    <>
        <h1>Login</h1>
        <div>
            <CustomInput
            label={"Username"}
            name={"username"}
            type={"text"}
            value={formLogin.username}
            onChange={(event)=>{
                setFormLogin({...formLogin,
                    username: event.target.value
                })
            }}
            />
        </div>
        <div>
            <CustomInput
            label={"Password"}
            name={"password"}
            type={"password"}
            value={formLogin.password}
            onChange={(event)=>{
                setFormLogin({...formLogin,
                    password: event.target.value
                })
            }}
            />
        </div>
        <CustomButton action={login}>
            Iniciar Sesión
        </CustomButton>
    </>
    )
}

export default Login;
