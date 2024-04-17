import { useForm } from 'react-hook-form';
import { useLoginUserContext } from '../components/providers/userProvider';

export function InicioSesion() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const {loginUser} = useLoginUserContext()

    return(
        <div>
            <form 
                className='bg-gray-200 p-[3vh] rounded-[2.5vh] w-[60vh]'
                onSubmit={handleSubmit(loginUser)}
            >
                <div className="flex flex-col items-center">
                    <h1 className="font-serif text-2xl mb-[2vh]">Iniciar Sesión</h1>
                    <div className="flex flex-col w-[80%] mb-[2vh]">
                        <label className="font-serif text-xl">
                            Nombre de usuario
                        </label>
                        <input 
                            type="text"
                            className="rounded-[1vh] p-[1vh]"
                            {...register("username", {
                                required: {
                                    value: true,
                                    message: "Escribir tu nombre de usuario",
                                },
                            })} 
                        />
                        {errors.username && (<span>{errors.username.message}</span>)}
                    </div>
                    <div className="flex flex-col w-[80%] mb-[2vh]">
                        <label className="font-serif text-xl">
                            Contraseña
                        </label>
                        <input 
                            type="password"
                            className="rounded-[1vh] p-[1vh]"
                            {...register("contrasena", {
                                required: {
                                    value: true,
                                    message: "Escribir tu contraseña",
                                },
                            })} 
                        />
                        {errors.contrasena && (<span>{errors.contrasena.message}</span>)}
                    </div>

                    <div className="flex flex-col w-[80%] mb-[2vh]">
                        <label htmlFor="Rol" className="font-serif text-xl">Rol</label>
                        <select 
                            name="Rol" 
                            {...register("Rol")}
                            className="rounded-[1vh] p-[1vh]"
                        >
                            <option value="rol" disabled className="text-black">Rol</option>
                            <option value="Cliente" className="text-black">Cliente</option>
                            <option value="Empresa" className="text-black">Empresa</option>
                        </select>
                    </div>

                    <button className="m-[1vh] p-[2vh] bg-emerald-300 rounded-[2vh] text-white border-solid border-2 hover:bg-transparent hover:text-emerald-300 hover:border-emerald-300">
                        Iniciar Sesión
                    </button>
                </div>
            </form>
        </div>
    )
}