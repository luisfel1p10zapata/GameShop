import React from "react";
import { Box, Container, Typography, Avatar, Card, CardContent, Button, Divider, Stack } from "@mui/material";

import { useCuenta } from "../hooks/useCuenta";
import EditIcon from "@mui/icons-material/Edit";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

export const MyCuenta = () => {

  const { editando, foto, cambiarFoto, editarPerfil } = useCuenta();

  return (
    <Container component="main" role="main" aria-labelledby="titulo-cuenta" maxWidth="md" sx={{ mt: 8, mb: 6 }}>

      <Card sx={{ borderRadius: 5, boxShadow: "0 10px 30px rgba(0,0,0,0.08)" }}>

        <CardContent sx={{ p: 5 }}>

          <Box display="flex" flexWrap="wrap" alignItems="center" gap={5}>

            <Box sx={{ width: { xs: "100%", md: "30%" }, textAlign: "center" }}>

              <Avatar
                src={foto}
                alt="Foto de perfil del usuario"
                aria-label="Foto de perfil del usuario"
                sx={{ width: 160, height: 160, margin: "0 auto", border: "5px solid", borderColor: "primary.main" }}
              />

              <Typography variant="h6" component="h2" fontWeight="bold" mt={2}>
                Luis Felipe Zapata Sulbaran
              </Typography>

              <Typography variant="body2" color="text.primary">
                Usuario Premium
              </Typography>

              <Button
                variant="outlined"
                startIcon={<EditIcon aria-hidden="true" />}
                sx={{ mt: 3, borderRadius: 6, px: 3 }}
                onClick={cambiarFoto}
                aria-label="Cambiar foto de perfil"
              >
                Cambiar Foto
              </Button>

            </Box>

            <Box
              component="section"
              role="region"
              aria-labelledby="titulo-informacion"
              sx={{ width: { xs: "100%", md: "60%" } }}
            >

              <Typography id="titulo-informacion" variant="h4" component="h1" fontWeight="bold" gutterBottom>
                Información Personal
              </Typography>

              <Divider sx={{ mb: 3 }} />

              <Stack spacing={3}>

                <Box display="flex" alignItems="center" gap={2}>
                  <PersonOutlinedIcon color="primary" aria-hidden="true" />
                  <Box>
                    <Typography variant="caption" color="text.primary">
                      Nombre Completo
                    </Typography>
                    <Typography variant="body1" fontWeight={500}>
                      Luis Felipe Zapata Sulbaran
                    </Typography>
                  </Box>
                </Box>

                <Box display="flex" alignItems="center" gap={2}>
                  <EmailOutlinedIcon color="primary" aria-hidden="true" />
                  <Box>
                    <Typography variant="caption" color="text.primary">
                      Correo Electrónico
                    </Typography>
                    <Typography variant="body1" fontWeight={500}>
                      Luisfel1p.10zapata@gmail.com
                    </Typography>
                  </Box>
                </Box>

                <Box display="flex" alignItems="center" gap={2}>
                  <PhoneOutlinedIcon color="primary" aria-hidden="true" />
                  <Box>
                    <Typography variant="caption" color="text.primary">
                      Teléfono
                    </Typography>
                    <Typography variant="body1" fontWeight={500}>
                      +57 301 1914874
                    </Typography>
                  </Box>
                </Box>

                <Box display="flex" alignItems="center" gap={2}>
                  <LocationOnOutlinedIcon color="primary" aria-hidden="true" />
                  <Box>
                    <Typography variant="caption" color="text.primary">
                      Dirección
                    </Typography>
                    <Typography variant="body1" fontWeight={500}>
                      Medellín, Colombia
                    </Typography>
                  </Box>
                </Box>

                <Box display="flex" alignItems="center" gap={2}>
                  <CalendarMonthOutlinedIcon color="primary" aria-hidden="true" />
                  <Box>
                    <Typography variant="caption" color="text.primary">
                      Miembro desde
                    </Typography>
                    <Typography variant="body1" fontWeight={500}>
                      Enero 2024
                    </Typography>
                  </Box>
                </Box>

              </Stack>

              <Button
                variant="contained"
                startIcon={<EditIcon aria-hidden="true" />}
                onClick={editarPerfil}
                sx={{ mt: 4, borderRadius: 6, px: 4, py: 1.2, textTransform: "none", fontWeight: "bold" }}
                aria-label={editando ? "Guardar cambios del perfil" : "Editar perfil"}
              >
                {editando ? "Guardar Cambios" : "Editar Perfil"}
              </Button>

            </Box>

          </Box>

        </CardContent>

      </Card>

    </Container>
  );
};