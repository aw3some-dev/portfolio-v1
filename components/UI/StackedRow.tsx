import Stack, { StackProps } from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const StackedRow = styled((props: StackProps) => (
  <Stack direction="row" {...props} />
))(({  }) => ({
  width: '100%'
}));

export default StackedRow;
