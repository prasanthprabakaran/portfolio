import React, { createContext, useContext, useState } from 'react';
import { Snackbar, Alert } from '@mui/material';

const SnackbarContext = createContext();

export const useSnackbar = () => {
  const context = useContext(SnackbarContext);
  if (!context) {
    throw new Error('useSnackbar must be used within a SnackbarProvider');
  }
  return context;
};

export const SnackbarProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [severity, setSeverity] = useState('success');

  const openSnackbar = (msg, sev = 'success') => {
    setMessage(msg);
    setSeverity(sev);
    setOpen(true);
  };

  const closeSnackbar = () => {
    setOpen(false);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    closeSnackbar();
  };

  return (
    <SnackbarContext.Provider value={{ openSnackbar, closeSnackbar }}>
      {children}
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleClose}
          severity={severity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {message}
        </Alert>
      </Snackbar>
    </SnackbarContext.Provider>
  );
};

