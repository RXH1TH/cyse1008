import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import { MyCustomComponent } from './MyCustomComponent';

export function HomeHeroCYSE1008() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* Custom Component */}
      <MyCustomComponent />

      {/* Store Title with Styled Box */}
      <Box 
        sx={{ 
          bgcolor: 'primary.main', 
          color: 'white', 
          p: 2, 
          textAlign: 'center', 
          fontSize: '24px',
          borderRadius: '8px',
          mt: 2
        }}
      >
        My Awesome Store
      </Box>
      
      {/* Interactive Button */}
      <Button 
        variant="contained" 
        color="primary" 
        onClick={() => setCount(count + 1)}
        sx={{ mt: 2 }}
      >
        Click Me {count}
      </Button>

      {/* Reset Button */}
      <Button 
        variant="outlined" 
        color="secondary" 
        onClick={() => setCount(0)}
        sx={{ mt: 2, ml: 1 }}
      >
        Reset
      </Button>
    </div>
  );
}
