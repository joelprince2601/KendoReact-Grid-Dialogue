import React, { useState } from 'react';
import '@progress/kendo-theme-default/dist/all.css';
import { Button } from '@progress/kendo-react-buttons';
import CrossReferenceDialog from './CrossReferenceDialog';
import './App.css';

const App = () => {
  const [showDialog, setShowDialog] = useState(false);

  const toggleDialog = () => {
    setShowDialog(!showDialog);
  };

  return (
    <div className="app-container">
      <Button primary={true} onClick={toggleDialog}>
        New
      </Button>
      {showDialog && <CrossReferenceDialog onClose={toggleDialog} />}
    </div>
  );
};

export default App;
