import { useReducer } from "react";
import { Card, CardContent, Typography, Button, Stack } from "@mui/material";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };

    case "decrement":
      return { count: state.count - 1 };

    default:
      return state;
  }
};

export const UseReducerHook = () => {

  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <Card
      sx={{
        borderRadius: 3,
        boxShadow: 3
      }}
    >
      <CardContent>

        <Typography variant="h5" gutterBottom>
          useReducer
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 2 }}
        >
          useReducer es un hook que permite manejar estados más complejos
          utilizando una función llamada reducer. Esta función recibe el
          estado actual y una acción, y devuelve el nuevo estado.
        </Typography>

        <Stack direction="row" spacing={2} alignItems="center">
          <Typography>
            Contador: <strong>{state.count}</strong>
          </Typography>

          <Button
            variant="contained"
            onClick={() => dispatch({ type: "increment" })}
          >
            +
          </Button>

          <Button
            variant="outlined"
            onClick={() => dispatch({ type: "decrement" })}
          >
            -
          </Button>
        </Stack>

      </CardContent>
    </Card>
  );
};