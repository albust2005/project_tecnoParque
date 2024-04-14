import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

export function ButtonNav({ href, text }){
    return(
        <Link 
        to={href}
        className="border-solid border-2"
        >
        {text}
        </Link>
    )
}

ButtonNav.propTypes = {
    text: PropTypes.string,
    href: PropTypes.string
} 