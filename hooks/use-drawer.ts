import React from 'react';

export type Anchor = 'top' | 'left' | 'bottom' | 'right';

const useDrawer = (anchor: Anchor, open: boolean) => {
  const [isOpen, setIsOpen] = React.useState(open);

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setIsOpen(open);
  };

  return {
    open: isOpen,
    anchor: anchor,
    toggleDrawer
  };
};

export default useDrawer;
