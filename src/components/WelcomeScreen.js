import React, { useEffect, useState } from 'react';
import api from './axiosConfig';
import { Button, Typography, Container, Avatar, CircularProgress, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function WelcomeScreen() {
    const navigate = useNavigate();

    // State to store data
    const [data, setData] = useState({
        appCandidateName: '',
        appVersion: ''
    });
    const [loading, setLoading] = useState(true);  // Handling load state

    useEffect(() => {
        const fetchWelcomeData = async () => {
            try {
                const response = await api.get('/appfeature');  // appfeature api service
                setData(response.data);  // Set data into state
                setLoading(false);  // update loading to false
            } catch (error) {
                console.error('Error al cargar los datos de bienvenida', error);
                setLoading(false);
            }
        };

        fetchWelcomeData();
    }, []);

    // Loading Message
    if (loading) {
        return (
            <Container sx={{ textAlign: 'center', my: 4 }}>
                <CircularProgress />
            </Container>
        );
    }

    return (
        <Container sx={{ textAlign: 'center', my: 4 }}>
            <Avatar
                src="/images/tux.jpg"
                alt="Candidato"
                sx={{ width: 150, height: 150, mx: 'auto', mb: 2 }}
            />
            <Typography variant="h4">{data.appCandidateName}</Typography>
            <Button variant="contained" color="primary" onClick={() => navigate('/proveedores')}>
                Ir a Proveedores
            </Button>

            {/* Footer con la versión de la aplicación */}
            <Box
                sx={{
                    position: 'fixed',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: '#f1f1f1',
                    padding: '10px 0',
                    textAlign: 'center',
                    boxShadow: '0 -2px 5px rgba(0, 0, 0, 0.1)',
                }}
            >
                <Typography variant="body2" color="textSecondary">
                    Versión de la aplicación: {data.appVersion}
                </Typography>
            </Box>
        </Container>
    );
}

export default WelcomeScreen;