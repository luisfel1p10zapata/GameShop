import { useState, useMemo } from "react";
import { Card, CardContent, Typography, Button, Stack } from "@mui/material";

export const UseMemoHook = () => {

  const [count, setCount] = useState(0);

  const result = useMemo(() => {
    console.log("Calculando...");
    return count * 10;
  }, [count]);

  const resetCount = () => {
    setCount(0);
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
          useMemo
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 2 }}
        >
          useMemo permite memorizar el resultado de un cálculo para mejorar el
          rendimiento de la aplicación. Solo vuelve a ejecutar el cálculo cuando
          cambian las dependencias especificadas.
        </Typography>

        <Typography>
          Contador: <strong>{count}</strong>
        </Typography>

        <Typography sx={{ mb: 2 }}>
          Resultado memorizado: <strong>{result}</strong>
        </Typography>

        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            onClick={() => setCount(count + 1)}
          >
            +1
          </Button>

          <Button
            variant="outlined"
            color="error"
            onClick={resetCount}
          >
            Reset
          </Button>
        </Stack>

      </CardContent>
    </Card>
  );
};