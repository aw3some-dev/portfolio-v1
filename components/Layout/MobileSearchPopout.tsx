import { Box, Stack, Typography } from '@mui/material';
import CloseIcon from '../../static/svg/close.svg';
import IconButtonStyled from '../Common/Button/IconButtonStyled';

const MobileSearchPopout = () => {
  return (
    <Box p={3}>
      <Stack direction="row" spacing={2} mb={2}>
        <Box border={1} borderColor="#F3F4F6" flexGrow={1} p={1.2}>
          <Typography
            variant="caption"
            fontSize="12px"
            lineHeight="102%"
            letterSpacing="0.1em"
            sx={{
              opacity: 0.4
            }}>
            search mH...
          </Typography>
        </Box>
        <IconButtonStyled>
          <CloseIcon />
        </IconButtonStyled>
      </Stack>

      <Typography
        variant="body2"
        fontSize="13px"
        lineHeight="100%"
        letterSpacing="0.05em"
        mb={5}
        sx={{
          opacity: 0.6
        }}>
        Search for any content or resources
      </Typography>

      <Typography
        variant="caption"
        fontSize="12px"
        lineHeight="102%"
        letterSpacing="0.1em"
        mb={1.4}
        sx={{}}>
        Top searches
      </Typography>

      <Typography variant="body1" fontSize="13px" lineHeight="227%" mb={1}>
        Career
      </Typography>
      <Typography variant="body1" fontSize="13px" lineHeight="227%" mb={1}>
        Family
      </Typography>
      <Typography variant="body1" fontSize="13px" lineHeight="227%" mb={1}>
        Household
      </Typography>
      <Typography variant="body1" fontSize="13px" lineHeight="227%" mb={1}>
        Finances
      </Typography>
      <Typography variant="body1" fontSize="13px" lineHeight="227%" mb={1}>
        Wellbeing
      </Typography>
    </Box>
  );
};

export default MobileSearchPopout;
