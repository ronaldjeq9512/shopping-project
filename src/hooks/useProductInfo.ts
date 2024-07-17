import { useState } from "react";

export const useProductInfo = () => {
    const [quantity, setQuantity] = useState(0);

    const handleIncrease = () => {
      setQuantity(prevQuantity => prevQuantity + 1);
    };
  
    const handleDecrease = () => {
      setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 0));
    };
  
    const handleRemove = () => {
      setQuantity(0);
    };
  
    return {
        quantity,
        handleDecrease,
        handleIncrease,
        handleRemove
    }
}