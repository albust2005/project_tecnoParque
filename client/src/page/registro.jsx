import { useForm } from "react-hook-form";
import { useNewUserContext } from "../components/providers/userProvider";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export function Registro() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const { createUser } = useNewUserContext();

  return (
    <div className="">
      <form
        onSubmit={handleSubmit(createUser)}
        className="bg-[#576A5B] p-[3vh] rounded-sm w-[100vh] text-white"
      >
        <Link to="/">
          <FontAwesomeIcon
            style={{ color: "#fff" }}
            icon={faArrowLeft}
            size="xl"
          />
        </Link>

        <div className="flex flex-col items-center font-serif">
          <h1 className="font-serif text-4xl mb-[2vh]">Registro</h1>
          <div className="flex flex-col w-[80%] mb-[2vh]">
            <label className="font-serif text-xl">Cedula</label>
            <input
              type="number"
              className="rounded-[1vh] p-[1vh] bg-transparent border-b-2 border-white focus:outline-none"
              {...register("ID", {
                required: {
                  value: true,
                  message: "Escribir tu cedula",
                },
              })}
            />
            {errors.ID && <span>{errors.ID.message}</span>}
          </div>

          <div className="flex flex-col w-[80%] mb-[2vh]">
            <label className="font-serif text-xl">Nombre Completo</label>
            <input
              type="text"
              className="rounded-[1vh] p-[1vh] bg-transparent border-b-2 border-white focus:outline-none"
              {...register("nombre_c", {
                required: {
                  value: true,
                  message: "Escribir tu nombre completo",
                },
                minLength: 3,
              })}
            />
            {errors.nombre_c && <span>{errors.nombre_c.message}</span>}
          </div>

          <div className="flex flex-col w-[80%] mb-[2vh]">
            <label className="font-serif text-xl">Numero de Tarjeta</label>
            <input
              type="number"
              className="rounded-[1vh] p-[1vh] bg-transparent border-b-2 border-white focus:outline-none"
              {...register("numero_tarjeta", {
                message: "Escribe tu numero de tarjeta",
              })}
            />
            {errors.numero_tarjeta && (
              <span>{errors.numero_tarjeta.message}</span>
            )}
          </div>

          <div className="flex flex-col w-[80%] mb-[2vh]">
            <label className="font-serif text-xl">Correo Electronico</label>
            <input
              type="email"
              className="rounded-[1vh] p-[1vh] bg-transparent border-b-2 border-white focus:outline-none"
              {...register("correo", {
                required: {
                  value: true,
                  message: "Escribir tu correo electronico",
                },
              })}
            />
            {errors.correo && <span>{errors.correo.message}</span>}
          </div>

          <div className="flex flex-col w-[80%] mb-[2vh]">
            <label className="font-serif text-xl">Nombre de usuario</label>
            <input
              type="text"
              className="rounded-[1vh] p-[1vh] bg-transparent border-b-2 border-white focus:outline-none"
              {...register("username", {
                required: {
                  value: true,
                  message: "Escribir tu nombre de usuario",
                },
                minLength: 3,
              })}
            />
            {errors.username && <span>{errors.username.message}</span>}
          </div>

          <div className="flex flex-col w-[80%] mb-[2vh]">
            <label className="font-serif text-xl">Contraseña</label>
            <input
              type="password"
              className="rounded-[1vh] p-[1vh] bg-transparent border-b-2 border-white focus:outline-none"
              {...register("contrasena", {
                required: {
                  value: true,
                  message: "Escribir tu contraseña",
                },
                minLength: 3,
              })}
            />
            {errors.contrasena && <span>{errors.contrasena.message}</span>}
          </div>

          <div className="flex flex-col w-[80%] mb-[2vh]">
            <label className="font-serif text-xl">Confirmar Contraseña</label>
            <input
              type="password"
              className="rounded-[1vh] p-[1vh] bg-transparent border-b-2 border-white focus:outline-none"
              {...register("confirmarContrasena", {
                required: {
                  value: true,
                  message: "Confirma tu contraseña",
                },
                minLength: 3,
                validate: (value) => {
                  if (value === watch("contrasena")) {
                    return true;
                  } else {
                    return "La contraseña no coincide";
                  }
                },
              })}
            />
            {errors.confirmarContrasena && (
              <span>{errors.confirmarContrasena.message}</span>
            )}
          </div>

          <button className="m-[1vh] p-1 bg-[#F5F5DC] w-[80%] rounded-sm text-[#576A5B] border-solid border-2 
          border-transparent hover:bg-transparent hover:text-white hover:border-white text-xl">
            Registrar
          </button>
        </div>
      </form>
    </div>
  );
}
