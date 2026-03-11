import { useRef } from "react";
import { Card, CardContent, Typography, TextField, Button, Stack } from "@mui/material";

export const UseRefHook = () => {

  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <Card
      sx={{
        borderRadius: 3,
        boxShadow: 3
      }}
    >
      <CardContent>

        <Typography variant="h5" gutterBottom>
          useRef
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 2 }}
        >
          useRef permite acceder directamente a elementos del DOM o guardar
          valores persistentes entre renderizados sin provocar que el componente
          se vuelva a renderizar.
        </Typography>

        <Stack direction="row" spacing={2}>
          <TextField
            inputRef={inputRef}
            label="Hazme focus"
          />

          <Button
            variant="contained"
            onClick={focusInput}
          >
            Enfocar
          </Button>
        </Stack>

      </CardContent>
    </Card>
  );
};