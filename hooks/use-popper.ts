import React from 'react';

const usePopper = () => {
  const [
    popperAnchorEl,
    setNotificationAnchorEl
  ] = React.useState<HTMLButtonElement | null>(null);
  const [openPopper, setOpenPopper] = React.useState(false);

  const handleOpenPopper = (e: React.MouseEvent<HTMLButtonElement>) => {
    setNotificationAnchorEl(e.currentTarget);
    setOpenPopper((prev) => !prev);
  };

  const handleClosePopper = () => {
    setNotificationAnchorEl(null);
    setOpenPopper(false);
  };

  return {
    popperAnchorEl,
    openPopper,
    handleOpenPopper,
    handleClosePopper
  };
};

export default usePopper;
