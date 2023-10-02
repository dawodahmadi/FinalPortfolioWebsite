import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import { Facebook, Twitter, GitHub } from '@mui/icons-material';

const Footer = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <IconButton color="inherit" aria-label="Facebook">
        <a href="https://github.com/dawodahmadi" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
          <Facebook />
          </a>
        </IconButton>
        <IconButton color="inherit" aria-label="Twitter">
             <a href="https://github.com/dawodahmadi" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
          <Twitter />
          </a>
        </IconButton>
        <IconButton color="inherit" aria-label="GitHub">
        <a href="https://github.com/dawodahmadi" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
          <GitHub />
          </a>
        </IconButton>
        <div style={{ flexGrow: 1 }} /> 
        <Typography variant="body2" color="inherit">
          &copy; Dawod Ahmadi  {new Date().getFullYear()}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;

