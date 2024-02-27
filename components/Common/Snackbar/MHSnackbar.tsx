import React from 'react';

import Stack from '@mui/material/Stack';
import Snackbar, {
  SnackbarCloseReason,
  SnackbarOrigin,
  SnackbarProps
} from '@mui/material/Snackbar';
import Slide, { SlideProps } from '@mui/material/Slide';
import { styled } from '@mui/material/styles';

import CheckCircleFillIcon from '../../../static/svg/check-circle-fill.svg';
import ErrorFillIcon from '../../../static/svg/x-circle-fill.svg';
import WarningFillIcon from '../../../static/svg/exclamation-triangle-fill.svg';
import InfoRoundedIcon from '../../../static/svg/info-rounded.svg';
import { DEFAULT_NOTIFICATION_DURATION } from '../../../utils/constants';
// import CheckCircleFillIcon from '../../../static/svg/check-circle-fill.svg';
// import ErrorFillIcon from '../../../static/svg/x-circle-fill.svg';
// import WarningFillIcon from '../../../static/svg/exclamation-triangle-fill.svg';

export type SnackbarAlert = 'default' | 'success' | 'error' | 'warning';

type SnackbarEl = {
  variant: SnackbarAlert;
  iconEl: React.ReactElement;
  background: string;
};

const TOAST_VARIANTS: Array<SnackbarEl> = [
  {
    variant: 'default',
    iconEl: <InfoRoundedIcon height="1rem" width="1rem"></InfoRoundedIcon>,
    background: '#ffffff'
  },
  {
    variant: 'success',
    iconEl: <CheckCircleFillIcon color="#2d832d" />,
    background: '#edf7ed'
  },
  {
    variant: 'error',
    iconEl: <ErrorFillIcon color="#f87171" />,
    background: '#fee2e2'
  },
  {
    variant: 'warning',
    iconEl: <WarningFillIcon color="#fb923c" />,
    background: '#ffedd5'
  }
];

const Toast = styled(Stack)<{ background: string }>(
  ({ theme, background }) => ({
    background: background,
    position: 'relative',
    marginBottom: '8px',
    padding: '12px 18px',
    borderRadius: '8px',
    border: '1px solid ' + theme.palette.grey[500],
    boxShadow: '0px 4px 5px 0px rgba(88, 88, 88, 0.14)',
    '& > svg': {
      marginRight: 10
    },
    ...theme.typography.body2,
    fontSize: '.8rem'
  })
);

// export const NotificationContainer = styled('div')(({ theme }) => ({
//   position: 'fixed',
//   top: 20,
//   maxWidth: 700,
//   left: '50%',
//   transform: 'translateX(-50%)',
//   zIndex: theme.zIndex.modal + 1100
// }));

export type MHSnackbarProps = SnackbarProps & {
  headline?: string;
  variant: SnackbarAlert | undefined;
  /**
   * @optional
   * object with vertical and horizontal properties
   */
  anchorOrigin?: SnackbarOrigin;
  /**
   * @optional
   * in milliseconds
   */
  autoHideDuration?: number;
};

function SlideDownTransition(props: SlideProps) {
  return <Slide {...props} direction="down" />;
}

function SlideUpTransition(props: SlideProps) {
  return <Slide {...props} direction="up" />;
}

const MHSnackbar = (props: MHSnackbarProps) => {
  const toast = TOAST_VARIANTS.find((t) => t.variant === props.variant);

  if (!toast) {
    return null;
  }

  const handleClose = (
    event: React.SyntheticEvent<any> | Event,
    reason: SnackbarCloseReason
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    props.onClose && props.onClose(event, reason);
  };

  return (
    <Snackbar
      open={props.open}
      autoHideDuration={props.autoHideDuration ?? DEFAULT_NOTIFICATION_DURATION}
      onClose={handleClose}
      anchorOrigin={
        props.anchorOrigin ?? { vertical: 'top', horizontal: 'center' }
      }
      TransitionComponent={
        props.anchorOrigin
          ? props.anchorOrigin.vertical === 'top'
            ? SlideDownTransition
            : SlideUpTransition
          : SlideDownTransition
      }
      sx={{
        zIndex: (theme) => theme.zIndex.modal + 1100
      }}>
      <Toast
        direction="row"
        spacing={2}
        alignItems="center"
        background={(toast as SnackbarEl).background}>
        {(toast as SnackbarEl).iconEl}
        {props.message}
      </Toast>
    </Snackbar>
  );
};

export default MHSnackbar;
