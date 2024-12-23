import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';

const EditAsset = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [asset, setAsset] = useState({
        name: '',
        type: '',
        value: '',
        status: 'Active'
    });

    useEffect(() => {
        // Fetch the asset details by id (use static data for now)
        setAsset({ name: `Asset ${id}`, type: 'Equipment', value: 5000, status: 'Active' });
    }, [id]);

    const handleSubmit = () => {
        // Normally you would save the data, here we just log it for now
        console.log('Asset Updated', asset);
        navigate('/');
    };

    return (
        <Box sx={{ padding: 3 }}>
            <h2>Edit Asset</h2>
            <TextField
                label="Asset Name"
                variant="outlined"
                fullWidth
                value={asset.name}
                onChange={(e) => setAsset({ ...asset, name: e.target.value })}
                sx={{ marginBottom: 2 }}
            />
            <FormControl fullWidth sx={{ marginBottom: 2 }}>
                <InputLabel>Asset Type</InputLabel>
                <Select
                    value={asset.type}
                    onChange={(e) => setAsset({ ...asset, type: e.target.value })}
                    label="Asset Type"
                >
                    <MenuItem value="Equipment">Equipment</MenuItem>
                    <MenuItem value="Vehicle">Vehicle</MenuItem>
                    <MenuItem value="Property">Property</MenuItem>
                </Select>
            </FormControl>
            <TextField
                label="Asset Value"
                variant="outlined"
                fullWidth
                type="number"
                value={asset.value}
                onChange={(e) => setAsset({ ...asset, value: e.target.value })}
                sx={{ marginBottom: 2 }}
            />
            <FormControl fullWidth sx={{ marginBottom: 2 }}>
                <InputLabel>Status</InputLabel>
                <Select
                    value={asset.status}
                    onChange={(e) => setAsset({ ...asset, status: e.target.value })}
                    label="Status"
                >
                    <MenuItem value="Active">Active</MenuItem>
                    <MenuItem value="Inactive">Inactive</MenuItem>
                </Select>
            </FormControl>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
                Update Asset
            </Button>
        </Box>
    );
};

export default EditAsset;
