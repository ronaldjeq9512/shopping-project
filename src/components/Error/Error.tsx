//import ErrorImage from '../../assets/images/home/errorHome.jpg';
import './Error.css'

interface ErrorProps {
    image: string;
    text: string;
}

export const Error = ({image:ErrorImage, text}: ErrorProps) => {
    return (
        <section className="d-flex flex-column align-items-center text-center w-100 errorContainer">
            <figure className="d-flex justify-content-center m-0">
                <img src={ErrorImage} className="d-block w-40 imageProyect" alt="Error" />
            </figure>
            <p className="text-black m-0 errorText">
                {text}
            </p>
        </section>
    );
};