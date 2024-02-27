import React from 'react';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { PopperPlacementType } from '@mui/material/Popper';
import { SxProps, Theme } from '@mui/material/styles';

import MHMenu, { MHMenuItem } from '../MenuPopper/MHMenu';
import CaretDownIcon from '../../../static/svg/chevron-down.svg';

// import CaretDownIcon from '../../../static/svg/chevron-down.svg';

export type MHDropdownProps = {
  /**
   * label of dropdown
   * @required
   */
  label: string;
  /**
   * menu items array of js objects
   * @required
   */
  items: MHMenuItem[];
  /**
   * @optional
   * @param e
   * @returns void
   */
  onDropdownExpand?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  /**
   * @optional
   * mui sx object for dropdown button
   */
  dropdownButtonSx?: SxProps<Theme>;
  /**
   * @optional
   * mui sx object for menu container
   */
  menuContainerSx?: SxProps<Theme>;
  /**
   * @optional
   * menu popper placement top-start, bottom-end
   */
  placement?: PopperPlacementType;
};

export const DropdownButton = ({
  label,
  isOpen,
  component,
  onExpand,
  ...props
}: {
  label: string;
  isOpen: boolean;
  component?: 'button';
  onExpand?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  sx?: SxProps<Theme>;
  typographySx?: SxProps<Theme>;
}) => {
  return (
    <Stack
      component={component || 'div'}
      direction="row"
      spacing={1}
      // p="1rem"
      onClick={onExpand}
      sx={{
        cursor: 'pointer',
        width: '100%',
        '& > svg': {
          width: '.7rem',
          height: '.9rem',
          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          transition: 'transform .5s'
        },
        justifyContent: 'space-between',
        alignItems: 'center',
        ...props.sx
      }}>
      <Typography
        variant="body2"
        fontSize=".85rem"
        textTransform="capitalize"
        sx={props.typographySx}>
        {label}
      </Typography>
      <CaretDownIcon />
    </Stack>
  );
};

const MHDropdown = ({
  label,
  items,
  onDropdownExpand,
  dropdownButtonSx,
  ...props
}: MHDropdownProps) => {
  const menuRef = React.useRef<{ open: boolean }>({ open: false });
  const [open, setOpen] = React.useState(false);

  const handleToggle = (open: boolean) => {
    setOpen(open);
  };

  return (
    <MHMenu
      items={items}
      onMenuToggle={handleToggle}
      ref={menuRef}
      menuContainerSx={props.menuContainerSx}
      placement={props.placement}>
      <DropdownButton
        label={label}
        onExpand={onDropdownExpand}
        isOpen={open}
        sx={dropdownButtonSx}
      />
    </MHMenu>
  );
};

export default MHDropdown;
