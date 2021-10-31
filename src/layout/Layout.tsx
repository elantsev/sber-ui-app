import Box from '@mui/material/Box';
import { FC } from 'react';
import { RouterBreadcrumbs, Sidebar } from '../components';


export const Layout: FC = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
        <RouterBreadcrumbs />
        {children}
      </Box>
    </Box>
  );
}
