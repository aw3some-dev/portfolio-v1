
import Typography from '@mui/material/Typography';

import clsx from 'clsx';

const Label = (props: any) => (
  <Typography
    component="label"
    variant="body2"
    fontSize={{ xs: '12px', sm: '12px', md: '12px' }}
    lineHeight={{ xs: '92%', md: '141%' }}
    letterSpacing={{ xs: '1.15px', md: '1.15px' }}
    // textTransform="uppercase"
    className={clsx(props.className, props.required ? 'required' : '')}
    sx={{
      display: 'inline-block',
      width: '100%',
      // minWidth: '320px',
      // marginBottom: '4px',
      color: '#194049',
      marginBottom: '8px',
      // textTransform: 'uppercase',
      lineHeight: '170%',
      fontFamily: 'Poppins',
      ...props.sx
      // fontSize: '10px',
      // letterSpacing: '0.115em',
    }}
    {...props}>
    {props.children}
  </Typography>
);

export default Label;

// const FormLabel = styled(
//   ({
//     children,
//     className,
//     required
//   }: {
//     children?: React.ReactNode;
//     className?: string;
//     required?: boolean;
//   }) => {
//     const formControlContext = useFormControlUnstyledContext();
//     const [dirty, setDirty] = React.useState(false);

//     React.useEffect(() => {
//       if (formControlContext?.filled) {
//         setDirty(true);
//       }
//     }, [formControlContext]);

//     if (formControlContext === undefined) {
//       return <p>{children}</p>;
//     }

//     const { error, required: requiredField, filled } = formControlContext;
//     const showRequiredError = dirty && required && !filled;

//     return (
//       <label
//         className={clsx(
//           className,
//           error || showRequiredError ? 'invalid' : '',
//           required && 'required'
//         )}
//         style={{
//           display: 'block'
//         }}>
//         {children}
//         {/* <label
// {...props}
// className={clsx(props.className, props.required ? 'required' : '')}></label> */}
//         {/* {required ? ' *' : ''} */}
//       </label>
//     );
//   }
// )`
//   margin-bottom: 8px;
//   font-family: Poppins;
//   font-size: 10px;
//   line-height: 170%;
//   letter-spacing: 0.115em;
//   text-transform: uppercase;
//   color: #194049;
// `;
