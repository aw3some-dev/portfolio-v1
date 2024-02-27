
import MuiLink, { LinkProps } from '@mui/material/Link';

type MHLinkProps = {
  type: 'default' | 'info' | 'danger';
  onClick?: () => void;
};

const MHLink = ({ type, onClick, ...props }: MHLinkProps & LinkProps) => {
  let color = 'primary.main';

  switch (type) {
    case 'default':
      color = 'primary.main';
      break;

    case 'info':
      color = '#3C72FF';
      break;

    case 'danger':
      color = '#FF5C00';
      break;
  }

  return (
    <MuiLink
      color={color}
      sx={{
        display: 'block',
        '&:hover': {
          color: type === 'danger' ? '#FF5C00' : 'primary.main'
        },
        fontSize: '12px',
        lineHeight: '102%',
        letterSpacing: '0.05em',
        // textDecoration: 'underline',
        ...props.sx,
        cursor: 'pointer'
        // my: 2
      }}
      onClick={onClick}
      {...props}>
      {props.children}
    </MuiLink>
  );
};

export default MHLink;
