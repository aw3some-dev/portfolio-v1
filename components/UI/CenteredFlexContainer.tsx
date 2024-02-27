
import Stack, { StackProps } from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const CenteredFlexContainer = styled((props: StackProps) => (
  <Stack justifyContent="center" alignItems="center" {...props} />
))(({ }) => ({}));

export default CenteredFlexContainer;
