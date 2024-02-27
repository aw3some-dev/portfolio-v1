import React from 'react';

const useToggle = () => {
  const [open, setOpen] = React.useState(false);

  // curried function
  const handleToggle = (open: boolean) => () => {
    setOpen(open);
  };

  return {
    open,
    handleToggle
  };
};

export default useToggle;
