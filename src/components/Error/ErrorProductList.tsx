import ErrorImage from '../../assets/images/home/errorHome.jpg';
import { Error } from './Error';

export const ErrorProductList = () => {
    return (
        <Error image={ErrorImage} text='No se pudo cargar la información, vuelva a intantarlo más tarde' />
    );
};
