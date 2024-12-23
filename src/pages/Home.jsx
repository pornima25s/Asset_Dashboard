import React, { useState } from 'react';
import Sidenav from '../components/Sidenav';
import Box from '@mui/material/Box';
import AddAsset from './AddAsset';
import AssetList from './AssetList'; 

export default function Home() {
  const [assets, setAssets] = useState([
    { id: 1, name: 'Laptop', type: 'Electronics', value: '1000', status: 'Active' },
    { id: 2, name: 'Table', type: 'Furniture', value: '150', status: 'Inactive' }
  ]);
  
  const addAsset = (newAsset) => {
    setAssets([...assets, { ...newAsset, id: assets.length + 1 }]);
  };

  const deleteAsset = (id) => {
    setAssets(assets.filter(asset => asset.id !== id));
  };

  const updateAsset = (updatedAsset) => {
    setAssets(assets.map(asset => asset.id === updatedAsset.id ? updatedAsset : asset));
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 7 }}>
          
          <AddAsset addAsset={addAsset} />
          <hr />
          <h1>Asset List</h1>
          <AssetList
            assets={assets}
            deleteAsset={deleteAsset}
            updateAsset={updateAsset}
          />
        </Box>
      </Box>
    </>
  );
}
