import React, { useState } from 'react';
import { TextField, Button, Box, Snackbar, Alert } from '@mui/material';
import api from './axiosConfig';

const ProvidersForm = ({ onProveedorAdded }) => {
    const [providerName, setProviderName] = useState('');
    const [providerSocialName, setProviderSocialName] = useState('');
    const [providerAddress, setProviderAddress] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post('/providers', { providerName, providerSocialName, providerAddress });
            onProveedorAdded(); // Llamar al callback para actualizar la lista
        } catch (error) {
            console.error('Error al agregar el proveedor:', error);
            setError("El registro ya existe");
        }
    };

    const handleCloseError = () => {
        setError(null); // Limpiar el estado de error
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', maxWidth: 400, mx: 'auto', my: 2 }}>
            <TextField label="Nombre" value={providerName} onChange={(e) => setProviderName(e.target.value)} required margin="normal" />
            <TextField label="Razón Social" value={providerSocialName} onChange={(e) => setProviderSocialName(e.target.value)} required margin="normal" />
            <TextField label="Dirección" value={providerAddress} onChange={(e) => setProviderAddress(e.target.value)} required margin="normal" />
            <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>Agregar Proveedor</Button>
            {/* Snackbar para mostrar errores */}
            <Snackbar
                open={!!error}
                autoHideDuration={6000}
                onClose={handleCloseError}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert onClose={handleCloseError} severity="error" sx={{ width: '100%' }}>
                    {error}
                </Alert>
            </Snackbar>
        </Box>
    );
}

export default ProvidersForm;