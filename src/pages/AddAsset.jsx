import React, { useState } from 'react';
import { Box, TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AddAsset = () => {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [value, setValue] = useState('');
    const [status, setStatus] = useState('Active');
    const navigate = useNavigate();

    const handleSubmit = () => {
        // Normally you would save the data, here we just log it for now
        console.log('Asset Added', { name, type, value, status });
        navigate('/');
    };

    return (
        <Box sx={{ padding: 3 }}>
            <h2>Add New Asset</h2>
            <TextField
                label="Asset Name"
                variant="outlined"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
                sx={{ marginBottom: 2 }}
            />
            <FormControl fullWidth sx={{ marginBottom: 2 }}>
                <InputLabel>Asset Type</InputLabel>
                <Select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
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
                value={value}
                onChange={(e) => setValue(e.target.value)}
                sx={{ marginBottom: 2 }}
            />
            <FormControl fullWidth sx={{ marginBottom: 2 }}>
                <InputLabel>Status</InputLabel>
                <Select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    label="Status"
                >
                    <MenuItem value="Active">Active</MenuItem>
                    <MenuItem value="Inactive">Inactive</MenuItem>
                </Select>
            </FormControl>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
                Add Asset
            </Button>
        </Box>
    );
};

export default AddAsset;
