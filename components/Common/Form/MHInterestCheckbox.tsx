import React from 'react';

import Checkbox from '@mui/material/Checkbox';
import { styled } from '@mui/material/styles';

import { FnComponent } from '../../../models/component.model';

const InterestUnChecked = styled(({ label, ...props }: any) => (
  <div {...props} style={{ color: '#194049' }}>
    {label}
  </div>
))(({}) => ({
  backgroundColor: '#F2F2F2',
  // color: '#B6B6B6',
  paddingBlock: '1rem',
  paddingInline: '1.7rem',
  width: '100%',
  textAlign: 'center'
}));

const InterestChecked = styled(InterestUnChecked)(({ fill }) => ({
  backgroundColor: fill || '#F7DAA0',
  color: '#ffffff !important'
}));

const MHInterestCheckbox: FnComponent<{
  label: string;
  fill: string;
  value: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = (props) => {
  const label = { inputProps: { 'aria-label': props.label } };

  return (
    <Checkbox
      {...label}
      value={props.value}
      onChange={props.onChange}
      disableRipple
      icon={<InterestUnChecked {...props} />}
      checkedIcon={<InterestChecked {...props} />}
      sx={{
        // width: '100%',
        padding: 0,
        fontSize: '12px',
        lineHeight: '102%',
        // color: '#194049',
        letterSpacing: '0.05em'
      }}></Checkbox>
  );
};

export default MHInterestCheckbox;
