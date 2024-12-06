import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import ContatoPage from "./pages/ProdutoCadastrarPage";
import SobrePage from "./pages/SobrePage";
import Header from "./components/header/Header";
import ProdutoCadastrar from "./pages/ProdutoCadastrarPage";
import ProdutoPage from "./pages/ProdutoPage";
import ProdutoDetalhePage from "./pages/ProdutoDetalhePage";
import ProdutoEditarPage from "./pages/ProductEditarPage";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/produto/cadastrar" element={<ProdutoCadastrar />} />
        <Route path="/sobre" element={<SobrePage />} />
        <Route path="/produtos" element={<ProdutoPage />} />
        <Route path="/produtos/:id" element={<ProdutoDetalhePage />} />
        <Route path="/editar/:id" element={<ProdutoEditarPage />} />

        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
