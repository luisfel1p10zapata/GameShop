import { useState, useEffect } from "react";
import { Card, CardContent, Typography } from "@mui/material";

export const UseCustomHook = () => {

  const [online, setOnline] = useState(navigator.onLine);

  useEffect(() => {

    const goOnline = () => setOnline(true);
    const goOffline = () => setOnline(false);

    window.addEventListener("online", goOnline);
    window.addEventListener("offline", goOffline);

    return () => {
      window.removeEventListener("online", goOnline);
      window.removeEventListener("offline", goOffline);
    };

  }, []);

  return (
    <Card
      sx={{
        borderRadius: 3,
        boxShadow: 3
      }}
    >
      <CardContent>

        <Typography variant="h5" gutterBottom>
          useCustomHook
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 2 }}
        >
          Este hook detecta si el usuario tiene conexión a internet o no.
          Utiliza <b>useEffect</b> para escuchar los eventos <b>online</b> y <b>offline </b>
          del navegador y actualizar el estado automáticamente.
        </Typography>

        <Typography variant="body1">
          Estado de conexión
        </Typography>

        <Typography variant="h4">
          {online ? "🟢 Online" : "🔴 Offline"}
        </Typography>

      </CardContent>
    </Card>
  );
};