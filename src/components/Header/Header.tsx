import { Cart } from "./Cart";
import { LogoComponent } from "./Logo";
import './Header.css';
import { MENU } from "../../constants/menu";
import { NavItem } from "./NavItem";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export const Header = () => {
    const cartContext = useContext(CartContext);
    const totalQuantity = cartContext?.state.totalQuantity?? 0;
    return (
        <header className="sticky-top">
            <nav className="navbar bg-primary navbar-expand-sm" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <LogoComponent />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-sm-auto align-items-center">
                            { MENU.map(item => (
                                <NavItem key={item.title} title={item.title} />
                            ))}
                            <li className="nav-item">
                                <button type="button" className="btn btn-dark">Iniciar sesión</button>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
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
