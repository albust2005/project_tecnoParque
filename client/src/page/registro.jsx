import { useForm } from 'react-hook-form';
import { useNewUserContext } from '../components/providers/userProvider';

export function Registro() {

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm();  

    const {createUser} = useNewUserContext();

    return(
        <div>
            <form
                onSubmit={handleSubmit(createUser)}
                className='bg-gray-200 p-[3vh] rounded-[2.5vh] w-[60vh]'
            >
                <div className="flex flex-col items-center">
                    <h1 className="font-serif text-2xl mb-[2vh]">Registro</h1>
                    <div className="flex flex-col w-[80%] mb-[2vh]">
                        <label className="font-serif text-xl">
                            Cedula
                        </label>
                        <input 
                            type="number"
                            className="rounded-[1vh] p-[1vh]"
                            {...register("ID", {
                                required: {
                                    value: true,
                                    message: "Escribir tu cedula",
                                },
                            })} 
                        />
                        {errors.ID && (<span>{errors.ID.message}</span>)}
                    </div>

                    <div className="flex flex-col w-[80%] mb-[2vh]">
                        <label className="font-serif text-xl">
                            Nombre Completo
                        </label>
                        <input 
                            type="text"
                            className="rounded-[1vh] p-[1vh]"
                            {...register("nombre_c", {
                                required: {
                                    value: true,
                                    message: "Escribir tu nombre completo",
                                },
                                minLength: 3,
                            })} 
                        />
                        {errors.nombre_c && (<span>{errors.nombre_c.message}</span>)}
                    </div>

                    <div className="flex flex-col w-[80%] mb-[2vh]">
                        <label className="font-serif text-xl">
                            Numero de Tarjeta
                        </label>
                        <input 
                            type="number"
                            className="rounded-[1vh] p-[1vh]"
                            {...register("numero_tarjeta", {
                                message: "Escribe tu numero de tarjeta"
                            })} 
                        />
                        {errors.numero_tarjeta && (<span>{errors.numero_tarjeta.message}</span>)}
                    </div>

                    <div className="flex flex-col w-[80%] mb-[2vh]">
                        <label className="font-serif text-xl">
                            Correo Electronico
                        </label>
                        <input 
                            type="email"
                            className="rounded-[1vh] p-[1vh]"
                            {...register("correo", {
                                required: {
                                    value: true,
                                    message: "Escribir tu correo electronico",
                                },
                            })} 
                        />
                        {errors.correo && (<span>{errors.correo.message}</span>)}
                    </div>

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
                                minLength: 3,
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
                                minLength: 3,
                            })} 
                        />
                        {errors.contrasena && (<span>{errors.contrasena.message}</span>)}
                    </div>

                    <div className="flex flex-col w-[80%] mb-[2vh]">
                        <label className="font-serif text-xl">
                            Confirmar Contraseña
                        </label>
                        <input 
                            type="password"
                            className="rounded-[1vh] p-[1vh]"
                            {...register("confirmarContrasena", {
                                required: {
                                    value: true,
                                    message: "Confirma tu contraseña",
                                },
                                minLength: 3,
                                validate: (value) => {
                                    if (value === watch("contrasena")) {
                                        return true;
                                    }else{
                                        return "La contraseña no coincide";
                                    }
                                },
                            })} 
                        />
                        {errors.confirmarContrasena && (<span>{errors.confirmarContrasena.message}</span>)}
                    </div>

                    <button className="m-[1vh] p-[2vh] bg-emerald-300 rounded-[2vh] text-white border-solid border-2 hover:bg-transparent hover:text-emerald-300 hover:border-emerald-300">
                        Registrar
                    </button>
                </div>
            </form>
        </div>
    )
}