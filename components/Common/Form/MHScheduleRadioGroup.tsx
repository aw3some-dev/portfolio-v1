import * as React from 'react';
import { styled } from '@mui/material/styles';
import Radio, { RadioProps } from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

import { FnComponent } from '../../../models/component.model';
import { Grid } from '@mui/material';
import AbsolutePositionedContainer from '../../UI/AbsolutePositionedContainer';

const RadioUnchecked = styled(({ label, ...props }: any) => (
  <div {...props} style={{ color: '#194049' }}>
    {label}
  </div>
))(({ theme }) => ({
  backgroundColor: '#F2F2F2',
  // color: '#B6B6B6',
  padding: '1.2rem',
  paddingLeft: theme.breakpoints.md ? '1.7rem' : 0,
  paddingRight: theme.breakpoints.md ? '1.7rem' : 0,
  width: '100%',
  textAlign: 'center',
  fontSize: '12px',
  lineHeight: '102%',
  letterSpacing: '0.6px'
}));

const RadioChecked = styled(RadioUnchecked)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: '#ffffff !important'
}));

const MHRadio: FnComponent<
  {
    label: string;
  } & RadioProps
> = (props) => {
  const label = { inputProps: { 'aria-label': props.label } };

  return (
    <Radio
      {...label}
      disableRipple
      icon={<RadioUnchecked {...props} />}
      checkedIcon={<RadioChecked {...props} />}
      sx={{
        width: '100%',
        padding: 0,
        fontSize: '12px',
        lineHeight: '102%',
        // color: '#194049',
        letterSpacing: '0.05em'
      }}
      {...props}></Radio>
  );
};

// Inspired by blueprintjs
// function BpRadio(props: RadioProps) {
//   return (
//     <Radio
//       disableRipple
//       color="default"
//       checkedIcon={<BpCheckedIcon />}
//       icon={<BpIcon />}
//       {...props}
//     />
//   );
// }

type RadioButtonProps = {
  label?: string;
  id: string;
  name: string;
  options: {
    value: string;
    label: string;
    disabled?: boolean;
    appendNode?: React.ReactNode;
  }[];
  color?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning'
    | undefined;
  value: any;
  onChange: (event: React.ChangeEvent<HTMLInputElement>, value: any) => void;
  // gridSize: number;
};

export default function MHScheduleRadioGroup({
  name,
  options,
  value,
  onChange
}: RadioButtonProps) {
  return (
    <FormControl fullWidth>
      <RadioGroup
        aria-labelledby="radio-buttons-group-label"
        name={name}
        value={value}
        onChange={onChange}>
        <Grid container rowSpacing={1} mb={2}>
          {options.map((option, index) => (
            <Grid
              key={index}
              item
              xs={6}
              md={3}
              lg={2}
              pr={2}
              sx={{
                '& > .MuiFormControlLabel-root': {
                  m: 0,
                  display: 'block',
                  position: 'relative'
                },
                '& > .MuiFormControlLabel-root.Mui-disabled': {
                  cursor: 'not-allowed'
                }
              }}>
              <FormControlLabel
                key={option.value}
                value={option.value}
                label={
                  option.appendNode ? (
                    <AbsolutePositionedContainer
                      sx={{
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, 60%)'
                      }}>
                      {option.appendNode}
                    </AbsolutePositionedContainer>
                  ) : (
                    ''
                  )
                }
                disableTypography
                disabled={option.disabled}
                control={<MHRadio label={option.label} />}
              />
            </Grid>
          ))}
        </Grid>
      </RadioGroup>
    </FormControl>
  );
}
