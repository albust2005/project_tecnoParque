import { ButtonNav } from "../buttons/bNav";
import { useLoginUserContext, useUserContext } from "../providers/userProvider";
import { Link, useLocation } from "react-router-dom";

export function Header() {
  const location = useLocation();
  const { sesionUser } = useUserContext();
  const { logout } = useLoginUserContext();

  if (location?.pathname === "/login") {
    return null;
  }

  if (location?.pathname === "/registroEmpresa") {
    return null;
  }

  // let route = "/"
  // if (sesionUser?.Rol === "Empresa") {
  //     route = "/empresa"
  // }

  return (
    <nav className="flex justify-between p-[2vh] border-solid border-2 items-center font-serif">
      <Link to="/">
        <h1 className="font-serif text-xl">Empresa ABC</h1>
      </Link>
      {!sesionUser && (
        <>
          <ButtonNav href="/libros" text="Libros"></ButtonNav>
          <ButtonNav href="/login" text="Iniciar Sesión"></ButtonNav>
        </>
      )}
      {sesionUser?.Rol === "Cliente" && (
        <>
          <div className="">
            <ButtonNav text="Perfil" href="/usuarios/perfil"></ButtonNav>
            <ButtonNav text="Libros" href="/usuarios/libros"></ButtonNav>
            <ButtonNav text="Mis libros" href="/usuarios/misLibros"></ButtonNav>
          </div>
          <button onClick={logout}><ButtonNav href="/login" text="Cerrar Sesión"></ButtonNav></button>
        </>
      )}
      {sesionUser?.Rol === "Empresa" && (
        <>
          <div className="flex flex-col md:flex-row">
            <ButtonNav text="Perfil" href="/empresa/perfil" />
            <ButtonNav text="Libros" href="/empresa/libros" />
            <ButtonNav text="Publicar" href="empresa/publicar" />
            <ButtonNav text="Estadistica" href="empresa/estadistica" />
          </div>
          <button onClick={logout}><ButtonNav href="/login" text="Cerrar Sesión"></ButtonNav></button>
        </>
      )}
    </nav>
  );
}
