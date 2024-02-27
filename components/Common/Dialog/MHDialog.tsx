import React from 'react';

import Dialog, { DialogProps, dialogClasses } from '@mui/material/Dialog';
import DialogTitle, { DialogTitleProps } from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { styled } from '@mui/material/styles';

import IconButtonStyled from '../Button/IconButtonStyled';
// import RoundedLogoIcon from '../../../theme/icons/RoundedLogo';
import CloseIcon from '../../../static/svg/cancel.svg';

const CustomizedDialog = styled(Dialog)<{ disablepadding: boolean }>(
  ({ theme, disablepadding }) => ({
    zIndex: theme.zIndex.modal,
    [`& .${dialogClasses.paper}`]: {
      borderRadius: '10px',
      overflowX: 'hidden'
    },
    '& .MuiDialogContent-root': {
      padding: disablepadding ? 0 : theme.spacing(2),
      borderRadius: theme.shape.borderRadius
    },
    '& .MuiDialogActions-root': {
      padding: disablepadding
        ? 0
        : `${theme.spacing(0)} ${theme.spacing(2)} ${theme.spacing(2)}`
    },
    transition: 'all 0.3s ease-in-out'
  })
);

type ModalTitleProps = {
  id: string;
  children: React.ReactNode;
  onClose?: () => void;
  iconcolor?: string;
};

const CustomizedDialogTitle = (props: DialogTitleProps & ModalTitleProps) => {
  const { id, children, onClose, ...rest } = props;

  return (
    <DialogTitle
      sx={{ m: 0, py: 1.8, px: 1.6 }}
      id={id}
      fontFamily="Poppins"
      fontSize={{ xs: '1.1rem', md: '1.3rem' }}
      fontWeight={500}
      {...rest}>
      {children}
      {onClose ? (
        <IconButtonStyled
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 10,
            top: 12,
            zIndex: (theme: any) => theme.zIndex.modal + 900
          }}>
          <CloseIcon width="1rem" height="auto" color={'red'} />
        </IconButtonStyled>
      ) : null}
    </DialogTitle>
  );
};

const MHDialog = ({
  open,
  title,
  handleClose,
  children,
  actions,
  ...others
}: DialogProps & {
  title: string;
  handleClose: () => void;
  actions?: React.ReactElement | null;
  disablePadding?: boolean;
  disableBackdropClick?: boolean;
}) => {
  const onDialogClose = (
    _event: {},
    _reason: 'backdropClick' | 'escapeKeyDown'
  ) => {
    // disables backdrop click close, create function prop and call handleClose to close
    if (!others.disableBackdropClick) {
      handleClose();
    }
  };

  return (
    <CustomizedDialog
      open={open}
      aria-labelledby="customized-dialog"
      onClose={onDialogClose}
      disableEscapeKeyDown
      disablepadding={others.disablePadding ?? false}
      {...others}>
      {title && (
        <CustomizedDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}>
          {title}
        </CustomizedDialogTitle>
      )}
      <DialogContent
        sx={{
          overflowX: 'hidden'
        }}>
        <div>{children}</div>
      </DialogContent>
      <DialogActions>{actions}</DialogActions>
    </CustomizedDialog>
  );
};

export default MHDialog;
