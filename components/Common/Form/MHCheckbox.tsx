import clsx from 'clsx';

import Box from '@mui/material/Box';
import Checkbox, { CheckboxProps } from '@mui/material/Checkbox';
import FormControlLabel, {
  formControlLabelClasses
} from '@mui/material/FormControlLabel';
import { typographyClasses } from '@mui/material/Typography';
import { styled, SxProps, Theme } from '@mui/material/styles';

// import CheckboxBlankIcon from '../../../static/svg/checkbox-blank.svg';
// import CheckboxFilledIcon from '../../../static/svg/checkbox-filled.svg';

const CheckboxIcon = styled(Box)(({ theme }) => ({
  border: `1px solid ${theme.palette.grey[500]}`,
  borderRadius: 6,
  width: 20,
  height: 20,
  backgroundImage:
    'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxOSAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEgOC43NzVMNS4xNjk4MSAxM0wxOCAwIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+Cjwvc3ZnPgo=")',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center',
  backgroundSize: '9px 11px'
}));

const IndeterminateIcon = styled(Box)(({ theme }) => ({
  border: `1px solid ${theme.palette.grey[500]}`,
  borderRadius: 6,
  width: 20,
  height: 20,
  backgroundImage:
    'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMiIgdmlld0JveD0iMCAwIDEwIDIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBkPSJNNi4wOTc1MyAwLjAzNzEwOTRIOS40OTk1M1YxLjk2MzExSDYuMDk3NTNINC4xNzE1M0gwLjc2OTUzMVYwLjAzNzEwOTRINC4xNzE1M0g2LjA5NzUzWiIgZmlsbD0iI2ZmZmZmZiIvPg0KPC9zdmc+DQo=")',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center',
  backgroundSize: '9px 11px'
}));

const MHCheckbox = styled(
  ({
    label,
    disableTypography,
    containerSx,
    ...props
  }: CheckboxProps & {
    label?: string;
    disableTypography?: boolean;
    containerSx?: SxProps<Theme>;
    checkboxColor?: string;
  }) => (
    <FormControlLabel
      label={label || ''}
      control={
        <Checkbox
          icon={<CheckboxIcon />}
          checkedIcon={
            <CheckboxIcon bgcolor={props.checkboxColor ?? 'primary.main'} />
          }
          indeterminateIcon={
            <IndeterminateIcon
              bgcolor={props.checkboxColor ?? 'primary.main'}
            />
          }
          checked={props.checked}
          {...props}
          sx={{
            paddingY: 0
          }}></Checkbox>
      }
      value={props.value}
      disableTypography={disableTypography}
      sx={{
        alignItems: 'center',
        [`& .${typographyClasses.root}`]: {
          color: 'text.primary',
          fontSize: { xs: '11px', sm: '11px', md: '12px' },
          lineHeight: { xs: '160.5%', sm: '160.5%' },
          letterSpacing: { xs: '0.04em', sm: '0.04em' },
          opacity: 1
        },
        [`&.${formControlLabelClasses.root}`]: {
          ...containerSx
        }
      }}
      className={clsx(props.className, props.required ? 'required' : '')}
    />
  )
)(({}) => ({
  // the styles in this styled function call do not get applied, only the sx gets applied cos the returned component is in JSX
  fontSize: '18px',
  lineHeight: '160.5%',
  letterSpacing: '0.04em',
  [`& .${typographyClasses.root}`]: {
    // the styles here in this nested obj do get applied for some reason
    // color: 'red !important',
    // opacity: 0.5
  }
}));

export default MHCheckbox;
