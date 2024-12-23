import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function AssetList({ assets, deleteAsset, updateAsset }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleUpdate = (id) => {
    const asset = assets.find(asset => asset.id === id);
    const updatedValue = prompt('Update value:', asset.value);
    if (updatedValue !== null) {
      updateAsset({ ...asset, value: updatedValue });
    }
  };

  return (
    <div>
      <TextField
        label="Search Assets"
        variant="outlined"
        fullWidth
        margin="normal"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Asset Name</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Value</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {assets
              .filter(asset => asset.name.toLowerCase().includes(searchTerm.toLowerCase()))
              .map((asset) => (
                <TableRow key={asset.id}>
                  <TableCell>{asset.name}</TableCell>
                  <TableCell>{asset.type}</TableCell>
                  <TableCell>{asset.value}</TableCell>
                  <TableCell>{asset.status}</TableCell>
                  <TableCell>
                    <Button
                      onClick={() => handleUpdate(asset.id)}
                      variant="outlined"
                      color="primary"
                      style={{ marginRight: '8px' }}
                    >
                      Update
                    </Button>
                    <Button
                      onClick={() => deleteAsset(asset.id)}
                      variant="outlined"
                      color="secondary"
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
