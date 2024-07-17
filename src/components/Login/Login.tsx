import "./Login.css";
import { useNavigate } from "react-router-dom";

export const Login = () => {

        const navigate = useNavigate();
      
        const handleNavigatex = () => {
          
            navigate(`/registraruser`, { replace: true });
          
        };

    return (
        <>
        
        <div className="container-login">
            
        <form className="centered-form">
        <h2>Ingresa o crea tu cuenta</h2>
            <div className="form-group">
                <label>Correo electronico</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    
            </div>
            <div className="form-group">
                <label>Contraseña</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            <button type="submit" className="btn btn-primary btn-block boton">Ingresar</button>
            <button onClick={handleNavigatex}type="button" className="btn btn-outline-primary boton2">Registrate</button>
        </form>
        </div>
        </>
    );
};