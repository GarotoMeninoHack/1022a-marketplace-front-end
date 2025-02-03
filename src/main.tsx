import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import CadastroProduto from './componentes/cadastroproduto/CadastroProduto.tsx'
import CadastroUsuario from './componentes/cadastrarusuario/CadastrarUsuario.tsx'
import AlterarProduto from './componentes/alterarproduto/AlterarProduto.tsx'
import AlterarUsuario from './componentes/alterarusuario/AlterarUsuario.tsx'
import Header from './componentes/header/Header.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <><Header/><App /></>,
  },
  {
    path: "/cadastro-produto",
    element: <><Header/><CadastroProduto/></>,
  },
  {
    path: "/alterar-produto/:id",
    element: <><Header/><AlterarProduto/></>,
  },
  {
    path: "/cadastro-usuario",
    element: <><Header/><CadastroUsuario/></>,
  },
  {
    path: "/alterar-usuario/:id",
    element: <><Header/><AlterarUsuario/></>,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)