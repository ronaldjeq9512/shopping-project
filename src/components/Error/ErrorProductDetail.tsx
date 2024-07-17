import ErrorImage from '../../assets/images/productDetail/notFound.png';
import { Error } from './Error';
export const ErrorProductDetail = () => {
    return (
        <Error image={ErrorImage} text='No se encontró el producto' />
    );
};
