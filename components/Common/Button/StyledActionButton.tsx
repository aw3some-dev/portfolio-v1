import { styled } from '@mui/material/styles';

import MHButton from './OpButton';

const StyledActionButton = styled(MHButton)(({ theme }) => ({
  fontSize: '12px',
  padding: '5px 12px',
  position: 'relative',
  height: '40px',
  width: 'fit-content',
  '& svg': {
    mr: 1
  },
  '&:hover svg': {
    color: theme.palette.primary.main
  }
}));

export default StyledActionButton;
