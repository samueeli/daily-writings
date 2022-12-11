import { Alert } from '@mui/material';
import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

const Alerts = (alert) => {
  // use alert context
  const alertContext = useContext(AlertContext);

  return (
    // check if alerts
    alertContext.alerts.length > 0 &&
    alertContext.alerts.map((alert) => (
      <Alert
        sx={{ marginBottom: '2rem' }}
        key={alert.id}
        variant="outlined"
        severity={alert.type}
      >
        {alert.msg}
      </Alert>
    ))
  );
};

export default Alerts;
