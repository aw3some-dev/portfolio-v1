import Drawer from '@mui/material/Drawer';
import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';

import { DRAWER_WIDTH } from '../../utils/constants';
// import { PopperLink } from './NavPrimaryLinks';

export const MobileDrawerLink = styled(Link)(({ }) => ({
  color: '#194049',
  lineHeight: '92%',
  textTransform: 'capitalize',
  listStyle: 'none',
  listStyleType: 'none',
  display: 'block',
  // [theme.breakpoints.down('sm')]: {
  //   display: 'none'
  // },
  // ...theme.typography.subtitle1,
  fontFamily: 'Poppins !important',
  cursor: 'pointer',
  textDecoration: 'none',
  fontSize: '.95rem',
  marginBlockEnd: 36,
  '&:hover': {
    textDecoration: 'none'
  }
}));

const MobileDrawer = styled(
  Drawer,
  {}
)(({ theme, open }) => ({
  zIndex: theme.zIndex.modal + 100 + ' !important',
  '& .MuiDrawer-paper': {
    zIndex: theme.zIndex.modal + 100 + ' !important',
    // zIndex: theme.zIndex.appBar + 1000,
    // whiteSpace: 'nowrap',
    width: theme.breakpoints.down('md') ? '100%' : DRAWER_WIDTH,
    height: '75vh',
    // paddingTop: theme.spacing(5),
    background: theme.palette.common.white,
    borderWidth: 0,
    boxShadow: '2px 4px 4px 0px #B7B7B740',
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),
    boxSizing: 'border-box',
    ...(!open && {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9)
      }
    })
  }
}));

export default MobileDrawer;
