import { useNavigate } from 'react-router-dom';
import './Card.css'

interface CardProps {
    image: string;
    title: string;
    description: string;
    price: number;
    id: string;
    haveToreplace?: boolean
}


export const Card = ({ image, title, description, price, id }: CardProps) => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/detail/${id}`);
      };
    return (
        <>
            <div className="card m-2 border-0 shadow" style={{ width: '18rem' }}>
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <li className="list-group-item">{description}</li>
                    <a onClick={handleNavigate} className="btn btn-primary">Ordenar</a>
                    <ul className="list-group list-group-flush">
                        <p className="list-group-item-p"> S/. {price}</p>
                    </ul>
                </div>
            </div>
        </>
    );
}