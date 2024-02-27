import React, { HTMLAttributeAnchorTarget } from 'react';

import Button, { ButtonProps } from '@mui/material/Button';

import { FnComponent } from '../../../models/component.model';
import LoadingIndicator from '../Loading/LoadingIndicator';
import Link from 'next/link';

type OPButtonProps = {
  disabled?: boolean;
  // variant?: 'text' | 'outlined' | 'contained' | undefined;
  type?: 'button' | 'submit' | 'reset' | undefined;
  loading?: boolean;
  fullWidth?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  form?: string;
  // component?: React.ElementType;
  to?: string;
  target?: HTMLAttributeAnchorTarget | undefined;
  pill?: boolean;
};

// not working, dashboard theme takes precedence over styling here
// const StyledButton = styled(Button)(
//   ({ theme: _theme }) => `
//     &.${buttonClasses.outlined}:hover {
//       background: grey,
//     }`
// );

const OPButton: FnComponent<OPButtonProps & ButtonProps> = ({
  sx,
  variant,
  children,
  type,
  loading,
  disabled,
  fullWidth,
  onClick,
  form,
  color,
  ...props
}) => {
  const buttonClickHandler = (e: React.MouseEvent) => {
    onClick && onClick(e);
  };

  const ButtonComponent = (
    <Button
      color={color || 'primary'}
      type={type || 'button'}
      variant={variant}
      sx={{
        py: 1.5,
        px: 3,
        ...(props.href && {
          '&.MuiButtonBase-root:not(:hover)': {
            color: '#ffffff'
          },
          '&.MuiButtonBase-root:hover': {
            color: '#194049'
          }
        }),
        borderRadius: props.pill ? '9999px' : 0,
        // cursor: disabled ? 'not-allowed' : 'pointer',
        ...sx
      }}
      target={props.target}
      size="large"
      disabled={loading || disabled}
      onClick={buttonClickHandler}
      fullWidth={fullWidth}
      disableElevation
      startIcon={loading ? null : props.startIcon}
      // LinkComponent={'a'}
      // href=""
      form={form}
      {...props}>
      {loading ? <LoadingIndicator /> : children}
    </Button>
  );

  return props.to ? (
    <Link href={props.to as string} style={{ textDecoration: 'none' }}>
      {ButtonComponent}
    </Link>
  ) : (
    ButtonComponent
  );
};

export default OPButton;
