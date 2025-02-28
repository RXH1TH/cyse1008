import { m } from 'framer-motion';
import React, { useState } from 'react';

import { useTheme } from '@mui/material/styles';
import { Box, Stack, Button } from '@mui/material';

import { textGradient } from 'src/theme/styles';

import { MyCustomComponent } from './MyCustomComponent';
import { ModularExponentiation } from './components/modular-exponentiation';
import { ExtendedEuclideanAlgorithm } from './components/extended-euclidean-algorithm';

const lgKey = 'lg';


import { Box, Button } from '@mui/material';
import { MyCustomComponent } from './MyCustomComponent';

export function HomeHeroCYSE1008() {
  const theme = useTheme();
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Hero Section */}
      <Stack alignItems="center" spacing={2.5}>
        <Box
          component="h1"
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          sx={{
            ...theme.typography.h2,
            my: 0,
            mx: 'auto',
            maxWidth: 680,
            fontFamily: theme.typography.fontSecondaryFamily,
            [theme.breakpoints.up(lgKey)]: { fontSize: 72, lineHeight: '90px' },
          }}
        >
          <Box
            component={m.span}
            animate={{ backgroundPosition: '200% center' }}
            transition={{
              duration: 20,
              ease: 'linear',
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            sx={{
              ...textGradient(
                `300deg, ${theme.vars.palette.primary.main} 0%, ${theme.vars.palette.warning.main} 25%, ${theme.vars.palette.primary.main} 50%, ${theme.vars.palette.warning.main} 75%, ${theme.vars.palette.primary.main} 100%`
              ),
              backgroundSize: '400%',
              ml: { xs: 0.75, md: 1, xl: 1.5 },
            }}
          >
            Welcome to Quilt
          </Box>
        </Box>

        {/* Algorithm Components */}
        <ExtendedEuclideanAlgorithm />
        <ModularExponentiation />
      </Stack>

      {/* Store Section */}
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
            mt: 2,
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
    </>
  );
}
