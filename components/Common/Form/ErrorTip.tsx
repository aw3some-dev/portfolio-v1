import { useFormControlUnstyledContext } from '@mui/base/FormControlUnstyled';
import { useTheme } from '@mui/material/styles';

// const ErrorTip = styled('span')(
//   ({ theme, style }) => `
//     color: ${theme.palette.error.main};
//     font-size: 0.7rem;
//     display: inline-block;
//     font-family: Poppins;
//     ...({
//         ...style
//     })
// `
// );

const ErrorTip = (props: { error: string | undefined }) => {
  const formControlContext = useFormControlUnstyledContext();

  const theme = useTheme();

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
          marginTop: '8px'
        }}>
        {props.error}
      </p>
    </div>
  );
};

export default ErrorTip;
