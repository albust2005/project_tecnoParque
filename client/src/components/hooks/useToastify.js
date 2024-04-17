import { toast, Zoom, } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export const useToastify = () => {

    const showToastMessage = (message ) => {
        toast(message, {
            className: "foo-bar",
            theme: "light",
            transition: Zoom,
            autoClose: 1000
        });
    }

    return { showToastMessage }
}