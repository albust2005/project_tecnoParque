import { useState, useEffect } from "react";

export const useImageURL = () => {
    const [image, setImage] = useState(null);
    const [imageURL, setImageURL] = useState(null);

    const handleImage = (e) => {
        const newImage = e.target.files[0]
        setImage(newImage)  
    }

    useEffect(() => {
        if(image) {
            const renderImage = new FileReader();
            renderImage.onload = () => {
                const imageURL = renderImage.result;
                setImageURL(imageURL);
            }
            renderImage.readAsDataURL(image);
            console.log("imagen renderizada")
        }else{
            setImage(null);
        }
    }, [image]);

    return { imageURL, handleImage }
}