import React from "react";

// MUI
import { Box, Container, Typography, IconButton } from "@mui/material";

// Iconos
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

export const Footer = () => {
  return (
    <Box
      component="footer"
      aria-label="Pie de página del sitio"
      sx={{ backgroundColor: "#111", color: "#fff", mt: 0, pt: 4, pb: 2 }}
    >

      <Container maxWidth="lg">

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 4
          }}
        >

          {/* ===== LOGO / DESCRIPCIÓN ===== */}
          <Box component="section" sx={{ width: { xs: "100%", md: "50%" } }}>

            <Typography variant="h6" component="h2" fontWeight="bold" gutterBottom>
              GameStore
            </Typography>

            <Typography variant="body2" sx={{ color: "#e0e0e0" }}>
              Tu tienda favorita de videojuegos, consolas y accesorios.
              Encuentra los mejores precios y las últimas novedades del mundo gamer.
            </Typography>

          </Box>

          {/* ===== REDES SOCIALES ===== */}
          <Box component="section" aria-label="Redes sociales" sx={{ width: { xs: "100%", md: "40%" } }}>

            <Typography variant="h6" component="h2" fontWeight="bold" gutterBottom>
              Síguenos
            </Typography>

            <IconButton aria-label="Visitar Facebook" sx={{ color: "#fff" }}>
              <FacebookOutlinedIcon aria-hidden="true" />
            </IconButton>

            <IconButton aria-label="Visitar Instagram" sx={{ color: "#fff" }}>
              <InstagramIcon aria-hidden="true" />
            </IconButton>

            <IconButton aria-label="Visitar Twitter" sx={{ color: "#fff" }}>
              <TwitterIcon aria-hidden="true" />
            </IconButton>

            <IconButton aria-label="Visitar YouTube" sx={{ color: "#fff" }}>
              <YouTubeIcon aria-hidden="true" />
            </IconButton>

          </Box>

        </Box>

        {/* ===== COPYRIGHT ===== */}
        <Box
          sx={{
            textAlign: "center",
            mt: 4,
            borderTop: "1px solid #333",
            pt: 2
          }}
        >

          <Typography variant="body2" sx={{ color: "#e0e0e0" }}>
            © {new Date().getFullYear()} GameStore. Todos los derechos reservados.
          </Typography>

        </Box>

      </Container>

    </Box>
  );
};