import { Cart } from "./Cart";
import { LogoComponent } from "./Logo";
import './Header.css';
import { MENU } from "../../constants/menu";
import { NavItem } from "./NavItem";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

export const Header = () => {
    const cartContext = useContext(CartContext);
    const totalQuantity = cartContext?.state.totalQuantity?? 0;
    const navigate = useNavigate();
    const userContext = useContext(UserContext);
    if (!userContext) {
        throw new Error("useCart must be used within a CartProvider");
      }

    console.log({userContext})
    const handleNavigated = () => {
        navigate(`/login`, { replace: true });
    };

    const logout = () => {
        userContext.dispatch({type: 'REMOVE_USER'})
    };

    return (
        <header className="sticky-top">
            <nav className="navbar bg-primary navbar-expand-sm" data-bs-theme="dark">
                <div className="container-fluid">
                    <div>
                        <a className="navbar-brand" href="/">
                            <LogoComponent />
                        </a>
                        {userContext?.state?.nombre && (
                            <span>Hola {userContext?.state?.nombre}</span> 
                        )}
                    </div>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-sm-auto align-items-center">
                            { MENU.map(item => (
                                <NavItem key={item.title} title={item.title} />
                            ))}
                            <li className="nav-item">
                                { userContext?.state?.nombre ? (
                                    <button onClick={logout} type="button" className="btn btn-dark">Cerrar sesión</button>

                                ) : (
                                    <button onClick={handleNavigated} type="button" className="btn btn-dark">Iniciar sesión</button>
                                )
                                }
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">
                                    <Cart width={25} height={25} totalQuantity={totalQuantity} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
