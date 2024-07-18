import { useNavigate } from "react-router-dom";
import { userService } from "../services/user/user.service";
import { useForm, SubmitHandler } from "react-hook-form";
import { useContext, useState } from "react";
import { userLoginForm } from "../types/user";
import { UserContext } from "../contexts/UserContext";

export const useLogin = () => {
    const userContext = useContext(UserContext);

    const { register, handleSubmit, formState: { errors } } = useForm<userLoginForm>();
    const navigate = useNavigate();
    const [errorUser, setErrorUser] = useState(false);
    if (!userContext) {
      throw new Error("useOrderForm must be used within a CartProvider");
    }
    const { dispatch } = userContext;

    const onSubmit: SubmitHandler<userLoginForm> = async (data) => {
      try {
        setErrorUser(false);
        const response = await userService.login({
          clave: data.password,
          correo: data.email
        });
        if(response) {
           dispatch({type: "ADD_USER", user: response})
           navigate('/');
        } else {
            setErrorUser(true);
        }
      } catch (error) {
        alert(`No se pudo iniciar sesión, inténtelo más tarde`);
      }
    };
  
    const handleNavigatex = () => {
      navigate('/registraruser', { replace: true });
    };

    return {
        register,
        errors,
        handleNavigatex,
        onSubmit,
        handleSubmit,
        errorUser
    };
};
