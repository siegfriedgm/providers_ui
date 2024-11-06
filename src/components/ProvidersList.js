import React, { useState, useEffect } from 'react';
import api from './axiosConfig';
import { Box, Typography, IconButton, Avatar, Modal, Button } from '@mui/material';
import { Table as VirtualizedTable, Column, AutoSizer } from 'react-virtualized';
import ProvidersForm from './ProvidersForm';
import 'react-virtualized/styles.css';


const ProvidersList = () => {
    const [providers, setProviders] = useState([]);
    const [openModal, setOpenModal] = useState(false);

    // Obtener la lista de Providers desde la API
    const fetchProviders = async () => {
        try {
            const response = await api.get('/providers');
            setProviders(response.data); // Asume que los datos vienen en response.data
        } catch (error) {
            console.error('Error al obtener los proveedores:', error);
        }
    };

    // Función para abrir y cerrar el modal
    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);

    // Función para agregar un nuevo proveedor y actualizar la lista
    const handleProveedorAdded = () => {
        fetchProviders(); // Actualizar la lista después de agregar un proveedor
        handleCloseModal(); // Cerrar el modal
    };

    // Función para eliminar un proveedor
    const deleteProvider = async (id) => {
        try {
            console.log(id);
            await api.delete('/providers/' + id);
            fetchProviders(); // Llamar a fetchProveedores para recargar la lista
        } catch (error) {
            console.error('Error al eliminar el proveedor:', error);
        }
    };

    // Obtener proveedores al cargar el componente
    useEffect(() => {
        fetchProviders();
    }, []);

    return (
        <Box sx={{ my: 4, width: '100%' }}>
            {/* Encabezado */}
            <Box display="flex" alignItems="center" justifyContent="space-between" mb={3}>
            <Box display="flex" alignItems="center">
                    <Avatar
                        src="/images/providers.jpeg"
                        alt="Proveedores Icon"
                        sx={{ width: 40, height: 40, mr: 2 }}
                    />
                    <Typography variant="h5" sx={{ fontWeight: 'bold', textAlign: 'left' }}>
                        Administración de proveedores
                    </Typography>
                </Box>
                <Button variant="contained" color="primary" onClick={handleOpenModal}>
                    Agregar Proveedor
                </Button>
            </Box>

            {/* Tabla virtualizada completa con encabezado y filas */}
            <Box sx={{ height: '70vh', width: '100%', overflowX: 'auto' }}>
                <AutoSizer>
                    {({ width, height }) => (
                        <VirtualizedTable
                            width={width}
                            height={500}
                            headerHeight={50}           // Altura del encabezado
                            rowHeight={60}              // Altura de cada fila
                            rowCount={providers.length}
                            rowGetter={({ index }) => providers[index]}
                            overscanRowCount={5}        // Cargar filas adicionales para suavizar el desplazamiento
                            rowStyle={({ index }) => ({
                                display: 'flex',
                                alignItems: 'center',
                                borderBottom: index !== providers.length - 1 ? '1px solid #e0e0e0' : 'none', // Línea entre filas
                                paddingLeft: 8,
                            })}
                        >
                            <Column
                                label="Nombre"
                                dataKey="providerName"
                                width={width * 0.3}   
                                minWidth={150}
                                flexShrink={0}
                                headerStyle={{ fontWeight: 'bold', textAlign: 'left' }} 
                                style={{ textAlign: 'left' }}
                            />
                            <Column
                                label="Razón Social"
                                dataKey="providerSocialName"
                                width={width * 0.3}
                                minWidth={200} 
                                flexShrink={0}
                                headerStyle={{ fontWeight: 'bold', textAlign: 'left' }} 
                                style={{ textAlign: 'left'}}
                            />
                            <Column
                                label="Dirección"
                                dataKey="providerAddress"
                                width={width * 0.3}
                                minWidth={250}     
                                flexShrink={0}
                                headerStyle={{ fontWeight: 'bold', textAlign: 'left' }} 
                                style={{ textAlign: 'left'}}
                            />
                            <Column
                                label="Acciones"
                                dataKey="acciones"
                                width={width * 0.2}
                                minWidth={100}  
                                flexShrink={0}
                                headerStyle={{ fontWeight: 'bold', textAlign: 'left' }} 
                                cellRenderer={({ rowData }) => (
                                    <IconButton onClick={() => deleteProvider(rowData.providerId)} aria-label="eliminar">
                                        <i className="fas fa-trash" style={{ color: '#d32f2f' }}></i>
                                    </IconButton>
                                )}
                            />
                        </VirtualizedTable>
                    )}
                </AutoSizer>
            </Box>

            {/* Modal para agregar proveedor */}
            <Modal open={openModal} onClose={handleCloseModal} aria-labelledby="modal-title">
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 400,
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                        borderRadius: 2,
                    }}
                >
                    <Typography id="modal-title" variant="h6" component="h2" mb={2}>
                        Agregar Proveedor
                    </Typography>
                    <ProvidersForm onProveedorAdded={handleProveedorAdded} />
                </Box>
            </Modal>
        </Box>
        
    );
};

export default ProvidersList;