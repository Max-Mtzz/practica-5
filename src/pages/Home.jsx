import CustomButton from "../components/CustomButton";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

    const irALogin = () => {
        navigate('/login');
    }

    return (
        <div>
            <h1>Bienvenido a la App</h1>
            <p>Por favor, inicia sesión para continuar.</p>
            
            <CustomButton action={irALogin}>
                Ir al Login
            </CustomButton>
        </div>
    )
}

export default Home
