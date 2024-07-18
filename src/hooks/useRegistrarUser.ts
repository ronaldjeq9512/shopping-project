import { useEffect, useState } from "react"

export const UseRegistrarUser = () => {
    const [isLoading, setisLoading] = useState(false);
    const [error, setError] = useState(false);


   

    useEffect(()=>{
        setError(false);
        setisLoading(false);
    }, [])

    return {
        isLoading,
        error
    }
}