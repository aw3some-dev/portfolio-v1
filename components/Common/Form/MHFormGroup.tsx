import React from 'react';

import Box from '@mui/material/Box';
import { SxProps, Theme } from '@mui/material/styles';

type MHFormGroupProps = {
  children: React.ReactNode;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  // ref?: React.RefObject<HTMLFormElement>;
  autoComplete?: string;
  noValidate?: boolean;
  className?: string;
  style?: React.CSSProperties;

  /**
   * If true, the form will be disabled while submitting.
   * @default false
   * */
  disableWhileSubmitting?: boolean;
  sx?: SxProps<Theme>;
};

const MHFormGroup = React.forwardRef(
  (
    props: MHFormGroupProps,
    ref: React.ForwardedRef<{
      formEl: HTMLFormElement | null;
    }>
  ) => {
    const formRef = React.useRef<HTMLFormElement>(null);

    React.useImperativeHandle(
      ref,
      () =>
        ({
          formEl: formRef.current
        } as any)
    );
    
    return (
      <Box
        component="form"
        onSubmit={props.onSubmit}
        className={props.className}
        style={props.style}
        sx={props.sx}
        autoComplete="off"
        ref={formRef}
        noValidate>
        {/* <Box component="fieldset" disabled={props.disableWhileSubmitting} maxWidth="100%"> */}
          {props.children}
        {/* </Box> */}
      </Box>
    );
  }
);

MHFormGroup.displayName = 'MHFormGroup';

export default MHFormGroup;
