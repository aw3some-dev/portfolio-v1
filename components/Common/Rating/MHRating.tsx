import Rating, { RatingProps } from '@mui/material/Rating';
import { styled } from '@mui/material/styles';

import StarIcon from '../../../static/svg/star.svg';

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#194049'
  },
  '& .MuiRating-iconHover': {
    color: '#194049'
  },
  '& svg': {
    color: '#194049'
  }
});

const MHRating = (props: RatingProps) => {
  return (
    <StyledRating
      name="mh-rating"
      defaultValue={5}
      size="large"
      readOnly
      precision={0.5}
      icon={<StarIcon color="#194049" height="13px" width="13px" />}
      emptyIcon={<StarIcon height="13px" width="13px" color="#194049" />}
      {...props}
    />
  );
};

export default MHRating;
