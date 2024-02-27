import React from 'react';
import ReactDOM from 'react-dom';

import Backdrop from '@mui/material/Backdrop';

export const PrimaryLoader = () => {
  return (
    <>
      <div className="loading-icon-container">
        <div className="loading-icon overshot"></div>
      </div>
      <div style={{ position: 'absolute' }}>
        {/* <PrimaryIcon /> */}
      </div>
    </>
  );
};

const BackdropLoader = (props: { open: boolean }) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            opacity: 0.1,
            zIndex: (theme) => theme.zIndex.drawer + 1001,
            position: 'fixed'
          }}
          open={props.open}>
          <PrimaryLoader />
          {/* <CircularProgress
            color="primary"
            thickness={4.2}
            aria-describedby="loading"
            sx={{
              opacity: 0.5
            }}
          /> */}
        </Backdrop>,
        document.getElementById('backdrop-root') as HTMLElement
      )}
    </React.Fragment>
  );
};

export default BackdropLoader;
