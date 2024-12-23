import React from 'react';
import { Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const AssetList = () => {
    // Static data of assets
    const assets = [
        { id: 1, name: 'Asset 1', type: 'Equipment', value: 5000, status: 'Active' },
        { id: 2, name: 'Asset 2', type: 'Vehicle', value: 15000, status: 'Inactive' },
        { id: 3, name: 'Asset 3', type: 'Property', value: 300000, status: 'Active' },
    ];

    return (
        <Box sx={{ padding: 3 }}>
            <h2>Asset List</h2>
            <Button variant="contained" color="primary" sx={{ marginBottom: 2 }}>
                Add Asset
            </Button>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Type</TableCell>
                            <TableCell>Value</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {assets.map((asset) => (
                            <TableRow key={asset.id}>
                                <TableCell>{asset.name}</TableCell>
                                <TableCell>{asset.type}</TableCell>
                                <TableCell>{asset.value}</TableCell>
                                <TableCell>{asset.status}</TableCell>
                                <TableCell>
                                    <IconButton color="primary"><EditIcon /></IconButton>
                                    <IconButton color="error"><DeleteIcon /></IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default AssetList;
