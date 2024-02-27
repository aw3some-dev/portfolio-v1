import CenteredFlexContainer from '../UI/CenteredFlexContainer';
import PrimaryLogo from '../../theme/icons/PrimaryLogo';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <Box pb={5}>
      <CenteredFlexContainer ml={5} sx={{}}>
        <PrimaryLogo />
      </CenteredFlexContainer>

      <Typography
        align="center"
        textAlign="center"
        mt={3}
        sx={{
          '& > a': {
            textDecoration: 'underline'
          }
        }}>
        Want to reach out to me, please email{' '}
        <a href="mailto:olumidesofayo@yahoo.co.uk">olumidesofayo@yahoo.co.uk</a>
        . Also, check out my website at{' '}
        <a href="https://michaelsofayo.com" target="_blank">
          michaelsofayo.com
        </a>
        .
      </Typography>
    </Box>
  );
};

export default Footer;
