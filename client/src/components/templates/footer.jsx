import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";


export const Footer = () => {
    return (
        <div className="flex flex-col text-center font-serif">
            <h1 className="font-semibold text-lg">CONTACTANOS</h1>
            <div className="flex justify-center gap-11 py-[3vh] px-[15%]">
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
            <div className="flex justify-center ">
                <h3>@Copyrigth</h3>
            </div>
        </div>
    )
}