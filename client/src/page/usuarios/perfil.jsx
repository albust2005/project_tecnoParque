import { ButtonNav } from "../../components/buttons/bNav";


export function PerfilU() {
    return (
        <section className="flex w-full h-auto justify-center p-[5vh]">
            <div className="bg-gray-200 w-[70%] h-[80vh] flex flex-col items-center p-[2%] rounded-[5vh]">
                <ButtonNav text="Regresar" href="/usuarios"></ButtonNav>
                <div className="w-[14%] h-[27%] rounded-full overflow-hidden mt-[2vh]">
                    <img src="../../../src/assets/img/libros.jpg" alt="" className=""/>
                </div>
                <h1 className="text-3xl my-[1vh]">
                    Jose Manuel Muñoz
                </h1>
                <div className="grid grid-rows-3 grid-flow-col gap-4 gap-x-[10vh]"> 
                    <div>
                        <h1>Nombre de Usuario</h1>
                        <h2>Jose</h2>
                    </div>
                    <div>
                        <h1>Correo</h1>
                        <h2>jose@mail.com</h2>
                    </div>
                    <div>
                        <h1>Cedula</h1>
                        <h2>1036254225</h2>
                    </div>
                    <ButtonNav text="Editar"></ButtonNav>
                    <ButtonNav text="Eliminar"></ButtonNav>
                </div>
            </div>
        </section>
    )
}