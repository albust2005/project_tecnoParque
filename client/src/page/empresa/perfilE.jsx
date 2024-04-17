import { useUserContext } from "../../components/providers/userProvider"


export function PerfilE() {

    const { sesionUser } = useUserContext();

    return (
        <section>
            <section>
            <div className="flex flex-col items-center w-full mt-[3%]">
                <h1 className="font-serif text-6xl">
                    Bienvenido {sesionUser.username}
                </h1>
                <p className="font-serif mt-[3%]">
                    “Un libro debe ser el hacha que rompa el mar helado que hay dentro de nosotros”. Franz Kafka
                </p>
                <p className="font-serif mt-[3%]">
                    “Si no te gusta leer, no has encontrado el libro correcto”. J.K. Rowling
                </p>
                <p className="font-serif mt-[3%]">
                    No es cierto que tengamos solo una vida: si leemos podemos vivir tantas y de tantos tipos como queramos”. Samuel I. Hayakawa
                </p>
            </div>
        </section>
        </section>
    )
}