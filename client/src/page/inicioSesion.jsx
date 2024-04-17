import { useForm } from "react-hook-form";
import { useLoginUserContext } from "../components/providers/userProvider";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export function InicioSesion() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { loginUser } = useLoginUserContext();

  return (
    <div>
      <form
        className="bg-[#576A5B] p-[3vh] rounded-sm w-[100vh] text-white font-serif "
        onSubmit={handleSubmit(loginUser)}
      >
        <Link to="/">
          <FontAwesomeIcon style={{ color: "#fff" }} icon={faArrowLeft} size="xl" />
        </Link>

        <div className="flex flex-col items-center">
          <h1 className="font-serif text-4xl mb-[2vh]">Iniciar Sesión</h1>
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
              })}
            />
            {errors.contrasena && <span>{errors.contrasena.message}</span>}
          </div>

          <div className="flex flex-col w-[80%] mb-[2vh]">
            <label htmlFor="Rol" className="font-serif text-xl">
              Rol
            </label>
            <select
              name="Rol"
              {...register("Rol")}
              className="rounded-[1vh] p-[1vh] bg-transparent border-b-2 border-white focus:outline-none text-lg"
            >
              <option value="rol" disabled className="text-black font-serif">
                Rol
              </option>
              <option value="Cliente" className="text-black font-serif">
                Cliente
              </option>
              <option value="Empresa" className="text-black font-serif">
                Empresa
              </option>
            </select>
          </div>

          <button className="m-[1vh] p-1 bg-[#F5F5DC] w-[80%] rounded-sm text-[#576A5B] border-solid border-2 
          border-transparent hover:bg-transparent hover:text-white hover:border-white text-xl">
            Iniciar Sesión
          </button>
        </div>
      </form>
    </div>
  );
}
