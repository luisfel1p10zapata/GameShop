import { useContext } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { UserContext } from "../components/Hooks";

export const UseContextHook = () => {

  const user = useContext(UserContext);

  return (
    <Card
      sx={{
        borderRadius: 3,
        boxShadow: 3
      }}
    >
      <CardContent>

        <Typography variant="h5" gutterBottom>
          useContext
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 2 }}
        >
          El hook <b>useContext</b> permite acceder a datos globales dentro de
          la aplicación sin necesidad de pasar props manualmente entre
          componentes. Es útil para compartir información como el usuario,
          tema de la aplicación o configuraciones.
        </Typography>

        <Typography variant="body1">
          Usuario actual
        </Typography>

        <Typography variant="h4">
          {user?.username}
        </Typography>

      </CardContent>
    </Card>
  );
};