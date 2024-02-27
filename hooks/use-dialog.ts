import React from 'react';

const useDialog = () => {
  const [openDialog, setOpenDialog] = React.useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return {
    open: openDialog,
    handleOpen: handleOpenDialog,
    handleClose: handleCloseDialog
  };
};

export default useDialog;
