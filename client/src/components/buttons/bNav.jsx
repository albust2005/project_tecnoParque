import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

export function ButtonNav({ href, text }){
    return(
        <Link 
        to={href}
        className="border-none p-[1vh]  hover:bg-[#576A5B] hover:text-[#F5F5DC]
         rounded-sm mx-[1vh] h-[6vh] min-w-[10vh] text-center"  
        >
        {text}
        </Link>
    )
}

ButtonNav.propTypes = {
    text: PropTypes.string,
    href: PropTypes.string
} 