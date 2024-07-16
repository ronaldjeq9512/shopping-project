import './Card.css'

interface CardProps {
    image: string;
    title: string;
    description: string;
    price: string;
}


export const Card = ({ image, title, description, price }: CardProps) => {
    return (
        <>
            <div className="card m-2 border-0 shadow" style={{ width: '18rem' }}>
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <li className="list-group-item">{description}</li>
                    <a href="#" className="btn btn-primary">Ordenar</a>
                    <ul className="list-group list-group-flush">
                        <p className="list-group-item-p">{price}</p>
                    </ul>
                </div>
            </div>
        </>
    );
}