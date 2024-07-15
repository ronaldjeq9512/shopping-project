import './CarouselItem.css'

interface CarouselItemProps {
    imageUrl: string;
    isActive: boolean;
}

export const CarouselItem = ({ imageUrl, isActive }: CarouselItemProps) => {
    return (
        <div className={`carousel-item ${isActive ? 'active' : ''}`}>
            <img src={imageUrl} className="d-block w-100 imageProyect" alt="..." />
        </div>
    )
}