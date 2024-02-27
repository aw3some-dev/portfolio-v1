import Typography from '@mui/material/Typography';

import IconButtonStyled from '../Common/Button/IconButtonStyled';
import CloseIcon from '../../static/svg/close-menu.svg';
import StackedRow from '../UI/StackedRow';

const MobileDrawerTop = (props: {
  title: string;
  onClose: (open: boolean) => void;
}) => {
  return (
    <StackedRow
      justifyContent="space-between"
      alignItems="center"
      px={2.5}
      minHeight={70}
      borderBottom={1}
      borderColor="#F3F4F6">
      <Typography
        variant="caption"
        fontSize="11px"
        lineHeight="102%"
        letterSpacing="0.1em">
        {props.title}
      </Typography>

      <IconButtonStyled onClick={props.onClose(false)}>
        <CloseIcon />
      </IconButtonStyled>
    </StackedRow>
  );
};

export default MobileDrawerTop;
