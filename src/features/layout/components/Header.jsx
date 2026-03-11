import * as React from "react";
import { NavLink } from "react-router-dom";

// MUI
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  InputBase,
  alpha,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Badge
} from "@mui/material";

//====== Iconos MUI ======//
import MenuIcon from "@mui/icons-material/Menu";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import IntegrationInstructionsOutlinedIcon from "@mui/icons-material/IntegrationInstructionsOutlined";

export const Header = ({ favorites = [], compras = [] }) => {

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (state) => () => setOpen(state);

  const menuItems = [
    { text: "Inicio", icon: <HomeOutlinedIcon aria-hidden="true" />, path: "/" },
    { text: "Artículos", icon: <StorefrontOutlinedIcon aria-hidden="true" />, path: "/Article" },
    { text: "Ofertas", icon: <SellOutlinedIcon aria-hidden="true" />, path: "/Offer" },
    {
      text: "Favoritos",
      icon: (
        <Badge badgeContent={favorites.length} color="error">
          <FavoriteBorderOutlinedIcon aria-hidden="true" />
        </Badge>
      ),
      path: "/Favorite"
    },
    { text: "Mi Cuenta", icon: <PersonOutlineOutlinedIcon aria-hidden="true" />, path: "/MyCuenta" },
    {
      text: "Mi Carrito",
      icon: (
        <Badge badgeContent={compras.length} color="error">
          <ShoppingCartOutlinedIcon aria-hidden="true" />
        </Badge>
      ),
      path: "/MyCarrito"
    },
    { text: "Hooks", icon: <IntegrationInstructionsOutlinedIcon aria-hidden="true" />, path: "/Hooks" }
  ];

  return (
    <>
      <AppBar
        position="fixed"
        color="info"
        component="header"
        aria-label="Barra de navegación principal"
      >
        <Toolbar>

          {/* ===== BOTON MENU MOVIL ===== */}
          <IconButton
            color="inherit"
            edge="start"
            onClick={toggleDrawer(true)}
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
            aria-label="Abrir menú de navegación"
            aria-controls="menu-movil"
            aria-expanded={open ? "true" : "false"}
          >
            <MenuIcon aria-hidden="true" />
          </IconButton>

          {/* ===== BUSCADOR ===== */}
          <Box
            component="form"
            role="search"
            aria-label="Buscar productos"
            sx={{
              position: "relative",
              borderRadius: "30px",
              backgroundColor: alpha("#fff", 0.15),
              "&:hover": { backgroundColor: alpha("#fff", 0.25) },
              display: "flex",
              alignItems: "center",
              padding: "5px 15px",
              width: { xs: "100%", sm: 250, md: 300 },
              maxWidth: 400
            }}
          >
            <SearchOutlinedIcon sx={{ mr: 1, color: "#fff" }} aria-hidden="true" />

            <InputBase
              type="search"
              placeholder="Buscar productos"
              sx={{
                color: "white",
                width: "100%",
                "& input::placeholder": { color: "#eee", opacity: 1 }
              }}
              inputProps={{
                "aria-label": "Buscar productos en la tienda"
              }}
            />
          </Box>

          {/* ===== NAV LINKS DESKTOP ===== */}
          <Box
            component="nav"
            aria-label="Navegación principal"
            sx={{ display: { xs: "none", md: "flex" }, gap: 1, ml: "auto" }}
          >
            {menuItems.map((item) => (
              <Button
                key={item.text}
                color="inherit"
                component={NavLink}
                to={item.path}
                startIcon={item.icon}
                aria-label={`Ir a ${item.text}`}
                sx={{
                  "&.active": {
                    backgroundColor: "rgba(255,255,255,0.2)"
                  }
                }}
              >
                {item.text}
              </Button>
            ))}
          </Box>

        </Toolbar>
      </AppBar>

      {/* ===== DRAWER MOVIL ===== */}
      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
        id="menu-movil"
        aria-label="Menú de navegación móvil"
      >
        <Box sx={{ width: 250 }} role="presentation">

          <List aria-label="Opciones de navegación">

            {menuItems.map((item) => (
              <ListItem key={item.text} disablePadding>

                <ListItemButton
                  component={NavLink}
                  to={item.path}
                  onClick={toggleDrawer(false)}
                  aria-label={`Ir a ${item.text}`}
                >

                  <ListItemIcon>
                    {item.icon}
                  </ListItemIcon>

                  <ListItemText primary={item.text} />

                </ListItemButton>

              </ListItem>
            ))}

          </List>

        </Box>
      </Drawer>
    </>
  );
};