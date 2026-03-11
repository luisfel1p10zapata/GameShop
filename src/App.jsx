import { HashRouter, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import { useStore } from "./features/auth/hooks/useStore";

// Componentes de layout
import { Header } from "./features/layout/components/Header";
import { Content } from "./features/layout/components/Content";
import { Footer } from "./features/layout/components/Footer";

// Componentes de vista
import { Offer } from "./features/view/components/Offer";
import { Article } from "./features/view/components/Article";

// Componentes de autentificación
import { Favorite } from "./features/auth/components/Favorite";
import { MyCuenta } from "./features/auth/components/MyCuenta";
import { MyCarrito } from "./features/auth/components/MyCarrito";
import { Hooks } from "./features/view/components/Hooks";
import { Registro } from "./features/auth/components/Registro";
import { Inicio } from "./features/auth/components/Inicio";

function App() {

  const { favorites, compras, addToFavorites, addToCompras, removeFavorite, removeCompra } = useStore();

  return (
    <HashRouter>

      <Header favorites={favorites} compras={compras} />

      <Box component="main" role="main" aria-label="Contenido principal de la aplicación" sx={{ minHeight: "80vh" }}>

        <Routes>

          <Route path="/" element={<Content />} />
          <Route path="/Offer" element={<Offer />} />
          <Route path="/Favorite" element={<Favorite favorites={favorites} removeFavorite={removeFavorite} />} />
          <Route path="/MyCuenta" element={<MyCuenta />} />
          <Route path="/Article" element={<Article favorites={favorites} compras={compras} addToFavorites={addToFavorites} addToCompras={addToCompras} />} />
          <Route path="/MyCarrito" element={<MyCarrito compras={compras} removeCompra={removeCompra} />} />
          <Route path="/Hooks" element={<Hooks />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/inicio" element={<Inicio />} />

        </Routes>

      </Box>

      <Footer />

    </HashRouter>
  );
}

export default App;