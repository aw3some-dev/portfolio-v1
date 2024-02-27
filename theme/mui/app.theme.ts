import { createTheme } from '@mui/material/styles';
import { red, common } from '@mui/material/colors';
import { buttonClasses } from '@mui/material/Button';

const textColor = '#ffffff';
const primaryColor = '#008aaf';
const secondaryColor = '#32b09c';

export const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
      light: common.white
    },
    secondary: {
      main: secondaryColor,
      light: '#d2de39'
    },
    error: {
      main: red.A400
    },
    background: {
      default: '#F5F5F5',
      paper: '#F8F8F8'
      // paper: common.white
    },
    grey: {
      500: '#d8d8d8',
      600: '#F1F1F1',
      700: '#F3F4F6',
      800: '#77633B',
      900: '#ADADAD'
    },
    text: {
      primary: '#ffffff'
    }
    // action: {
    //   active: primaryColor,
    //   hover: primaryColor,
    //   selected: primaryColor,
    //   disabled: '#F5F5F5',
    //   disabledBackground: '#F5F5F5',
    //   focus: primaryColor,
    // }
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
    // fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700
  },
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          fontSize: '0.8rem',
          fontFamily: 'Poppins',
          borderRadius: 0,
          boxShadow: 'none',
          textTransform: 'none',
          // padding: '6px 12px',
          letterSpacing: '0.05em',
          // color: common.white,
          ':hover': {
            // backgroundColor: '#F2EC2C',
            // backgroundColor: secondaryColor,
            // color: textColor
          },
          ':active': {
            // backgroundColor: '#F2EC2C',
            // backgroundColor: secondaryColor,
            // color: textColor
          },
          transition: '0.32s ease-out',
          // ...{
          //   [`&.${buttonClasses.textPrimary}`]: {
          //     color: common.white + ' !important'
          //   }
          // },
          ...{
            [`&.${buttonClasses.containedPrimary}:hover`]: {
              backgroundColor: secondaryColor,
              color: textColor
              // color: primaryColor
            }
          },
          ...{
            [`&.${buttonClasses.containedPrimary}:active`]: {
              backgroundColor: secondaryColor,
              color: textColor
              // color: primaryColor
            }
          },
          ...{
            [`&.${buttonClasses.containedError}:hover`]: {
              // color: primaryColor,
              // backgroundColor: 'error.main'
            }
          },
          ...{
            [`&.${buttonClasses.outlined}`]: {
              color: primaryColor
            }
          },
          ...{
            [`&.${buttonClasses.outlined}:hover`]: {
              backgroundColor: '#F1F1F1'
              // borderColor: '#F1F1F1'
            }
          },
          ...{
            [`&.${buttonClasses.outlined}:active`]: {
              backgroundColor: '#F1F1F1',
              borderColor: '#F1F1F1'
            }
          },
          ...{
            [`&.${buttonClasses.outlined}:disabled`]: {
              backgroundColor: '#F1F1F1',
              borderColor: '#F1F1F1',
              color: 'rgba(0, 0, 0, 0.26)'
            }
          },

          ...{
            [`&.${buttonClasses.outlinedSecondary}`]: {
              // backgroundColor: '#F2EC2C',
              // borderColor: '#F2EC2C',
              borderColor: secondaryColor,
              color: primaryColor
            }
          },
          ...{
            [`&.${buttonClasses.outlinedSecondary}:hover`]: {
              // backgroundColor: 'transparent',
              color: primaryColor
              // borderColor: '#F2EC2C'
            }
          },
          ...{
            [`&.${buttonClasses.outlinedSecondary}:active`]: {
              backgroundColor: 'transparent',
              color: primaryColor
              // borderColor: '#F2EC2C'
            }
          }
        }
      },
      defaultProps: {
        // disableRipple: true
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
          boxShadow: '0px 10px 16px 0px rgba(154, 154, 154, 0.13)'
          // 0px 5px 15px rgba(33, 33, 36, 0.1)
        }
      },
      defaultProps: {
        square: true
      }
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontSize: '1.8rem',
          fontFamily: 'Poppins',
          color: textColor,
          fontWeight: 500
        },
        h2: {
          fontSize: '1.4rem',
          fontFamily: 'Poppins',
          color: textColor,
          fontWeight: 500
        },
        h3: {
          fontSize: '1.2rem',
          fontFamily: 'Poppins',
          color: textColor,
          fontWeight: 500
        },
        h4: {
          fontSize: '1rem',
          fontFamily: 'Poppins',
          color: textColor,
          fontWeight: 500
        },
        caption: {
          fontFamily: 'Poppins',
          fontSize: '1rem',
          fontWeight: 500
        },
        subtitle1: {
          fontSize: '1rem',
          fontFamily: 'Poppins',
          fontWeight: 500
          // color: '#6F6F6F',
        },
        subtitle2: {
          fontSize: '1rem',
          fontFamily: 'Poppins',
          fontWeight: 500
          // color: '#B9B9B9',
        },
        body1: {
          fontSize: '0.8rem',
          fontFamily: 'Poppins',
          fontWeight: 400
          // color: '#717171'
        },
        body2: {
          fontSize: '0.75rem',
          fontFamily: 'Poppins',
          fontWeight: 400
          // color: '#717171',
        }
      },
      defaultProps: {
        color: textColor
      }
    },
    MuiLink: {
      styleOverrides: {
        root: {
          cursor: 'pointer'
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: common.white,
          boxShadow: '0px 4px 15px rgba(221, 221, 221, 0.25)',
          paddingBlock: 7
        }
      }
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: common.white,
          opacity: 1
        }
      }
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          fontSize: '0.8rem',
          lineHeight: 1.5
        }
      }
    },
    MuiMenu: {
      styleOverrides: {
        root: {
          boxShadow: '0px 14px 14px rgba(185, 185, 185, 0.25)',
          borderRadius: '4px'
        }
      }
    },
    MuiTooltip: {
      styleOverrides: {
        popper: {
          backgroundColor: '#ffffff',
          boxShadow: '0px 4px 4px rgba(211, 211, 211, 0.25)',
          borderRadius: '6px'
        }
      }
    },
    MuiCheckbox: {
      defaultProps: {
        // size: 'small'
      },
      styleOverrides: {
        root: {
          borderRadius: '6px'
        }
      }
    },
    MuiCard: {
      defaultProps: {
        raised: false,
        elevation: 0
      },
      styleOverrides: {
        root: {
          boxShadow: 'none'
        }
      }
    }

    // MuiTable: {
    //   styleOverrides: {
    //     root: {
    //       backgroundColor: common.white,
    //       boxShadow: '0px 4px 15px rgba(221, 221, 221, 0.25)',
    //       paddingBlock: 7,
    //       borderRadius: 0,
    //       border: 'none',
    //       '&:hover': {
    //         backgroundColor: common.white,
    //         boxShadow: '0px 4px 15px rgba(221, 221, 221, 0.25)',
    //         paddingBlock: 7,
    //         borderRadius: 0,
    //         border: 'none',
    //         display: 'table',
    //         width: '100%',
    //         height: '100%',
    //         cursor: 'pointer'
    //       }
    //     }
    //   }
    // },
    // MuiTableCell: {
    //   styleOverrides: {
    //     root: {
    //       padding: '0px',
    //       border: 'none',
    //       borderRadius: 0,
    //       backgroundColor: common.white,
    //       boxShadow: '0px 4px 15px rgba(221, 221, 221, 0.25)',
    //       '&:hover': {
    //         backgroundColor: common.white,
    //         boxShadow: '0px 4px 15px rgba(221, 221, 221, 0.25)',
    //         paddingBlock: 7,
    //         borderRadius: 0,
    //         border: 'none',
    //         display: 'table',
    //         width: '100%',
    //         height: '100%',
    //         cursor: 'pointer',
    //         '& $content': {
    //           color: primaryColor,
    //           fontWeight: 'bold',
    //           fontSize: '0.85rem',
    //           fontFamily: 'Avenir-Book',
    //           textTransform: 'uppercase',
    //           padding: '0px',
    //           border: 'none',
    //           borderRadius: 0,
    //           backgroundColor: common.white,
    //           boxShadow: '0px 4px 15px rgba(221, 221, 221, 0.25)'
    //         }
    //       }
    //     }
    //   }
    // }
  }
});
