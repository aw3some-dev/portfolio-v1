import Chip, { ChipProps } from '@mui/material/Chip';

import CancelIcon from '../../../static/svg/cancel.svg';
// import CancelIcon from '../../../static/svg/cancel.svg';

const MHChip = (props: ChipProps) => {
  return (
    <Chip
      deleteIcon={<CancelIcon height=".65rem" width=".65rem" />}
      onDelete={props.onDelete}
      {...props}
      sx={{
        // bgcolor: props.variant === 'outlined' ? 'none' : '#dff3fd',
        // borderRadius: 0,
        ...props.sx
      }}
    />
  );
};

export default MHChip;
