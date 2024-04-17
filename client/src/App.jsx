import "./App.css";
import { Route, Router, Routes } from "react-router-dom";

import { Index } from "./page";
import { Header } from "./components/templates/header";
import { Login } from "./page/login";
import { Libros } from "./page/Libros";
import { IndexU } from "./page/usuarios/index";

import { UserProvider, useUserContext } from "./components/providers/userProvider";
import { TemaProvider } from "./components/providers/temaProvider";
import { IndexE } from "./page/empresa/indexE";
import { LibroProvider } from "./components/providers/librosProvider";

import { ProtectedRoute } from "./components/providers/protedtecRoute";
import { NotFount } from "./components/templates/NotFount";

import { UsuarioProvider } from "./components/providers/usuariosProvider";
import { EmpresaProvider } from "./components/providers/empresaProvider";


function App() {
  return (
    <>
      <EmpresaProvider>
        <UsuarioProvider>
          <UserProvider>
            <LibroProvider>
              <TemaProvider>
                <Header></Header>
                <RouterPage></RouterPage>
              </TemaProvider>
            </LibroProvider>
          </UserProvider>
        </UsuarioProvider>
      </EmpresaProvider>
    </>
  );
}

function RouterPage() {
  const { sesionUser } = useUserContext()

  return (
    <Routes>
      <Route path="/" element={<Index />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/libros" element={<Libros />}></Route>

      <Route element={
        <ProtectedRoute
          isAuth={!!sesionUser && sesionUser.Rol === "Cliente"}
        />
      }>
        <Route path="/usuarios/*" element={<IndexU />}></Route>
      </Route>


      <Route element={
        <ProtectedRoute
          isAuth={!!sesionUser && sesionUser.Rol === "Empresa"}
        />
      }>
        <Route path="/empresa/*" element={<IndexE />}></Route>
      </Route>

      <Route path="*" element={<NotFount></NotFount>}></Route>
    </Routes>
  )
}

export default App;
