import React from 'react';

import Box from '@mui/material/Box';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import { styled, SxProps, Theme } from '@mui/material/styles';
import { PopperPlacementType } from '@mui/material/Popper';

import MHPopper from './MHPopper';

export type MHMenuItem = {
  label: string;
  onClick: () => void;
};

type MHMenuProps = {
  open: boolean;
  items: MHMenuItem[];
  handleClose: () => void;
};

const StyledMenuList = styled(MenuList)(({}) => ({}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  whiteSpace: 'normal',
  ...theme.typography.body2
}));

const MenuContent = (props: MHMenuProps) => {
  return (
    <StyledMenuList
      autoFocusItem={props.open}
      id="composition-menu"
      aria-labelledby="composition-button"
      // onKeyDown={handleListKeyDown}
    >
      {props.items.map((item) => (
        <StyledMenuItem
          key={item.label}
          onClick={() => {
            // console.log('clicked');
            item.onClick();
            props.handleClose();
          }}>
          {item.label}
        </StyledMenuItem>
      ))}
    </StyledMenuList>
  );
};

const MHMenu = React.forwardRef(
  (
    {
      children,
      items,
      onMenuToggle,
      ...props
    }: {
      children: React.ReactNode;
      items: MHMenuItem[];
      onMenuToggle: (open: boolean) => void; // to cast menu open/close state to parent
      menuContainerSx?: SxProps<Theme>;
      placement?: PopperPlacementType;
    },
    ref: React.ForwardedRef<{ open: boolean }>
  ) => {
    const [
      menuAnchorEl,
      setMenuAnchorEl
    ] = React.useState<HTMLButtonElement | null>(null);
    const [openMenu, setOpenMenu] = React.useState(false);

    const handleOpenMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
      setMenuAnchorEl(e.currentTarget);
      setOpenMenu((prev) => !prev);
      onMenuToggle(!openMenu);
    };

    const handleCloseMenu = () => {
      setMenuAnchorEl(null);
      setOpenMenu(false);
      onMenuToggle(false);
    };

    React.useImperativeHandle(ref, () => ({
      open: openMenu
    }));

    return (
      <MHPopper
        open={openMenu}
        anchorEl={menuAnchorEl}
        placement={props.placement}
        popperContent={
          <MenuContent
            open={openMenu}
            items={items}
            handleClose={handleCloseMenu}
          />
        }
        onClickAway={handleCloseMenu}
        sx={{
          // width: 340,
          width: 'fit-content',
          p: 0,
          marginTop: '5px',
          marginLeft: '20px',
          ...props.menuContainerSx
        }}>
        <Box
          component="button"
          onClick={handleOpenMenu}
          width="100%"
          sx={{
            display: 'flex',
            alignItems: 'center',
            background: 'none',
            outline: 'none',
            border: 'none',
            p: 0
          }}>
          {children}
        </Box>
      </MHPopper>
    );
  }
);

MHMenu.displayName = 'MHMenu';

export default MHMenu;
