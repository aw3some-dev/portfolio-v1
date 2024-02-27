import Chip, { ChipProps, chipClasses } from '@mui/material/Chip';

import CancelIcon from '../../../static/svg/cancel.svg';
// import CancelIcon from '../../../static/svg/cancel.svg';
{
  /* <CancelIcon height=".65rem" width=".65rem" /> */
}
// props.onDelete
const MHTag = ({ selected, ...props }: ChipProps & { selected: boolean }) => {
  return (
    <Chip
      variant="outlined"
      {...props}
      clickable
      deleteIcon={<CancelIcon height=".65rem" width=".65rem" color="#ff0505" />}
      onDelete={props.onDelete ? props.onDelete : undefined}
      sx={{
        bgcolor: 'common.white',
        borderRadius: 5,
        borderColor: 'gray.700',
        px: 0,
        '& .MuiChip-label': {
          lineHeight: '195%',
          fontSize: '12px'
        },
        [`&.${chipClasses.clickable}`]: {
          // backgroundColor: 'primary.main'
        },
        ...(selected && {
          borderWidth: 2,
          borderColor: 'primary.main',
          color: 'primary.main',
          [`&.${chipClasses.clickable}:hover`]: {
            borderWidth: 2,
            borderColor: 'primary.main',
            color: 'primary.main'
          }
        }),
        ...props.sx
      }}
    />
  );
};

export default MHTag;
