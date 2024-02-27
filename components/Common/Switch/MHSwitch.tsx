import FormControl from '@mui/material/FormControl';
import FormControlLabel, {
  formControlLabelClasses
} from '@mui/material/FormControlLabel';
import Switch, { SwitchProps } from '@mui/material/Switch';
import Typography, { typographyClasses } from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

import StackedRow from '../../UI/StackedRow';

const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 48,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(22px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        // backgroundColor: 'primary.main',
        opacity: 1,
        border: 0
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5
      }
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff'
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600]
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: 0.3
    }
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.grey[400],
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500
    })
  }
}));

type MHSwitchProps = {
  label?: string | JSX.Element | undefined;
  secondaryLabel?: string | JSX.Element | undefined;
  switchColor?:
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning'
    | 'default';
  // siteTheme: 'light' | 'dark';
};

const SwitchTypography = styled(Typography)(({ theme }) => ({
  [`&.${typographyClasses.root}`]: {
    fontSize: '.85rem',
    lineHeight: '160.5%',
    letterSpacing: '0.04em',
    color: theme.palette.text.primary
  }
}));

const MHSwitch = (props: SwitchProps & MHSwitchProps) => {
  return (
    <FormControl
      component="fieldset"
      variant="standard"
      disabled={props.disabled}>
      <FormControlLabel
        disabled={props.disabled}
        control={
          <StackedRow
            spacing={1}
            justifyContent="center"
            alignItems="center"
            color="common.white">
            <SwitchTypography
              variant="body2"
              sx={{
                opacity: props.checked ? 0.5 : 1,
                transition: 'all 0.5s',
                color: 'primary.main'
                // props.siteTheme === 'dark' ? 'common.white' : 'primary.main'
              }}>
              {props.secondaryLabel}
            </SwitchTypography>
            <IOSSwitch
              checked={props.checked}
              onChange={props.onChange}
              inputProps={{ 'aria-label': String(props.label) }}
              color={props.color}
              disabled={props.disabled}
              // siteTheme={props.siteTheme}
              defaultChecked
            />
            <SwitchTypography
              variant="body2"
              sx={{
                opacity: props.checked ? 1 : 0.5,
                transition: 'all 0.5s',
                color: 'primary.main'
                // props.siteTheme === 'dark' ? 'common.white' :
              }}>
              {props.label}
            </SwitchTypography>
          </StackedRow>
        }
        label={''}
        sx={{
          m: 0,
          [`&.${formControlLabelClasses.root}`]: {}
        }}
      />
    </FormControl>
  );
};

export default MHSwitch;
