import './Login.css';
import { useLogin } from '../../hooks/useLogin';

export const Login = () => {
    const { handleNavigatex, handleSubmit, onSubmit, register, errors, errorUser } = useLogin();

    return (
        <div className="container-login">
            <form className="centered-form" onSubmit={handleSubmit(onSubmit)}>
                <h2>Ingresa o crea tu cuenta</h2>
                <div className="form-group">
                    <label>Correo electrónico</label>
                    <input
                        type="email"
                        className="form-control"
                        {...register('email', { required: 'El correo electrónico es requerido' })}
                        placeholder="Enter email"
                    />
                    {errors.email && <p className="text-danger">{errors.email.message}</p>}
                </div>
                <div className="form-group">
                    <label>Contraseña</label>
                    <input
                        type="password"
                        className="form-control"
                        {...register('password', { required: 'La contraseña es requerida' })}
                        placeholder="Password"
                    />
                    {errors.password && <p className="text-danger">{errors.password.message}</p>}
                </div>
                {errorUser && <p className="text-danger">Usuario o clave incorrectos</p>}
                <button type="submit" className="btn btn-primary btn-block boton">Ingresar</button>
                <button onClick={handleNavigatex} type="button" className="btn btn-outline-primary boton2">Regístrate</button>
            </form>
        </div>
    );
};
