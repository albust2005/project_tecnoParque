import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export function Target({ name }) {
    return (
        <div className="flex bg-[#576a5b] w-[27%] h-[17vh] rounded-sm p-[1vh] items-center mt-[4vh] text-white font-serif text-center">
            <div className="flex  rounded-full overflow-hidden w-[10vh] h-[10vh] justify-center items-center ml-[2vh]">
                <FontAwesomeIcon 
                    style={{color: "#fff"}}
                    icon={faUser}
                    size="4x"
                />
            </div>
            <div className="ml-[2vh] text-center">
                <h1 className="text-2xl font-medium ">{name}</h1>
                <h2 className="text-lg">Desarrollador</h2>
            </div>
        </div>
    )
}