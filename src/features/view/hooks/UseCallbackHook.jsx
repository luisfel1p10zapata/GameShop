import { useCallback } from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";

export const UseCallbackHook = () => {

  const showAlert = useCallback(() => {
    alert("Soy una función memorizada 🚀");
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
          useCallback
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 2 }}
        >
          <b>useCallback</b> memoriza una función para evitar que se vuelva a
          crear en cada render del componente. Esto mejora el rendimiento
          cuando la función se pasa como prop a otros componentes.
        </Typography>

        <Button
          variant="contained"
          onClick={showAlert}
        >
          Mostrar alerta
        </Button>

      </CardContent>
    </Card>
  );
};