import ErrorImage from '../../assets/images/checkout/empty.png';
import { Error } from './Error';
export const EmptyProducts = () => {
    return (
        <Error image={ErrorImage} text='No hay productos añadidos al carrito' />
    );
};
