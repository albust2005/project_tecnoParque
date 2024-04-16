import { Target } from "../components/templates/target"
import { Footer } from "../components/templates/footer"

export function Index() {
    return(
        <>
            <div className="flex w-full h-[80vh] overflow-hidden z-10 justify-center items-center">
                <div className="flex flex-col h-[80%] w-full absolute bg-gray-500 z-10 opacity-70 text-center items-center justify-center"></div>
                <img src="../../src/assets/img/imagenLibro.webp" alt="" className="w-full object-cover -z-10"/>
                <h1 className="absolute z-20 text-5xl font-serif mb-[10%]">Empresa ABC</h1>
                <p className="absolute z-20 mt-[8%] w-[80%] text-center text-white">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas exercitationem accusantium magnam, alias deserunt repellat iste labore numquam excepturi, nostrum est repudiandae dicta rem expedita. Tenetur impedit sequi perferendis ab.
                </p>
            </div>
            <section className="flex flex-col items-center w-full h-[40vh]">
                <h1 className="font-serif text-3xl m-[2vh]">Equipo de desarrollo</h1>
                <Target name="David Santiago Úsuga"/>
            </section>
            <Footer />
        </>
    )
}