import React from 'react';
import { Typography, Paper } from '@mui/material';

export function MyCustomComponent() {
  return (
    <Paper sx={{ p: 2, textAlign: 'center', bgcolor: 'secondary.light' }}>
      <Typography variant="h5">Welcome to My Store!</Typography>
    </Paper>
  );
}
