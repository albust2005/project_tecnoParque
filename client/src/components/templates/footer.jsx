import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";


export const Footer = () => {
    return (
        <div className="flex w-full text-center items-center justify-center gap-6 font-serif p-6">
            <h1 className="font-semibold text-lg w-full">Contactanos</h1>
            <div className="flex justify-center gap-11 w-full">
                <FontAwesomeIcon 
                    icon={faInstagram}
                    size="lg"
                />
                <FontAwesomeIcon 
                    icon={faFacebook}
                    size="lg" 
                />
                <FontAwesomeIcon 
                    icon={faTwitter}
                    size="lg"
                />
            </div>
            <div className="flex justify-center  w-full">
                <small>@Copyrigth</small>
            </div>
        </div>
    )
}