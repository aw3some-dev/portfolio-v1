// import * as React from 'react';

// import Box from '@mui/material/Box';
// import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Stack from '@mui/material/Stack';
// import Typography from '@mui/material/Typography';
// import { styled, useTheme } from '@mui/material/styles';

// import NavPrimaryLinks from './NavPrimaryLinks';
// import MHLogo from '../../theme/icons/PrimaryLogo';

// import SearchIcon from '../../static/svg/search.svg';
// import StaticDataContext from '../../store/context/static-data.context';
// import AbsolutePositionedContainer from '../UI/AbsolutePositionedContainer';
// import { useHistory } from 'react-router-dom';

// interface AppBarProps extends MuiAppBarProps {
//   open?: boolean;
// }

// const AppBarStyled = styled(MuiAppBar, {
//   shouldForwardProp: (prop: any) => prop !== 'open'
// })<AppBarProps>(({ theme, open }) => ({
//   zIndex: theme.zIndex.drawer + 1000,
//   transition: theme.transitions.create(['width', 'margin'], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen
//   }),
//   ...(open && {
//     transition: theme.transitions.create(['width', 'margin'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen
//     })
//   })
// }));

// const typographyStyles: any = {
//   color: '#194049',
//   fontSize: 10,
//   fontFamily: 'Poppins',
//   lineHeight: '92%',
//   textAlign: 'center',
//   letterSpacing: '0.115em',
//   textTransform: 'uppercase'
// };

// const NavBarLink = styled('li')(({ theme }) => ({
//   listStyle: 'none',
//   listStyleType: 'none',
//   cursor: 'pointer',
//   [theme.breakpoints.down('sm')]: {
//     display: 'none'
//   },
//   ...typographyStyles
// }));

// const NavAction = styled('div')(({ theme }) => ({
//   backgroundColor: '#FFFC9B',
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   flexGrow: 1,
//   height: 64,
//   cursor: 'pointer',
//   width: 300,
//   [theme.breakpoints.down('sm')]: {
//     display: 'none'
//   },
//   ...typographyStyles
// }));

// const AppBarTemp = () => {
//   const theme = useTheme();

//   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
//   const open = Boolean(anchorEl);

//   const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const dataCtx = React.useContext(StaticDataContext);
//   const { handleOpen } = dataCtx;

//   const history = useHistory();

//   React.useEffect(() => {
//     // close sidebar when route changes
//     // history.listen((location, action) => {
//     //   // console.log(location);
//     //   // console.log(action);
//     //   // toggleDrawer(false)({} as React.MouseEvent<HTMLDivElement>);
//     // });
//   }, []);

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBarStyled
//         position="static"
//         open={true}
//         sx={{
//           paddingBlock: 0
//         }}>
//         <Stack
//           direction="row"
//           bgcolor="#ECEDF9"
//           height={30}
//           spacing={3}
//           justifyContent="flex-end"
//           alignItems="center"
//           pr={3}
//           sx={{
//             justifyContent: { xs: 'center', sm: 'flex-end' }
//           }}>
//           {/* <NavBarLink>About</NavBarLink>
//           <NavBarLink>employers</NavBarLink>
//           <NavBarLink>the app</NavBarLink>
//           <NavBarLink>Login</NavBarLink> */}
//           <NavBarLink onClick={() => history.push('/summit')}>
//             Summit
//           </NavBarLink>

//           <NavBarLink
//             onClick={() => history.push('/summit')}
//             sx={{
//               display: { xs: 'inline', sm: 'none' },
//               width: { xs: '100%', sm: 'unset' },
//               ...typographyStyles
//             }}>
//             Summit
//           </NavBarLink>

//           {/* <Typography
//             sx={{
//               display: { xs: 'inline', sm: 'none' },
//               ...typographyStyles
//             }}>
//             For Employers
//           </Typography> */}
//         </Stack>

//         <Toolbar
//           variant="dense"
//           sx={{
//             justifyContent: { xs: 'space-between', sm: 'space-between' },
//             position: 'relative'
//           }}
//           disableGutters>
//           <Box aria-label="menu" sx={{ ml: { xs: 0, sm: 0 } }}>
//             <AbsolutePositionedContainer defaultPos top={10} left={20}>
//               <MHLogo />
//             </AbsolutePositionedContainer>
//           </Box>

//           <Stack direction="row" alignItems="center">
//             <NavPrimaryLinks />
//             {/* <SearchIcon /> */}
//             <NavAction onClick={handleOpen}>Request a Demo</NavAction>
//           </Stack>
//         </Toolbar>
//       </AppBarStyled>
//     </Box>
//   );
// };

// export default AppBarTemp;

export {};
