import { useState, useEffect } from "react";
import { Card, CardContent, Typography } from "@mui/material";

export const UseEffectHook = () => {

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
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
          useEffect
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 2 }}
        >
          useEffect permite ejecutar efectos secundarios en los componentes
          de React, como temporizadores, llamadas a APIs o manipulación del DOM.
          En este ejemplo se usa para actualizar un reloj cada segundo.
        </Typography>

        <Typography variant="h4">
          {time.toLocaleTimeString()}
        </Typography>

      </CardContent>
    </Card>
  );
};