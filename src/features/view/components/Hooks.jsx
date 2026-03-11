import { Container, Stack, Typography } from "@mui/material";
import { createContext } from "react";

import { UseStateHook } from "../hooks/UseStateHook";
import { UseEffectHook } from "../hooks/UseEffectHook";
import { UseContextHook } from "../hooks/UseContextHook";
import { UseRefHook } from "../hooks/UseRefHook";
import { UseReducerHook } from "../hooks/UseReducerHook";
import { UseCallbackHook } from "../hooks/UseCallbackHook";
import { UseMemoHook } from "../hooks/UseMemoHook";
import { UseCustomHook } from "../hooks/UseCustomHook";

export const UserContext = createContext();

export const Hooks = () => {
  return (
    <UserContext.Provider value={{ username: "Luis Zapata" }}>

      <Container
        component="main"
        id="main-content"
        maxWidth="md"
        sx={{ mt: 10 }}
      >

        <Typography
          variant="h4"
          component="h1"
          textAlign="center"
          gutterBottom
        >
          React Hooks
        </Typography>

        <Stack spacing={3} alignItems="center">

          <UseStateHook />
          <UseEffectHook />
          <UseContextHook />
          <UseRefHook />
          <UseReducerHook />
          <UseCallbackHook />
          <UseMemoHook />
          <UseCustomHook />

        </Stack>

      </Container>

    </UserContext.Provider>
  );
};