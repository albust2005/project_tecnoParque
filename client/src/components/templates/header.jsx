import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ButtonNav } from "../buttons/bNav";
import { useLoginUserContext, useUserContext } from "../providers/userProvider";
import { Link, useLocation } from "react-router-dom";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useCarritoUserContext } from "../providers/carritoProvider";
import { Carrito } from "../../page/usuarios/carrito";

export function Header() {
  const location = useLocation();
  const { sesionUser } = useUserContext();
  const { logout } = useLoginUserContext();
  const { showCart, cart } = useCarritoUserContext()

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
    <nav className="flex justify-between h-24 border-solid items-center font-serif">
      <Link to="/">
        <h1 className="font-serif text-xl">Empresa ABC</h1>
      </Link>
      {!sesionUser && (
        <>
          <div>
            <ButtonNav href="/libros" text="Libros"></ButtonNav>
            <ButtonNav href="/login" text="Iniciar Sesión"></ButtonNav>
          </div>
        </>
      )}
      {sesionUser?.Rol === "Cliente" && (
        <>
          <div className="flex gap-4 items-center">
            <ButtonNav text="Perfil" href="/usuarios/perfil"></ButtonNav>
            <ButtonNav text="Libros" href="/usuarios/libros"></ButtonNav>
            <ButtonNav text="Mis libros" href="/usuarios/misLibros"></ButtonNav>
            <button
              onClick={showCart}
            >
              <FontAwesomeIcon
                className="hover:scale-125 transition-all"
                icon={faCartShopping}
              />
            </button>
          </div>
          <div className="flex gap-4">

            <button onClick={logout}><ButtonNav href="/login" text="Cerrar Sesión"></ButtonNav></button>
          </div>
        </>
      )}
      {sesionUser?.Rol === "Empresa" && (
        <>
          <div className="flex flex-col md:flex-row">
            <ButtonNav text="Perfil" href="/empresa/perfil" />
            <ButtonNav text="Libros" href="/empresa/libros" />
            <ButtonNav text="Publicar" href="empresa/publicar" />
            <ButtonNav text="Estadistica" href="empresa/estadisticas" />
          </div>
          <button onClick={logout}><ButtonNav href="/login" text="Cerrar Sesión"></ButtonNav></button>
        </>
      )}

      {
        cart &&
        <Carrito></Carrito>
      }

    </nav>
  );
}
