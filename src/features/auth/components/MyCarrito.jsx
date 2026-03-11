import React from "react";
import { Box, Container, Card, CardContent, CardMedia, Typography, Chip, Stack } from "@mui/material";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SentimentDissatisfiedOutlinedIcon from "@mui/icons-material/SentimentDissatisfiedOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import IconButton from "@mui/material/IconButton";

export const MyCarrito = ({ compras = [], removeCompra = () => {} }) => {

  if (compras.length === 0) {
    return (
      <Box component="main" role="main" aria-live="polite" sx={{ minHeight:"80vh", display:"flex", justifyContent:"center", alignItems:"center", textAlign:"center" }}>
        
        <Stack spacing={2} alignItems="center">

          <ShoppingCartOutlinedIcon sx={{ fontSize:80, color:"#999" }} aria-hidden="true"/>

          <Typography variant="h5" component="h1" fontWeight="bold">
            No tienes artículos en tu carrito
          </Typography>

          <Stack direction="row" spacing={1} alignItems="center">
            <SentimentDissatisfiedOutlinedIcon color="disabled" aria-hidden="true"/>
            <Typography color="text.primary">
              Cuando agregues productos, los verás aquí
            </Typography>
          </Stack>

        </Stack>

      </Box>
    );
  }

  return (

    <Box component="main" role="main" aria-labelledby="titulo-carrito" sx={{ bgcolor:"#f5f5f5", minHeight:"100vh", py:6, mt:8 }}>

      <Container>

        <Typography
          id="titulo-carrito"
          variant="h4"
          component="h1"
          fontWeight="bold"
          textAlign="center"
          mb={6}
          sx={{ display:"flex", alignItems:"center", justifyContent:"center", gap:1 }}
        >
          <ShoppingCartOutlinedIcon fontSize="large" aria-hidden="true"/>
          Mi Carrito
        </Typography>

        <Box role="list" aria-label="Lista de productos en el carrito" sx={{ display:"flex", flexWrap:"wrap", justifyContent:"center", gap:6 }}>

          {compras.map((producto) => (

            <Box key={producto.id} role="listitem" sx={{ width:{ xs:"100%", sm:"45%", md:"30%" } }}>

              <Card component="article" sx={{ height:"100%", display:"flex", flexDirection:"column", borderRadius:3, transition:"0.3s", "&:hover":{ transform:"translateY(-8px)", boxShadow:8 } }}>

                <CardMedia
                  component="img"
                  image={producto.image}
                  alt={`Imagen del producto ${producto.name}`}
                  loading="lazy"
                  sx={{ height:220, objectFit:"cover" }}
                />

                <CardContent sx={{ flexGrow:1 }}>

                  <Stack direction="row" justifyContent="space-between" alignItems="center" mb={1}>
                    <Chip label={producto.category} color="secondary" size="small"/>
                  </Stack>

                  <Typography variant="h6" component="h2" fontWeight="bold">
                    {producto.name}
                  </Typography>

                  <Typography
                    variant="h6"
                    component="p"
                    color="primary"
                    fontWeight="bold"
                    aria-label={`Precio ${producto.price.toLocaleString("es-CO")} pesos`}
                  >
                    ${producto.price.toLocaleString("es-CO")}
                  </Typography>

                  <IconButton
                    color="error"
                    aria-label={`Eliminar ${producto.name} del carrito`}
                    onClick={() => removeCompra(producto.id)}
                  >
                    <DeleteOutlineIcon aria-hidden="true"/>
                  </IconButton>

                </CardContent>

              </Card>

            </Box>

          ))}

        </Box>

      </Container>

    </Box>
  );
};