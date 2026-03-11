import React from "react";
import { Link } from "react-router-dom";
import { Box, Container, Typography, Button, Card, CardContent, CardMedia, Stack } from "@mui/material";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import GroupsIcon from "@mui/icons-material/Groups";

export const Content = () => {
  return (
    <Box component="main" role="main" aria-label="Página principal GameShop Studios" sx={{ width:"100%", m:0, p:0, overflowX:"hidden", backgroundColor:"#f5f5f5", minHeight:"100vh" }}>

      {/* ===== Banner ===== */}
      <Box component="section" role="region" aria-labelledby="titulo-banner" sx={{ width:"100%", minHeight:{ xs:"70vh", md:"85vh" }, mt:"50px", display:"flex", alignItems:"center", justifyContent:"center", backgroundImage:"url(https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop)", backgroundSize:"cover", backgroundPosition:"center", backgroundRepeat:"no-repeat", position:"relative", textAlign:"center", px:2 }}>

        <Box sx={{ position:"absolute", inset:0, background:"linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7))" }} />

        <Box sx={{ position:"relative", zIndex:1, maxWidth:"800px", width:"100%", color:"white" }}>

          <Typography id="titulo-banner" variant="h2" component="h1" fontWeight="bold" sx={{ fontSize:{ xs:"2rem", md:"3rem" }, mb:2 }}>
            GameShop Studios
          </Typography>

          <Typography variant="h6" sx={{ mb:4, opacity:0.9 }}>
            Creamos experiencias inmersivas que conectan jugadores de todo el mundo. Innovación, creatividad y pasión por los videojuegos.
          </Typography>

          <Stack direction={{ xs:"column", sm:"row" }} spacing={2} justifyContent="center" alignItems="center">

            <Button variant="contained" size="large" startIcon={<SportsEsportsIcon aria-hidden="true"/>} aria-label="Ir a la sección de juegos" sx={{ borderRadius:3, px:4 }} onClick={() => { document.getElementById("Juegos").scrollIntoView({ behavior:"smooth" }); }}>
              Ver Juegos
            </Button>

            <Button variant="outlined" size="large" startIcon={<RocketLaunchIcon aria-hidden="true"/>} aria-label="Explorar contenido" sx={{ borderRadius:3, color:"white", borderColor:"white", px:4, "&:hover":{ borderColor:"white", backgroundColor:"rgba(255,255,255,0.1)" } }}>
              Explorar
            </Button>

          </Stack>
        </Box>
      </Box>

      {/* ===== SOBRE NOSOTROS ===== */}
      <Container component="section" role="region" aria-labelledby="titulo-empresa" maxWidth="lg" sx={{ py:8 }}>

        <Box sx={{ display:"flex", flexWrap:"wrap", justifyContent:"center", alignItems:"center", gap:4 }}>

          <Box sx={{ width:{ xs:"100%", md:"50%" } }}>

            <Typography id="titulo-empresa" variant="h4" component="h2" fontWeight="bold" gutterBottom>
              Sobre Nuestra Empresa
            </Typography>

            <Typography variant="body1" color="text.secondary" paragraph>
              GameShop Studios es una empresa enfocada en el desarrollo de videojuegos modernos. Nuestro objetivo es ofrecer experiencias únicas mediante tecnología avanzada, diseño innovador y mundos interactivos.
            </Typography>

            <Typography variant="body1" color="text.secondary" paragraph>
              Nuestro equipo está formado por desarrolladores, diseñadores y creativos apasionados que trabajan juntos para crear juegos que inspiren y entretengan.
            </Typography>

            <Button variant="contained" startIcon={<GroupsIcon aria-hidden="true"/>} aria-label="Conocer el equipo de desarrollo" sx={{ borderRadius:3, mt:2, fontSize:"0.85rem", px:3, py:1 }}>
              Nuestro Equipo
            </Button>

          </Box>

        </Box>

      </Container>

      {/* ===== JUEGOS ===== */}
      <Container component="section" role="region" aria-labelledby="titulo-juegos" id="Juegos" maxWidth="lg" sx={{ py:6 }}>

        <Typography id="titulo-juegos" variant="h4" component="h2" fontWeight="bold" textAlign="center" mb={5}>
          Nuestros Juegos
        </Typography>

        <Box sx={{ display:"flex", flexWrap:"wrap", justifyContent:"center", gap:4 }}>

          {[
            { name:"Minecraft", img:"https://www.clavecd.es/wp-content/uploads/Mojang-Removing-Code-Obfuscation-in-Minecraft-Java-Edition.webp", desc:"Juego de construcción y aventura en un mundo abierto." },
            { name:"Counter Strike 2", img:"https://gaming-cdn.com/images/products/9459/orig/counter-strike-2-pc-mac-juego-steam-cover.jpg?v=1742208833", desc:"Un juego de disparos en primera persona con acción táctica." },
            { name:"God of War Ragnarok", img:"https://cdn.akamai.steamstatic.com/steam/apps/1593500/capsule_616x353.jpg?t=1702056448", desc:"Acompaña a Kratos y Atreus en una aventura épica." },
            { name:"Red Dead Redemption 2", img:"https://cdn.akamai.steamstatic.com/steam/apps/1174180/capsule_616x353.jpg?t=1702056448", desc:"Explora el salvaje oeste en esta épica aventura de acción." },
            { name:"Grand Theft Auto V", img:"https://sm.ign.com/t/ign_latam/screenshot/default/gta_2tnx.1280.jpg", desc:"Explora la ciudad en esta aventura de mundo abierto." },
            { name:"Forza Horizon 5", img:"https://cdn.akamai.steamstatic.com/steam/apps/1551360/capsule_616x353.jpg?t=1702056448", desc:"Compite en carreras extremas llenas de adrenalina." }
          ].map((game, index) => (

            <Box key={index} sx={{ width:{ xs:"100%", sm:"45%", md:"30%" }, maxWidth:320 }}>

              <Card sx={{ borderRadius:4, transition:"0.3s", "&:hover":{ transform:"translateY(-8px)", boxShadow:6 } }}>

                <CardMedia component="img" height="180" image={game.img} alt={`Imagen del juego ${game.name}`} />

                <CardContent>

                  <Typography variant="h6" component="h3" fontWeight="bold">
                    {game.name}
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    {game.desc}
                  </Typography>

                  <Button variant="contained" fullWidth aria-label={`Ver detalles del juego ${game.name}`} sx={{ mt:2, borderRadius:3 }}>
                    Ver Detalles
                  </Button>

                </CardContent>

              </Card>

            </Box>

          ))}

        </Box>

      </Container>

      {/* ===== Mini Banner ===== */}
      <Box component="section" role="region" aria-labelledby="titulo-comunidad" sx={{ width:"100%", display:"flex", justifyContent:"center", py:8, px:0 }}>

        <Box sx={{ width:"100%", maxWidth:"800px", textAlign:"center", borderRadius:"32px", background:"linear-gradient(135deg, #1976d2, #42a5f5)", color:"white", py:6, px:4, boxShadow:6 }}>

          <Typography id="titulo-comunidad" variant="h4" component="h2" fontWeight="bold" gutterBottom>
            Únete a Nuestra Comunidad
          </Typography>

          <Typography variant="body1" sx={{ mb:3 }}>
            Descubre nuevos juegos, noticias y contenido exclusivo.
          </Typography>

          <Box sx={{ display:"flex", justifyContent:"center", gap:2 }}>

            <Button component={Link} to="/registro" variant="contained" size="medium" aria-label="Ir al registro de usuario" sx={{ borderRadius:3, backgroundColor:"white", color:"#1976d2", fontWeight:"bold", px:4, py:1, "&:hover":{ backgroundColor:"#e3f2fd" } }}>
              Registrarse
            </Button>

            <Button component={Link} to="/inicio" variant="outlined" size="medium" aria-label="Ir a iniciar sesión" sx={{ borderRadius:3, borderColor:"white", color:"white", fontWeight:"bold", px:4, py:1, "&:hover":{ borderColor:"#e3f2fd", backgroundColor:"rgba(255,255,255,0.1)" } }}>
              Iniciar Sesión
            </Button>

          </Box>

        </Box>

      </Box>

    </Box>
  );
};

export default Content;