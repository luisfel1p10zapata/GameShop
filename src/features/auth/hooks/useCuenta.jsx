import { useState } from "react";

export const useCuenta = () => {

  const [editando, setEditando] = useState(false);
  const [foto, setFoto] = useState("https://i.pinimg.com/736x/03/82/ce/0382ce1999aefe28ed15280b6379ef26.jpg");

  const cambiarFoto = () => {
    const nuevaFoto = prompt("Ingresa la URL de la nueva foto");
    if (nuevaFoto) {
      setFoto(nuevaFoto);
    }
  };

  const editarPerfil = () => {
    setEditando(!editando);
  };

  return {
    editando,
    foto,
    cambiarFoto,
    editarPerfil
  };
};
