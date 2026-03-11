import React from "react";
import { Box, Card, CardContent, CardMedia, Typography, Stack } from "@mui/material";

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SentimentDissatisfiedOutlinedIcon from "@mui/icons-material/SentimentDissatisfiedOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import IconButton from "@mui/material/IconButton";

export const Favorite = ({ favorites = [], removeFavorite = () => {} }) => {

  if (favorites.length === 0) {
    return (
      <Box
        sx={{ minHeight:"80vh", display:"flex", justifyContent:"center", alignItems:"center", textAlign:"center" }}
        role="status"
        aria-live="polite"
      >

        <Stack spacing={2} alignItems="center">

          <FavoriteBorderOutlinedIcon sx={{ fontSize:80, color:"#999" }} aria-hidden="true"/>

          <Typography variant="h5" component="h1" fontWeight="bold">
            No tienes productos en favoritos
          </Typography>

          <Stack direction="row" spacing={1} alignItems="center">
            <SentimentDissatisfiedOutlinedIcon color="disabled" aria-hidden="true"/>
            <Typography color="text.primary">
              Agrega productos presionando el corazón ❤️
            </Typography>
          </Stack>

        </Stack>

      </Box>
    );
  }

  return (

    <Box
      sx={{ py:10, px:6, backgroundColor:"#f5f5f5", minHeight:"100vh", mt:6 }}
      component="section"
      aria-labelledby="titulo-favoritos"
    >

      <Typography
        id="titulo-favoritos"
        variant="h4"
        component="h1"
        fontWeight="bold"
        textAlign="center"
        mb={6}
        sx={{ display:"flex", alignItems:"center", justifyContent:"center", gap:1 }}
      >
        <FavoriteBorderOutlinedIcon fontSize="large" aria-hidden="true"/>
        Productos Favoritos
      </Typography>

      <Box
        sx={{ display:"flex", flexWrap:"wrap", justifyContent:"center", gap:6 }}
        role="list"
        aria-label="Lista de productos favoritos"
      >

        {favorites.map((product) => (

          <Box key={product.id} role="listitem" sx={{ width:{ xs:"100%", sm:"45%", md:"30%" } }}>

            <Card component="article" sx={{ width:"100%", borderRadius:4, boxShadow:4 }}>

              <CardMedia
                component="img"
                height="160"
                image={product.image}
                alt={`Imagen del producto ${product.name}`}
                loading="lazy"
              />

              <CardContent>

                <Typography variant="h6" component="h2" fontWeight="bold">
                  {product.name}
                </Typography>

                <Typography variant="body2" color="text.primary">
                  Categoría: {product.category}
                </Typography>

                <Typography
                  variant="h6"
                  component="p"
                  sx={{ mt:1 }}
                  aria-label={`Precio ${product.price.toLocaleString("es-CO")} pesos`}
                >
                  ${product.price.toLocaleString("es-CO")}
                </Typography>

                <IconButton
                  color="error"
                  onClick={() => removeFavorite(product.id)}
                  aria-label={`Eliminar ${product.name} de favoritos`}
                >
                  <DeleteOutlineIcon aria-hidden="true"/>
                </IconButton>

              </CardContent>

            </Card>

          </Box>

        ))}

      </Box>

    </Box>

  );
};