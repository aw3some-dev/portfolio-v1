import  ButtonUnstyled from '@mui/base/ButtonUnstyled';
import { styled } from '@mui/system';

const IconButtonStyled = styled(ButtonUnstyled)(
  ({  }) => `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: inherit;
  cursor: pointer;

  &:focus{
    outline: none;
  }

  &:active{
    outline: none;
  }
`
);

export default IconButtonStyled;
