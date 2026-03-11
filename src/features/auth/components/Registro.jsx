import React, { useState } from "react";
import { Box, TextField, Button, Typography, Paper, IconButton, InputAdornment, Link } from "@mui/material";

import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LockIcon from "@mui/icons-material/Lock";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { Link as RouterLink } from "react-router-dom";

export const Registro = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [form, setForm] = useState({ nombre:"", email:"", telefono:"", direccion:"", password:"", confirmPassword:"" });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {

    let temp = {};

    if (!form.nombre) temp.nombre = "El nombre es obligatorio";

    if (!form.email) temp.email = "El correo es obligatorio";
    else if (!/\S+@\S+\.\S+/.test(form.email)) temp.email = "Correo inválido";

    if (!form.telefono) temp.telefono = "El teléfono es obligatorio";

    if (!form.direccion) temp.direccion = "La dirección es obligatoria";

    if (!form.password) temp.password = "La contraseña es obligatoria";
    else if (form.password.length < 6) temp.password = "Mínimo 6 caracteres";

    if (form.confirmPassword !== form.password) temp.confirmPassword = "Las contraseñas no coinciden";

    setErrors(temp);

    return Object.keys(temp).length === 0;
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (validate()) {
      console.log("Usuario registrado:", form);
    }

  };

  return (

    <Box component="main" role="main" aria-label="Formulario de registro de usuario" sx={{ minHeight:"100vh", display:"flex", justifyContent:"center", alignItems:"flex-start", mt:8, px:2, backgroundColor:"#f4f6f8" }}>

      <Paper elevation={6} sx={{ p:5, maxWidth:450, width:"100%", borderRadius:4 }}>

        <Typography variant="h5" component="h1" fontWeight="bold" textAlign="center" mb={3}>
          Bienvenido ha crear tu cuenta
        </Typography>

        <Box component="form" onSubmit={handleSubmit} aria-label="Formulario para crear cuenta" sx={{ display:"flex", flexDirection:"column", gap:2 }}>

          <TextField fullWidth label="Nombre completo" name="nombre" autoComplete="name" value={form.nombre} onChange={handleChange} error={Boolean(errors.nombre)} helperText={errors.nombre} FormHelperTextProps={{ "aria-live":"polite" }} InputProps={{ startAdornment:(<InputAdornment position="start"><PersonIcon aria-hidden="true"/></InputAdornment>) }} />

          <TextField fullWidth label="Correo electrónico" name="email" type="email" autoComplete="email" value={form.email} onChange={handleChange} error={Boolean(errors.email)} helperText={errors.email} FormHelperTextProps={{ "aria-live":"polite" }} InputProps={{ startAdornment:(<InputAdornment position="start"><EmailIcon aria-hidden="true"/></InputAdornment>) }} />

          <TextField fullWidth label="Teléfono" name="telefono" type="tel" autoComplete="tel" value={form.telefono} onChange={handleChange} error={Boolean(errors.telefono)} helperText={errors.telefono} FormHelperTextProps={{ "aria-live":"polite" }} InputProps={{ startAdornment:(<InputAdornment position="start"><PhoneIcon aria-hidden="true"/></InputAdornment>) }} />

          <TextField fullWidth label="Dirección" name="direccion" autoComplete="street-address" value={form.direccion} onChange={handleChange} error={Boolean(errors.direccion)} helperText={errors.direccion} FormHelperTextProps={{ "aria-live":"polite" }} InputProps={{ startAdornment:(<InputAdornment position="start"><LocationOnIcon aria-hidden="true"/></InputAdornment>) }} />

          <TextField fullWidth label="Contraseña" name="password" type={showPassword ? "text" : "password"} autoComplete="new-password" value={form.password} onChange={handleChange} error={Boolean(errors.password)} helperText={errors.password} FormHelperTextProps={{ "aria-live":"polite" }} InputProps={{ startAdornment:(<InputAdornment position="start"><LockIcon aria-hidden="true"/></InputAdornment>), endAdornment:(<InputAdornment position="end"><IconButton aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"} onClick={() => setShowPassword(!showPassword)}>{showPassword ? <VisibilityOff aria-hidden="true"/> : <Visibility aria-hidden="true"/>}</IconButton></InputAdornment>) }} />

          <TextField fullWidth label="Confirmar contraseña" name="confirmPassword" type={showConfirm ? "text" : "password"} autoComplete="new-password" value={form.confirmPassword} onChange={handleChange} error={Boolean(errors.confirmPassword)} helperText={errors.confirmPassword} FormHelperTextProps={{ "aria-live":"polite" }} InputProps={{ startAdornment:(<InputAdornment position="start"><LockIcon aria-hidden="true"/></InputAdornment>), endAdornment:(<InputAdornment position="end"><IconButton aria-label={showConfirm ? "Ocultar confirmación de contraseña" : "Mostrar confirmación de contraseña"} onClick={() => setShowConfirm(!showConfirm)}>{showConfirm ? <VisibilityOff aria-hidden="true"/> : <Visibility aria-hidden="true"/>}</IconButton></InputAdornment>) }} />

          <Button type="submit" fullWidth variant="contained" sx={{ mt:2, borderRadius:3, py:1.3 }}>
            Crear Cuenta
          </Button>

          <Typography textAlign="center" mt={2}>
            ¿Ya tienes cuenta?{" "}
            <Link component={RouterLink} to="/inicio">
              Inicia sesión
            </Link>
          </Typography>

        </Box>

      </Paper>

    </Box>
  );
};