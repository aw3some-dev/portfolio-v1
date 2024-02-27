import Stack, { StackProps } from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const StackedIconWithText = styled(
  (props: StackProps & { button?: boolean }) => (
    <Stack alignItems="center" {...props} direction="row" />
  )
)(({ theme: _theme, button }) => ({
  ...(button && {
    cursor: 'pointer'
  })
}));

export default StackedIconWithText;
