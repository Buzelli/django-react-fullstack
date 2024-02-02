import * as React from 'react';

import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';

import FormHome from '../components/Form'
import GridHome from '../components/GridHome'


export default function ResponsiveGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <FormHome />
        <GridHome />
    </Box>
  );
}
