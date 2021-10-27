import Box from '@mui/material/Box';
import { FC } from 'react';
import { Sidebar } from '../components';


export const Layout: FC = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {children}
      </Box>
    </Box>
  );
}
