import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export function Target({ name }) {
    return (
        <div className="flex bg-[#86a2bd] w-[20%] h-[15vh] rounded-[3vh] p-[1vh] items-center mt-[4vh]">
            <div className="flex bg-gray-400 rounded-full overflow-hidden w-[8vh] h-[8vh] justify-center items-center ml-[2vh]">
                <FontAwesomeIcon 
                    className="h-[7vh]"
                    style={{color: ""}}
                    icon={faUser}
                />
            </div>
            <div className="ml-[2vh] text-center">
                <h1 className="">{name}</h1>
                <h2>Desarrollador</h2>
            </div>
        </div>
    )
}