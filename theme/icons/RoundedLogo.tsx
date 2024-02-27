import Box from '@mui/material/Box';
import { SxProps, Theme } from '@mui/material/styles';

import { FnComponent } from '../../models/component.model';

const RoundedLogoIcon: FnComponent<{ sx?: SxProps<Theme> }> = (props) => {
  return (
    <Box
      component="div"
      sx={{
        borderRadius: '50%',
        width: 45,
        height: 45,
        backgroundColor: (theme) => theme.palette.grey[600],
        border: 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        mx: 'auto',
        ...props.sx
      }}>
      {props.children}
    </Box>
  );
};

export default RoundedLogoIcon;
