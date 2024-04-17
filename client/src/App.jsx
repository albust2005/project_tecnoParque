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
import { UsuarioProvider } from "./components/providers/usuariosProvider";

import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <>
      <UsuarioProvider>
        <UserProvider>
          <LibroProvider>
            <TemaProvider>
              <Header></Header>
              <RouterPage></RouterPage>
            </TemaProvider>
          </LibroProvider>
          <ToastContainer position="top-center" />
        </UserProvider>
      </UsuarioProvider>

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

      <Route path="/usuarios/*" element={<IndexU />}></Route>

      <Route path="/empresa/*" element={<IndexE />}></Route>
    </Routes>
  )
}

export default App;
