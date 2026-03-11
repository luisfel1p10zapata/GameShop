import { useState } from "react";

export const useStore = () => {

  const [favorites, setFavorites] = useState([]);
  const [compras, setCompras] = useState([]);

  const addToFavorites = (product) => {
    if (favorites.some(f => f.id === product.id)) {
      setFavorites(favorites.filter(f => f.id !== product.id));
    } else {
      setFavorites([...favorites, product]);
    }
  };

  const removeFavorite = (id) => {
    setFavorites(favorites.filter(f => f.id !== id));
  };

  const addToCompras = (product) => {
    if (!compras.some(c => c.id === product.id)) {
      setCompras([...compras, product]);
    }
  };

  const removeCompra = (id) => {
    setCompras(compras.filter(c => c.id !== id));
  };

  return {
    favorites,
    compras,
    addToFavorites,
    addToCompras,
    removeFavorite,
    removeCompra
  };
};