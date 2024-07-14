import './NavItem.css'

interface NavItemProps {
    title: string
}

export const NavItem = ({title}: NavItemProps) => {
    return (
        <li className="nav-item">
            <a className="nav-link titleNav" href="#">{title}</a>
        </li>
    )
}