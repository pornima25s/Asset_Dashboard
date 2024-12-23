import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function AddAsset({ addAsset }) {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [value, setValue] = useState('');
  const [status, setStatus] = useState('Active');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && type && value) {
      addAsset({ name, type, value, status });
      setName('');
      setType('');
      setValue('');
      setStatus('Active');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Asset</h2>
      <TextField
        label="Asset Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Asset Type"
        value={type}
        onChange={(e) => setType(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Asset Value"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">Add Asset</Button>
    </form>
  );
}
