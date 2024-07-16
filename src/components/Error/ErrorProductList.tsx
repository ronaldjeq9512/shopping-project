import ErrorImage from '../../assets/images/home/errorHome.jpg';
import './ErrorProductList.css'
export const ErrorProductList = () => {
    return (
        <section className="d-flex flex-column align-items-center text-center w-100 errorContainer">
            <figure className="d-flex justify-content-center m-0">
                <img src={ErrorImage} className="d-block w-40 imageProyect" alt="Error" />
            </figure>
            <p className="text-black m-0 errorText">
                No se pudo cargar la información, inténtelo más tarde
            </p>
        </section>
    );
};
