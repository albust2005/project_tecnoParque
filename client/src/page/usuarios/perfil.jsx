import { ButtonNav } from "../../components/buttons/bNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useUserContext } from "../../components/providers/userProvider";
import { useUsuarioContext } from "../../components/providers/usuariosProvider";


export function PerfilU() {

    const { sesionUser } = useUserContext()
    const { usuarios } = useUsuarioContext()

    const ID_user = usuarios.find((usuario) => usuario.username == sesionUser.username) 
    console.log(ID_user)

    return (
        <section className="flex w-full h-auto justify-center p-[5vh] text-white font-serif">
        <div className="bg-[#576A5B] w-[70%] h-[80vh] flex flex-col items-center p-[2%] rounded-sm relative">
            <div className="flex justify-start absolute left-3 top-2">
                <Link to="/usuarios">
                    <FontAwesomeIcon
                    icon={faArrowLeft}
                    style={{ color: "#fff" }}
                    size="lg"
                    />
                </Link>
            </div>

            <div className="w-[14%] h-[27%] rounded-full overflow-hidden mt-[2vh]">
                <img src="../../../src/assets/img/libros.jpg" alt="" className="" />
                </div>
                <h1 className="text-5xl my-[1vh] font-semibold">{ID_user.nombre_c}</h1>
                <div className="grid grid-rows-3 grid-flow-col gap-4 gap-x-[10vh]">
                <div>
                    <h1 className="text-xl font-semibold">Nombre de Usuario</h1>
                    <h2 className="text-lg">{ID_user.username}</h2>
                </div>
                <div>
                    <h1 className="text-xl font-semibold">Correo</h1>
                    <h2 className="text-lg">{ID_user.correo}</h2>
                </div>
                <div>
                    <h1 className="text-xl font-semibold">Cedula</h1>
                    <h2 className="text-lg">{ID_user.ID}</h2>
                </div>
                <ButtonNav text="Editar"></ButtonNav>
                <ButtonNav text="Eliminar"></ButtonNav>
            </div>
        </div>
        </section>
    );
}
