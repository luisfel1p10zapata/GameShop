import React from "react";
import { Box, Container, Card, CardContent, CardMedia, Typography, Chip, Stack, Button} from "@mui/material";

import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import MouseIcon from "@mui/icons-material/Mouse";
import MonitorIcon from "@mui/icons-material/Monitor";
import MemoryIcon from "@mui/icons-material/Memory";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const products = [
  {
    id: 1,
    name: "PlayStation 5 Slim",
    oldPrice: 3200000,
    newPrice: 2800000,
    discount: 13,
    icon: <SportsEsportsIcon fontSize="large" color="primary" />,
    image: "https://hiraoka.com.pe/media/mageplaza/blog/post/p/s/ps5-slim-caracteristicas-precio-fecha_de_lanzamiento.jpg"
  },
  {
    id: 2,
    name: "Xbox Series X",
    oldPrice: 3000000,
    newPrice: 2550000,
    discount: 15,
    icon: <VideogameAssetIcon fontSize="large" color="primary" />,
    image: "https://static.independentespanol.com/2020/10/16/11/newFile-2.jpg?width=1200"
  },
  {
    id: 3,
    name: "Headset Gamer RGB",
    oldPrice: 450000,
    newPrice: 320000,
    discount: 29,
    icon: <HeadsetMicIcon fontSize="large" color="primary" />,
    image: "https://www.logitechstore.com.co/cdn/shop/files/D_NQ_NP_2X_654625-MCO92584733547_092025-F.webp?v=1765371773"
  },
  {
    id: 4,
    name: "Teclado Mecánico RGB",
    oldPrice: 380000,
    newPrice: 290000,
    discount: 24,
    icon: <KeyboardIcon fontSize="large" color="primary" />,
    image: "https://cdnx.jumpseller.com/tienda-gamer-medellin/image/15973402/71sFaDtowqL._AC_SL1500_.jpg?1679019012"
  },
  {
    id: 5,
    name: "Mouse Gamer 16000",
    oldPrice: 220000,
    newPrice: 160000,
    discount: 27,
    icon: <MouseIcon fontSize="large" color="primary" />,
    image: "https://www.logitechstore.com.co/cdn/shop/collections/CATEGORIA-BannerSlider_G_Mouse.jpg?v=1753156979"
  },
  {
    id: 6,
    name: "Monitor Gamer 144Hz",
    oldPrice: 1200000,
    newPrice: 980000,
    discount: 18,
    icon: <MonitorIcon fontSize="large" color="primary" />,
    image: "https://tauretcomputadores.com/images/products/Product_20251017092142771127520.FELIPE-2.webp"
  },
  {
    id: 7,
    name: "Tarjeta Gráfica RTX",
    oldPrice: 4500000,
    newPrice: 3900000,
    discount: 14,
    icon: <MemoryIcon fontSize="large" color="primary" />,
    image: "https://i.blogs.es/59bfa7/nvidiageforcertx4090-ap/1366_2000.jpeg"
  },
  {
    id: 8,
    name: "Silla Gamer Pro",
    oldPrice: 900000,
    newPrice: 720000,
    discount: 20,
    icon: <WhatshotIcon fontSize="large" color="primary" />,
    image: "https://siafu.com.mx/cdn/shop/files/SILLAS-GAMER-M1202_1a65884e-40a4-4b90-b478-4cd581341b60_1024x1024.jpg?v=1740702359"
  }
];

export const Offer = () => {
  return (
    <Box sx={{ backgroundColor: "#f5f7fa", py: 6, mt: 9 }}>
      <Container>

        <Box textAlign="center" mb={5}>
          <Stack direction="row" spacing={1} justifyContent="center" alignItems="center">
            <LocalOfferIcon />
            <Typography variant="h4" fontWeight="bold">
              Ofertas Especiales Gamer
            </Typography>
          </Stack>

          <Typography variant="subtitle1" color="text.secondary" mt={1}>
            Aprovecha descuentos exclusivos por tiempo limitado 🔥
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 4,
            justifyContent: "center"
          }}
        >
          {products.map((product) => (
            <Box
              key={product.id}
              sx={{
                width: {
                  xs: "100%",
                  sm: "45%",
                  md: "22%"
                }
              }}
            >
              <Card
                sx={{
                  borderRadius: 3,
                  transition: "0.3s",
                  boxShadow: 3,
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: 6
                  }
                }}
              >
                <CardMedia
                  component="img"
                  height="180"
                  image={product.image}
                  alt={product.name}
                />

                <CardContent>

                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                    {product.icon}

                    <Chip
                      label={`-${product.discount}%`}
                      color="error"
                      sx={{ fontWeight: "bold" }}
                    />
                  </Stack>

                  <Typography variant="h6" mt={2}>
                    {product.name}
                  </Typography>

                  <Stack direction="row" spacing={2} mt={1} alignItems="center">
                    <Typography
                      variant="body2"
                      sx={{ textDecoration: "line-through", color: "gray" }}
                    >
                      ${product.oldPrice.toLocaleString()}
                    </Typography>

                    <Typography variant="h6" color="primary" fontWeight="bold">
                      ${product.newPrice.toLocaleString()}
                    </Typography>
                  </Stack>

                  <Button
                    variant="contained"
                    startIcon={<ShoppingCartIcon />}
                    fullWidth
                    sx={{ mt: 2, fontWeight: "bold" }}
                  >
                    Comprar Ahora
                  </Button>

                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>

      </Container>
    </Box>
  );
};