import "./RegistrarUser.css";

export const RegistrarUser = () => {
    return (
        <>

            <div className="container-regis">
                <form className="centered-form">
                    <h2>Registrate</h2>
                    <div className="form-group">
                        <label>Nombre</label>
                        <input type="text" className="form-control" id="text" aria-describedby="emailHelp" placeholder="Ingresar nombre" />
                        <label>Nombre</label>
                        <input type="text" className="form-control" id="text" aria-describedby="emailHelp" placeholder="Ingresar apellido" />
                        <label>Correo electronico</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingresar email" />

                    </div>
                    <div className="form-group">
                        <label>Contraseña</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Ingresar contraseña" />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block boton">Registrar</button>
                </form>
            </div>
        </>
    );
};