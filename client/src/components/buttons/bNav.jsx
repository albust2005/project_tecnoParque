import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

export function ButtonNav({ href, text }){
    return(
        <Link 
        to={href}
        className="border-none p-[1vh] bg-gray-100 rounded-[1vh]"   
        >
        {text}
        </Link>
    )
}

ButtonNav.propTypes = {
    text: PropTypes.string,
    href: PropTypes.string
} 