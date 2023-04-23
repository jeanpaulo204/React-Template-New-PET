import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Icon } from '@mdi/react';
import { mdiDog } from '@mdi/js';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';



export const Footer = () => {
 


 

return (

  <AppBar position="static" style={{ height: 100 }} sx={{ bgcolor: 'black' }}>
  <Container maxWidth="xl">
    <Toolbar>
      <Icon path={mdiDog} size={2} color="white" />
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          mr: 2,
          display: { xs: 'none', md: 'flex' },
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        NewPET
      </Typography>


      <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
        <Stack direction="row" spacing={2}>
          <Button color="secondary">
            <Link className="header" to="/">
              2023 — Footer.
            </Link>
          </Button>
        </Stack>
      </Box>
    </Toolbar>
  </Container>
</AppBar>


);


}
