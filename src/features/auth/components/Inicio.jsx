import React, { useState } from "react";
import { Box, TextField, Button, Typography, Paper, IconButton, InputAdornment, Link } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Link as RouterLink } from "react-router-dom";

export const Inicio = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const emailValid = /\S+@\S+\.\S+/.test(form.email);
  const passwordValid = form.password.length >= 6;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let temp = {};

    if (!form.email) temp.email = "El correo es obligatorio";
    else if (!emailValid) temp.email = "Correo inválido";

    if (!form.password) temp.password = "La contraseña es obligatoria";
    else if (!passwordValid) temp.password = "Mínimo 6 caracteres";

    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Datos enviados:", form);
    }
  };

  return (

    <Box component="main" role="main" aria-label="Formulario de inicio de sesión" sx={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#f4f6f8" }}>

      <Paper elevation={6} sx={{ p: 5, width: "100%", maxWidth: 400, borderRadius: 4 }}>

        <Typography variant="h5" component="h1" fontWeight="bold" textAlign="center" mb={3}>
          Iniciar Sesión
        </Typography>

        <Box component="form" onSubmit={handleSubmit} aria-label="Formulario para iniciar sesión">

          <TextField
            fullWidth
            label="Correo electrónico"
            name="email"
            type="email"
            autoComplete="email"
            margin="normal"
            value={form.email}
            onChange={handleChange}
            error={Boolean(errors.email)}
            helperText={errors.email}
            FormHelperTextProps={{ "aria-live": "polite" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  {emailValid ? <CheckCircleIcon sx={{ color: "green" }} aria-hidden="true" /> : <EmailIcon aria-hidden="true" />}
                </InputAdornment>
              )
            }}
          />

          <TextField
            fullWidth
            label="Contraseña"
            name="password"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            margin="normal"
            value={form.password}
            onChange={handleChange}
            error={Boolean(errors.password)}
            helperText={errors.password}
            FormHelperTextProps={{ "aria-live": "polite" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  {passwordValid ? <CheckCircleIcon sx={{ color: "green" }} aria-hidden="true" /> : <LockIcon aria-hidden="true" />}
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"} onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <VisibilityOff aria-hidden="true" /> : <Visibility aria-hidden="true" />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />

          <Box sx={{ textAlign: "right", mt: 1 }}>
            <Link component={RouterLink} to="/recuperar" underline="hover">
              ¿Olvidaste tu contraseña?
            </Link>
          </Box>

          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, borderRadius: 3, py: 1.2 }}>
            Ingresar
          </Button>

          <Typography textAlign="center" mt={3}>
            ¿No tienes cuenta?{" "}
            <Link component={RouterLink} to="/registro" underline="hover">
              Regístrate
            </Link>
          </Typography>

        </Box>

      </Paper>

    </Box>
  );
};