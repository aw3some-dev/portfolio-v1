import React from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Popper, { PopperProps } from '@mui/material/Popper';
import Grow from '@mui/material/Grow';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { styled } from '@mui/material/styles';

const PopperContainer = styled(Paper)(({}) => ({
  paddingBlock: 10,
  paddingInline: 12,
  width: 300,
  borderRadius: 8,
  boxShadow: '0px 14px 14px rgba(185, 185, 185, 0.25)',
  maxHeight: 400,
  overflowY: 'auto'
}));

type MHPopperProps = PopperProps & {
  children: React.ReactNode;
  popperContent: React.ReactElement;
  onClickAway: () => void;
};

const MHPopper = (props: MHPopperProps) => {
  return (
    <ClickAwayListener onClickAway={props.onClickAway}>
      <Box role="presentation">
        {props.children}
        <Popper
          id="popper-menu"
          open={props.open}
          anchorEl={props.anchorEl}
          placement={props.placement ?? 'bottom'}
          placeholder={'Popper'}
          sx={{
            position: 'relative',
            zIndex: (theme) => theme.zIndex.modal + 1000
          }}
          transition>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom' ? 'left top' : 'left bottom'
              }}
              timeout={350}>
              <PopperContainer sx={props.sx}>
                {props.popperContent}
              </PopperContainer>
            </Grow>
          )}
        </Popper>
      </Box>
    </ClickAwayListener>
  );
};

export default MHPopper;
