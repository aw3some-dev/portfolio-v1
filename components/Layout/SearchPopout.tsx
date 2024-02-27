import { Box, Stack, Typography } from '@mui/material';
import SearchIcon from '../../static/svg/search-icon.svg';

const SearchPopout = () => {
  return (
    <Box height={60}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        width={450}
        height="100%"
        mx="auto">
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

        <SearchIcon />
      </Stack>
    </Box>
  );
};

export default SearchPopout;
