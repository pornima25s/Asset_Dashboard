import React from 'react';
import Sidenav from '../components/Sidenav';
import Box from '@mui/material/Box';
import AddAsset from './AddAsset';
import AssetList from './AssetList'; // Import the AssetList component

export default function Home() {
    return (
        <>
            <Box sx={{ display: "flex" }}>
                <Sidenav /> {/* Sidebar navigation */}
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}> {/* Main content area */}
                    <div>

                        {/* AddAsset component will allow the user to add a new asset */}
                        <AddAsset />
                        
                        <hr />
                        
                        <AssetList />
                    </div>
                </Box>
            </Box>
        </>
    );
}
