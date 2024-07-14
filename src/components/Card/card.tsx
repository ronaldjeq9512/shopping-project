
export const Card = ({ imagen='https://gestion.pe/resizer/v2/IOUUSANWTNDP7G3IJPGGO6NZOI.jpg?auth=b7d3e745e6f7005ccc16aa8e2f397b78c06c297702d1c37acd7d45532c4775b2&width=580&height=330&quality=75&smart=true', title='sin titulo', descripción='no hay dato', price='10'}) => {
    return (
        <>
            <div className="card m-2 border-0 shadow" style={{width:'18rem'}}>
                <img src={imagen} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{descripción}</li>
                        <li className="list-group-item">{price}</li>
                    </ul>
                    
            </div>
        </>
    );
}