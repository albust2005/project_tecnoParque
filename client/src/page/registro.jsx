import { useForm } from 'react-hook-form';

export function Registro() {

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm();


    return(
        <div>
            <form>
                <div>
                    <div>
                        <label htmlFor="ID">
                            Cedula
                        </label>
                        <input 
                            type="number"
                            {...register("ID", {
                                required: {
                                    value: true,
                                    message: "Escribir tu cedula",
                                },
                            })} 
                        />
                        {errors.ID && (<span>{errors.ID.message}</span>)}
                    </div>

                    <div>
                        <label htmlFor="nombre_c">
                            Nombre Completo
                        </label>
                        <input 
                            type="text"
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

                    <div>
                        <label htmlFor="numero_tarjeta">
                            Numero de Tarjeta
                        </label>
                        <input 
                            type="number"
                            {...register("numero_tarjeta", {
                                message: "Escribe tu numero de tarjeta"
                            })} 
                        />
                        {errors.numero_tarjeta && (<span>{errors.numero_tarjeta.message}</span>)}
                    </div>

                    <div>
                        <label htmlFor="correo">
                            Correo Electronico
                        </label>
                        <input 
                            type="email"
                            {...register("correo", {
                                required: {
                                    value: true,
                                    message: "Escribir tu correo electronico",
                                },
                            })} 
                        />
                        {errors.correo && (<span>{errors.correo.message}</span>)}
                    </div>

                    <div>
                        <label htmlFor="username">
                            Nombre de usuario
                        </label>
                        <input 
                            type="text"
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

                    <div>
                        <label htmlFor="contrasena">
                            Contraseña
                        </label>
                        <input 
                            type="password"
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

                    <div>
                        <label htmlFor="confirmarContrasena">
                            Confirmar Contraseña
                        </label>
                        <input 
                            type="password"
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

                    <button>Registro</button>
                </div>
            </form>
        </div>
    )
}