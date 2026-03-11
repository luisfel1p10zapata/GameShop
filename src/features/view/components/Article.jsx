import React from "react";
import { Box, Card, CardContent, CardMedia, Typography, Button, Chip, Stack, IconButton } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import HeadsetIcon from "@mui/icons-material/Headset";
import MonitorIcon from "@mui/icons-material/Monitor";
import MemoryIcon from "@mui/icons-material/Memory";
import VideocamIcon from "@mui/icons-material/Videocam";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import MouseIcon from "@mui/icons-material/Mouse";

export const Article = ({ favorites = [], compras = [], addToFavorites = () => {}, addToCompras = () => {} }) => {

  const products = [
    { id:1, name:"PlayStation 5", category:"Consola", price:2500000, stock:"En stock", image:"https://i.blogs.es/56cc33/ps5-pro/500_333.jpeg" },
    { id:2, name:"Xbox Series X", category:"Consola", price:2300000, stock:"Pocas unidades", image:"https://i.blogs.es/0aee46/xboxxapfinal/1366_2000.jpg" },
    { id:3, name:"Nintendo Switch OLED", category:"Consola", price:1800000, stock:"Agotado", image:"https://i.blogs.es/cf5de6/switch/1366_2000.jpg" },
    { id:4, name:"Control Gamer RGB", category:"Accesorio", price:250000, stock:"En stock", image:"https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/12/best-rgb-gaming-controllers-nacon-powera-game-rant-feature-1.jpg" },
    { id:5, name:"Audífonos Gamer Pro", category:"Accesorio", price:350000, stock:"En stock", image:"https://m.media-amazon.com/images/I/51nFdN6CviL._AC_UF1000,1000_QL80_.jpg" },
    { id:6, name:"Teclado Mecánico RGB", category:"Accesorio", price:420000, stock:"Pocas unidades", image:"https://cdnx.jumpseller.com/tienda-gamer-medellin/image/15973402/71sFaDtowqL._AC_SL1500_.jpg?1679019012" },
    { id:7, name:"Mouse Gamer Logitech G502", category:"Accesorio", price:280000, stock:"En stock", image:"https://m.media-amazon.com/images/I/61mpMH5TzkL._AC_SL1500_.jpg" },
    { id:8, name:"Monitor Gamer 27'' 144Hz", category:"Monitor", price:1200000, stock:"En stock", image:"https://images.unsplash.com/photo-1587202372775-e229f172b9d7" },
    { id:9, name:"Silla Gamer Ergonómica", category:"Accesorio", price:950000, stock:"Pocas unidades", image:"https://exitocol.vtexassets.com/arquivos/ids/28308642/silla-de-oficina-gerencial-con-brazos-ajustables-en-altura-negro.jpg?v=638852761928070000" },
    { id:10, name:"Mousepad XL RGB", category:"Accesorio", price:120000, stock:"En stock", image:"https://images.unsplash.com/photo-1603481588273-2f908a9a7a1b" },
    { id:11, name:"Laptop Gamer ASUS ROG", category:"Computador", price:5200000, stock:"En stock", image:"https://images.unsplash.com/photo-1603302576837-37561b2e2302" },
    { id:12, name:"Tarjeta Gráfica RTX 4070", category:"Componente", price:3200000, stock:"Pocas unidades", image:"https://images.unsplash.com/photo-1591488320449-011701bb6704" },
    { id:13, name:"Memoria RAM 16GB RGB", category:"Componente", price:350000, stock:"En stock", image:"https://images.unsplash.com/photo-1562976540-1502c2145186" },
    { id:14, name:"SSD NVMe 1TB", category:"Componente", price:420000, stock:"En stock", image:"https://images.unsplash.com/photo-1593642634443-44adaa06623a" },
    { id:15, name:"Cámara Streaming Full HD", category:"Streaming", price:310000, stock:"En stock", image:"https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04" }
  ];

  const getStockColor = (stock) => {
    switch (stock) {
      case "En stock": return "success";
      case "Pocas unidades": return "warning";
      case "Agotado": return "error";
      default: return "default";
    }
  };

  const getCategoryIcon = (category, name) => {
    if (category === "Consola") return <SportsEsportsIcon color="primary" aria-hidden="true"/>;
    if (name.includes("Audífonos")) return <HeadsetIcon color="primary" aria-hidden="true"/>;
    if (name.includes("Teclado")) return <KeyboardIcon color="primary" aria-hidden="true"/>;
    if (name.includes("Mouse")) return <MouseIcon color="primary" aria-hidden="true"/>;
    if (category === "Monitor") return <MonitorIcon color="primary" aria-hidden="true"/>;
    if (category === "Componente") return <MemoryIcon color="primary" aria-hidden="true"/>;
    if (category === "Streaming") return <VideocamIcon color="primary" aria-hidden="true"/>;
    return <SportsEsportsIcon color="primary" aria-hidden="true"/>;
  };

  const toggleFavorite = (product) => { addToFavorites(product); };

  return (
    <Box component="main" role="main" aria-labelledby="titulo-articulos" sx={{ py:10, px:6, backgroundColor:"#f5f5f5", minHeight:"100vh", mt:6 }}>

      <Typography id="titulo-articulos" variant="h4" component="h1" fontWeight="bold" textAlign="center" mb={6} sx={{ display:"flex", alignItems:"center", justifyContent:"center", gap:1 }}>
        <ShoppingBagIcon fontSize="large" aria-hidden="true"/>
        Artículos Gamer
      </Typography>

      <Box sx={{ display:"flex", flexWrap:"wrap", justifyContent:"center", gap:6 }}>

        {products.map((product) => {

          const isFavorite = favorites?.some(f => f.id === product.id);
          const isPurchased = compras?.some(c => c.id === product.id);

          return (

            <Box key={product.id} sx={{ width:{ xs:"100%", sm:"45%", md:"30%" } }}>

              <Card sx={{ width:"100%", borderRadius:4, boxShadow:4, transition:"0.3s", "&:hover":{ transform:"translateY(-6px)", boxShadow:10 } }}>

                <CardMedia component="img" height="160" image={product.image} alt={`Imagen del producto ${product.name}`} />

                <CardContent>

                  <Typography variant="h6" component="h2" fontWeight="bold" sx={{ display:"flex", alignItems:"center", gap:1 }}>
                    {getCategoryIcon(product.category, product.name)}
                    {product.name}
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    Categoría: {product.category}
                  </Typography>

                  <Typography variant="h6" sx={{ mt:1 }}>
                    ${product.price.toLocaleString("es-CO")}
                  </Typography>

                  <Chip label={product.stock} color={getStockColor(product.stock)} size="small" sx={{ mt:1 }} />

                  <Stack direction="row" spacing={1} mt={3}>

                    <Button variant={isPurchased ? "outlined" : "contained"} fullWidth startIcon={<ShoppingCartOutlinedIcon aria-hidden="true"/>} aria-label={`Comprar ${product.name}`} disabled={product.stock === "Agotado" || isPurchased} onClick={() => addToCompras(product)}>
                      {isPurchased ? "Comprado" : "Comprar"}
                    </Button>

                    <IconButton aria-label={isFavorite ? `Quitar ${product.name} de favoritos` : `Agregar ${product.name} a favoritos`} onClick={() => toggleFavorite(product)} color={isFavorite ? "error" : "default"}>
                      {isFavorite ? <FavoriteIcon aria-hidden="true"/> : <FavoriteBorderOutlinedIcon aria-hidden="true"/>}
                    </IconButton>

                  </Stack>

                </CardContent>

              </Card>

            </Box>

          );
        })}

      </Box>

    </Box>
  );
};