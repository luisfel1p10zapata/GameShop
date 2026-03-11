import { useState } from "react";
import { Card, CardContent, Typography, TextField, Stack } from "@mui/material";

export const UseStateHook = () => {

  const [name, setName] = useState("");

  return (
    <Card
      sx={{
        borderRadius: 3,
        boxShadow: 3
      }}
    >
      <CardContent>

        <Typography variant="h5" gutterBottom>
          useState
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 2 }}
        >
          useState es un hook que permite crear y manejar estados dentro de
          componentes funcionales en React. Cuando el estado cambia, el
          componente se vuelve a renderizar automáticamente.
        </Typography>

        <Stack spacing={2}>
          <TextField
            label="Escribe tu nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Typography>
            Tu nombre es: <strong>{name || "..."}</strong>
          </Typography>
        </Stack>

      </CardContent>
    </Card>
  );
};