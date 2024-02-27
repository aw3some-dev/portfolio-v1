import * as React from 'react';

import Box from '@mui/material/Box';
import FormControlUnstyled, {
  useFormControlUnstyledContext
} from '@mui/base/FormControlUnstyled';
import { styled } from '@mui/system';
import clsx from 'clsx';

import MHTextInput from './MHTextInput';
import { theme } from '../../../theme/mui/app.theme';
import Label from './Label';

type InputProps = {
  id: string;
  label?: string;
  startAdornment?: React.ReactElement;
  endAdornment?: React.ReactElement;
  placeholder: string;
  type: string;
  name?: string;
  value?: string;
  autoFocus?: boolean;
  dirty?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  fullWidth?: boolean;
  multiline?: boolean;
  rows?: number;
  minRows?: number;
  maxRows?: number;
  email?: boolean;
  min?: number;
  max?: number;
  minLength?: number;
  maxLength?: number;
  readOnly?: boolean;
  disableMargin?: boolean;
  precision?: number;
};

const HelperText = styled((props: {}) => {
  const formControlContext = useFormControlUnstyledContext();
  const [dirty, setDirty] = React.useState(false);

  React.useEffect(() => {
    if (formControlContext?.filled) {
      setDirty(true);
    }
  }, [formControlContext]);

  if (formControlContext === undefined) {
    return null;
  }

  const { required, filled } = formControlContext;
  const showRequiredError = dirty && required && !filled;

  return showRequiredError ? (
    <p
      {...props}
      className={clsx('invalid')}
      style={{
        color: theme.palette.error.main,
        fontSize: '0.7rem'
      }}>
      This field is required.
    </p>
  ) : null;
})`
  font-size: 0.7rem;
`;

const ErrorTip = (props: { error: string | undefined }) => {
  const formControlContext = useFormControlUnstyledContext();

  if (formControlContext === undefined) {
    return null;
  }

  const { filled: _filled, disabled } = formControlContext;

  return disabled ? null : (
    <div
      style={{
        transitionProperty: 'all',
        transitionDuration: '.5s',
        transitionTimingFunction: 'cubic-bezier(1, 1, 1, 1)',
        maxHeight: props.error ? '120px' : '0'
      }}>
      <p
        style={{
          color: theme.palette.error.main,
          fontSize: '0.7rem',
          marginTop: props.error ? '8px' : '0'
        }}>
        {props.error}
      </p>
    </div>
  );
};

const MHFormControl = (props: InputProps) => {
  // const formControlContext = useFormControlUnstyledContext();
  const formControlRef = React.useRef<HTMLDivElement | null>(null);

  const [_height, setHeight] = React.useState(
    formControlRef.current?.clientHeight
  );

  const {
    id,
    type,
    value,
    label,
    required,
    placeholder,
    startAdornment,
    endAdornment,
    autoFocus,
    error,
    multiline,
    rows,
    minRows,
    maxRows,
    min,
    max,
    precision,
    onChange,
    onBlur,
    ...propsRest
  } = props;

  React.useEffect(() => {
    setHeight(formControlRef.current?.clientHeight);
  }, [formControlRef.current?.clientHeight]);

  function getFormControlValidity() {
    if (required && !value) {
      return false;
    }
    return !Boolean(error);
  }

  // console.log(formControlRef.current?.clientHeight);

  return (
    <FormControlUnstyled
      value={value}
      required={required}
      style={{
        marginBottom: props.disableMargin ? 0 : '1.25rem',
        // height: height,
        transition: 'all 1s ease-in-out'
      }}
      ref={formControlRef}
      error={Boolean(error)}
      disabled={propsRest.disabled}>
      {label && <Label required={required}>{label}</Label>}
      <MHTextInput
        id={id}
        startAdornment={startAdornment}
        endAdornment={endAdornment}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        autoFocus={autoFocus}
        multiline={multiline}
        rows={rows}
        minRows={minRows}
        maxRows={maxRows}
        precision={precision}
        componentsProps={{
          input: {
            min: min,
            max: max
          }
        }}
        style={{
          // marginBottom: props.disableMargin ? 0 : '0.5rem',
          borderColor: error ? theme.palette.error.main : ''
        }}
        // disabled={propsRest.disabled}
        readOnly={propsRest.readOnly}
        className={clsx(
          !getFormControlValidity() ? 'control-invalid' : 'control-valid'
        )}
      />
      <Box display="none" height={0} overflow="hidden">
        <HelperText />
      </Box>
      <ErrorTip error={error} />
    </FormControlUnstyled>
  );
};

export default MHFormControl;
