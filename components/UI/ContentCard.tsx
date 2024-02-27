import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
// import Divider from '@mui/material/Divider';
// import useMediaQuery from '@mui/material/useMediaQuery';
import { SxProps, Theme, useTheme } from '@mui/material/styles';

type CardProps = {
  imageSrc: string;
  title: string;
  description: string;
  onMouseClick: () => void;
  cardContainerSx?: SxProps<Theme>;
  /**
   * js styles object for card content below image
   */
  cardContentSx?: SxProps<Theme>;
};

const ContentCard = ({
  imageSrc,
  title,
  description,
  onMouseClick,
  ...others
}: CardProps) => {
  const theme = useTheme();
  // const matchesMdDown = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Card
      sx={{
        // maxWidth: 345,
        height: { xs: 560, md: 590 },
        borderRadius: 2,
        overflow: 'hidden',
        backgroundColor: '#F9F9F7',
        // backgroundColor: 'red',
        '& img': {
          objectFit: 'cover',
          objectPosition: 'center',
          width: '100%',
          // height: 'auto'
        },
        ...others.cardContainerSx
      }}>
      <CardActionArea
        onClick={onMouseClick}
        sx={{
          height: '100%'
        }}>
        <Box
          height={{ xs: 370, md: 440 }}
          overflow="hidden"
          sx={{
            '& > img': {
              objectFit: 'cover',
              objectPosition: 'center',
              [`${theme.breakpoints.down(1536)}`]: {
                height: '100%',
                width: 'auto'
              }
            }
          }}>
          <CardMedia
            // height="150"
            // image="https://res.cloudinary.com/mother-honestly/image/upload/v1657976885/linkedin-sales-solutions-pAtA8xe_iVM-unsplash_kzskcn.png"
            component="img"
            image={imageSrc}
            alt="care-solutions"
          />
        </Box>

        <CardContent
          sx={{
            display: 'flex',
            height: 170,
            py: 1.5,
            ...others.cardContentSx
          }}>
          <Box
            sx={{
              flexGrow: 1
            }}>
            <Typography
              variant="body1"
              fontFamily="Area-Normal-Black"
              color="primary.main"
              align="left"
              fontSize="1rem"
              lineHeight="140%"
              mb={2}
              gutterBottom>
              {title}
            </Typography>
            <Typography
              variant="body1"
              color="primary.main"
              align="left"
              fontSize=".75rem"
              lineHeight="180%"
              letterSpacing="0.04em">
              {description}
            </Typography>
          </Box>
        </CardContent>

        {/* <Divider light variant="middle" /> */}

        {/* <CardActions
          sx={{
            px: 2
          }}>
          <Typography variant="body2">{coach.interests}</Typography>
        </CardActions> */}
      </CardActionArea>
    </Card>
  );
};

export default ContentCard;
