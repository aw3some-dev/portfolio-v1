import React from 'react';

import Radio, { RadioProps } from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { SelectOption } from '@mui/base';
import { styled } from '@mui/material/styles';

import Label from './Label';

const RadioUncheckedIcon = styled('span')(({ theme }) => ({
  borderRadius: '50%',
  width: 21,
  height: 21,
  border: `1px solid ${theme.palette.grey[500]}`,
  // boxShadow:
  //   theme.palette.mode === 'dark'
  //     ? '0 0 0 1px rgb(16 22 26 / 40%)'
  //     : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
  // backgroundColor: theme.palette.mode === 'dark' ? '#394b59' : '#f5f8fa',
  // backgroundImage:
  //   theme.palette.mode === 'dark'
  //     ? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'
  //     : 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
  '.Mui-focusVisible &': {
    outline: '2px auto rgba(19,124,189,.6)',
    outlineOffset: 2
  },
  'input:hover ~ &': {
    // backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5',
  },
  'input:disabled ~ &': {
    boxShadow: 'none',
    background:
      theme.palette.mode === 'dark'
        ? 'rgba(57,75,89,.5)'
        : 'rgba(206,217,224,.5)'
  }
}));

const RadioCheckedIcon = styled(RadioUncheckedIcon)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  display: 'flex',
  placeItems: 'center',
  // backgroundImage:
  //   'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
  // backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
  '&::before': {
    display: 'block',
    width: 7,
    height: 7,
    margin: 'auto auto',
    backgroundColor: '#ffffff',
    borderRadius: '50%',
    content: '""'
  },
  'input:hover ~ &': {
    backgroundColor: theme.palette.secondary.main
  }
}));

type RadioButtonProps = {
  label?: string;
  id: string;
  name: string;
  options: Array<SelectOption<string>>;
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
};

const MHRadioGroup = ({
  label,
  id,
  name,
  color,
  options,
  value,
  onChange
}: RadioButtonProps & RadioProps) => {
  return (
    <FormControl>
      {label && <Label id={id}>{label}</Label>}
      <RadioGroup
        aria-labelledby="radio-buttons-group-label"
        name={name}
        value={value}
        onChange={onChange}
        sx={{}}
        row>
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            label={option.label}
            control={
              <Radio
                color={color || 'secondary'}
                icon={<RadioUncheckedIcon />}
                checkedIcon={<RadioCheckedIcon />}
                sx={{
                  p: 0.5,
                  fontSize: '10px'
                }}
              />
            }
            sx={{
              mr: { xs: 8, md: 4 },
              mb: { xs: 2, md: 0 }
            }}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default MHRadioGroup;
