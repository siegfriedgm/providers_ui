import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import WelcomeScreen from './components/WelcomeScreen';
import ProvidersList from './components/ProvidersList';
import { AppBar, Toolbar, Typography, Button, Container, Box, Avatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function App() {
    return (
        <Router>
            <AppBar position="static" sx={{ backgroundColor: '#B8B8B8' }}>
                <Toolbar>
                    {/* Logo antes del texto "e-Commerce Gapsi" */}
                    <Avatar
                        src="./images/logo.png"  // Coloca tu logo en public/images/logo.png
                        alt="Logo Gapsi"
                        sx={{ width: 90, height: 40, mr: 3 }}
                    />
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        e-Commerce Gapsi
                    </Typography>
                    <Button color="inherit" component={Link} to="/">Bienvenido</Button>
                    <Button color="inherit" component={Link} to="/proveedores">Proveedores</Button>
                </Toolbar>
            </AppBar>

            <Container>
                <Box my={20}>
                    <Routes>
                        {/* Ruta de bienvenida */}
                        <Route path="/" element={<WelcomeScreen />} />

                        {/* Ruta para el listado de proveedores */}
                        <Route path="/proveedores" element={<>
                            <ProvidersList />
                        </>} />
                    </Routes>
                </Box>
            </Container>
        </Router>
    );
}

export default App;