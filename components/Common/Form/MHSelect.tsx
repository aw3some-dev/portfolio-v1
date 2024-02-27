import * as React from 'react';

import Box from '@mui/material/Box';
import SelectUnstyled, {
  SelectUnstyledProps,
  selectUnstyledClasses,
  SelectUnstyledRootSlotProps
} from '@mui/base/SelectUnstyled';
import MultiSelectUnstyled, {
  MultiSelectUnstyledProps
} from '@mui/base/MultiSelectUnstyled';
import OptionUnstyled, {
  optionUnstyledClasses,
  OptionUnstyledProps
} from '@mui/base/OptionUnstyled';
import PopperUnstyled from '@mui/base/PopperUnstyled';
// import { styled } from '@mui/system';
import { styled } from '@mui/material/styles';
import { SelectOption } from '@mui/base';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';

import Label from './Label';

import ErrorTip from './ErrorTip';
import { theme } from '../../../theme/mui/app.theme';
import useMediaQuery from '@mui/material/useMediaQuery';

import MHCheckbox from '../Form/MHCheckbox';
import { ChecklistItem } from '../Dropdown/MHChecklistDropdown';
import useDialog from '../../../hooks/use-dialog';
import useDrawer from '../../../hooks/use-drawer';
import MobileDrawer from '../../Layout/MobileDrawer';
import MobileDrawerTop from '../../Layout/MobileDrawerTop';
import { MultiSelectProps, SelectProps } from '../../../models/form.model';
import { Stack } from '@mui/material';

const blue = {
  100: '#DAECFF',
  200: '#99CCF3',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  900: '#003A75'
};

const grey = {
  50: '#F3F6F9',
  100: '#E0E3E7',
  200: '#E0E3E7',
  300: '#CDD2D7',
  400: '#B2BAC2',
  500: '#A0AAB4',
  600: '#6F7E8C',
  700: '#3E5060',
  800: '#2D3843',
  900: '#1A2027'
};

//   min-width: 320px;
//   border-radius: 0.75em;
const isValueSelected = (value: Array<string> | string) => {
  if (Array.isArray(value)) {
    return (value as Array<string>).some((v) => Boolean(v));
  } else {
    return Boolean(value);
  }
};

const Button = React.forwardRef(function Button<TValue extends {}>(
  props: SelectUnstyledRootSlotProps<TValue>,
  ref: React.ForwardedRef<HTMLButtonElement>
) {
  const { ownerState, ...other } = props;
  return (
    <button type="button" {...other} ref={ref}>
      {other.children}
    </button>
  );
});

const StyledButton = styled(Button)<{
  placeholder: string;
  renderValue: (
    option: SelectOption<string> | SelectOption<string>[]
  ) => React.ReactNode;
  value: Array<string> | string;
}>(
  ({ theme, placeholder, value }) => `
    font-family: Poppins;
    font-size: 0.75rem;
    box-sizing: border-box;
    min-height: calc(1.5em + 22px);
    width: 100%;
    background: #ffffff;
    border: 1px solid #d8d8d8;
    margin-bottom: 1.25rem;
    padding: 14px 14px;
    text-align: left;
    line-height: 200%;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    display: flex;
    align-items: center;
    overflow-x: hidden;
    max-width: 100%;

    &:before {
      content: '${isValueSelected(value as string) ? '' : placeholder || ''}';
      color: ${grey[500]};
      font-weight: 400;
      line-height: 1.5;
      display: block;
      width: auto;
    }
  
    &:hover {
      border-color: ${theme.palette.mode === 'dark' ? grey[700] : grey[300]};
    }
  
    &.${selectUnstyledClasses.focusVisible} {
      outline: 3px solid ${
        theme.palette.mode === 'dark' ? blue[600] : blue[100]
      };
    }

    &::after {
      content: '';
      display: block;
      width: 12px;
      height: 12px;
      flex-grow: 1;
      background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iNyIgdmlld0JveD0iMCAwIDEzIDciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIG9wYWNpdHk9IjAuNSIgZD0iTTEgMUw2LjUgNkwxMiAxIiBzdHJva2U9IiM0MjY4YWEiLz4KPC9zdmc+Cg==");
      background-repeat: no-repeat;
      background-position: right;
    }
  
    &.${selectUnstyledClasses.expanded} {
      &::after {
        content: '';
        display: block;
        width: 12px;
        height: 12px;
        flex-grow: 1;
        background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iNyIgdmlld0JveD0iMCAwIDEzIDciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIG9wYWNpdHk9IjAuNSIgZD0iTTEgMUw2LjUgNkwxMiAxIiBzdHJva2U9IiM0MjY4YWEiLz4KPC9zdmc+Cg==");
        background-repeat: no-repeat;
        background-position: left;
        transform: rotate(180deg);
      }
      box-shadow: 0px 4px 5px 0px rgba(88, 88, 88, 0.14);
    }
    `
);

const StyledListbox = styled('ul')(
  ({ theme }) => `
  font-family: Poppins;
  font-size: 0.75rem;
  box-sizing: border-box;
  padding: 5px;
  min-width: fit-content;
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  overflow: auto;
  outline: 0px;
  max-height: 200px;
  box-shadow: 0px 4px 5px 0px rgba(88, 88, 88, 0.14);

  ::-webkit-scrollbar {
    width: 8px;
    border-radius: 15px;
  }
  
  ::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 15px;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: #C8C8C8;
    width: 8px;
    border-radius: 15px;
  }
  `
);

const StyledPopper = styled(PopperUnstyled)`
  z-index: 1;
  width: calc(100% - 0px);
`;

const Checkmark = styled('span')(
  ({}) => `
    border: 1px solid black;
    border-radius: 3px;
    width: 12px;
    height: 12px;
    display: inline-block;

    .${optionUnstyledClasses.selected} &{
      background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNiIgaGVpZ2h0PSI0IiB2aWV3Qm94PSIwIDAgNiA0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMSAxLjk5OTg0TDIuNSAzLjMzMzE3TDUgMC42NjY1MDQiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K");
      background-repeat: no-repeat;
      background-position: center;
      background-size: 8px 8px;
    }
`
);

const optionStyles = ({ theme }: any) => `
  list-style: none;
  padding: 8px;
  border-radius: 0.45em;
  cursor: default;

  &:last-of-type {
    border-bottom: none;
  }

  &.${optionUnstyledClasses.selected} {
    background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[100]};
    color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
  }

  &.${optionUnstyledClasses.root} {
    background-color: transparent;
  }

  &.${optionUnstyledClasses.highlighted} {
    background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  }

  &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
    background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[100]};
    color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
  }

  &.${optionUnstyledClasses.disabled} {
    color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
  }

  &:hover:not(.${optionUnstyledClasses.disabled}) {
    background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  }
`;

const StyledMultiSelectOption = styled(
  (props: OptionUnstyledProps<unknown>) => {
    return (
      <OptionUnstyled {...props}>
        <Checkmark /> &nbsp; {props.children}
      </OptionUnstyled>
    );
  }
)(optionStyles);

const StyledOption = styled((props: OptionUnstyledProps<unknown>) => {
  return <OptionUnstyled {...props}>{props.children}</OptionUnstyled>;
})(optionStyles);

type ExtraProps = {
  value?: string | string[];
  placeholder?: string;
  onBlur?: () => void;
  popperWidth?: string;
  error?: string;
  options: SelectOption<any>[];
};

const MobileOption = styled(Box)`
  font-family: Poppins;
  font-size: 0.75rem;
  border: 1px solid ${grey[50]};
  padding: 12px;

  &:hover {
    background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  }
`;

function CustomSelect<T extends {}>(
  props: SelectUnstyledProps<T> & ExtraProps
) {
  const components: SelectUnstyledProps<T>['components'] = {
    Root: StyledButton,
    Listbox: StyledListbox,
    Popper: StyledPopper,
    ...props.components
  };

  const { popperWidth, ...rest } = props;

  const matchesMdDown = useMediaQuery(theme.breakpoints.down('md'));

  const { open, handleOpen, handleClose } = useDialog();

  const { open: isDrawerOpen, anchor, toggleDrawer } = useDrawer(
    'bottom',
    false
  );

  // note: the parameter `isOpen` is useless
  const toggleListbox = (_isOpen: boolean) => {
    if (!matchesMdDown) {
      open ? handleClose() : handleOpen();
    } else {
      isDrawerOpen
        ? toggleDrawer(false)({} as React.MouseEvent<HTMLButtonElement>)
        : toggleDrawer(true)({} as React.MouseEvent<HTMLButtonElement>);
    }
  };

  // this implementation was done bcos the select has a infinite setState issue on mobile
  const setSelectedOptionForMobileDevices = (value: T) => {
    rest.onChange && rest.onChange(value);
    toggleDrawer(false)({} as React.MouseEvent<HTMLDivElement>);
  };

  return (
    <React.Fragment>
      <SelectUnstyled
        {...rest}
        listboxOpen={open}
        onListboxOpenChange={toggleListbox}
        components={components}
        componentsProps={{
          root: {
            value: rest.value,
            // placeholder: rest.placeholder || 'Select an option',
            onBlur: rest.onBlur,
            style: {
              borderColor: rest.error
                ? theme.palette.error.main
                : `${grey[100]}`
            }
          },
          popper: {
            style: {
              // width: popperWidth || '320px'
            }
          }
        }}
      />

      <MobileDrawer
        variant="temporary"
        open={isDrawerOpen}
        anchor={anchor}
        onClose={toggleDrawer(false)}
        sx={{
          height: '400px'
        }}>
        <MobileDrawerTop title="Select an option" onClose={toggleDrawer} />

        {rest.options.map((opt) => (
          <MobileOption
            key={opt.value}
            onClick={() => setSelectedOptionForMobileDevices(opt.value)}>
            {opt.label}
          </MobileOption>
        ))}
      </MobileDrawer>
    </React.Fragment>
  );
}

// error={props.error}
export function MHSelect(props: SelectProps<string>) {
  const {
    options,
    label,
    value,
    placeholder,
    onChange,
    onBlur,
    error,
    ...rest
  } = props;

  return (
    <div style={{ position: 'relative' }}>
      {props.label && <Label>{props.label}</Label>}
      <CustomSelect
        placeholder={placeholder}
        value={value}
        onChange={(value) =>
          onChange({} as React.MouseEvent<Element, MouseEvent>, value)
        }
        onBlur={onBlur}
        options={options}
        {...rest}>
        {options.map((opt) => (
          <StyledOption key={opt.value} value={opt.value}>
            {opt.label}
          </StyledOption>
        ))}
      </CustomSelect>

      {props.error && <ErrorTip error={props.error} />}
    </div>
  );
}

function CustomMultiSelect<TValue extends {}>(
  props: MultiSelectUnstyledProps<TValue> & ExtraProps
) {
  const components: MultiSelectUnstyledProps<TValue>['components'] = {
    Root: StyledButton,
    Listbox: StyledListbox,
    Popper: StyledPopper,
    ...props.components
  };

  const { ...rest } = props;

  const matchesMdDown = useMediaQuery(theme.breakpoints.down('md'));

  const { open, handleOpen, handleClose } = useDialog();

  const { open: isDrawerOpen, anchor, toggleDrawer } = useDrawer(
    'bottom',
    false
  );

  // note: the parameter `isOpen` is useless
  const toggleListbox = (_isOpen: boolean) => {
    if (!matchesMdDown) {
      open ? handleClose() : handleOpen();
    } else {
      toggleMobileDrawer({}, 'backdropClick');
    }
  };

  const toggleMobileDrawer = (
    _event: {},
    _reason: 'backdropClick' | 'escapeKeyDown'
  ) => {
    isDrawerOpen
      ? (function () {
          const selectedValues = checked.map(
            (item) => (item.id as unknown) as TValue
          );
          setSelectedOptionForMobileDevices(selectedValues);
        })()
      : (function () {
          setChecked((_prev) => {
            if (!rest.value) {
              return [];
            }
            return rest.value.map(
              (item) =>
                ({
                  id: (item as unknown) as number,
                  label: (item as unknown) as string
                } as ChecklistItem)
            );
          });
          toggleDrawer(true)({} as React.MouseEvent<HTMLElement>);
        })();
  };

  const [checked, setChecked] = React.useState<ChecklistItem[]>([]);

  const handleToggle = (listItem: ChecklistItem) => () => {
    const currentIndex = checked.findIndex((item) => item.id === listItem.id);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(listItem);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  // this implementation was done bcos the select has a infinite setState issue on mobile
  const setSelectedOptionForMobileDevices = (values: TValue[]) => {
    rest.onChange && rest.onChange(values);
    toggleDrawer(false)({} as React.MouseEvent<HTMLElement>);
  };

  return (
    <React.Fragment>
      <MultiSelectUnstyled
        {...rest}
        listboxOpen={open}
        onListboxOpenChange={toggleListbox}
        components={components}
        componentsProps={{
          root: {
            value: props.value,
            // placeholder: props.placeholder || 'Select an option',
            onBlur: props.onBlur
          },
          popper: {
            style: {
              // width: popperWidth || '320px'
            }
          }
        }}
      />

      <MobileDrawer
        variant="temporary"
        open={isDrawerOpen}
        anchor={anchor}
        onClose={toggleMobileDrawer}
        sx={{
          height: '400px'
        }}>
        <MobileDrawerTop title="Select all that apply" onClose={toggleDrawer} />

        <List sx={{ width: '100%', p: 0 }}>
          {rest.options
            .map(
              (item) =>
                ({
                  id: item.value,
                  label: item.label
                } as ChecklistItem)
            )
            .map((item, index) => {
              const labelId = `checkbox-list-label-${index}`;

              return (
                <ListItem
                  key={index}
                  disablePadding
                  disableGutters
                  sx={{
                    border: `1px solid ${grey[50]}`,
                    padding: '12px',
                    '&:hover': {
                      backgroundColor: `${
                        theme.palette.mode === 'dark' ? grey[800] : grey[50]
                      }`,
                      color: `${
                        theme.palette.mode === 'dark' ? grey[300] : grey[900]
                      }`
                    }
                  }}>
                  <ListItemButton
                    role={undefined}
                    onClick={handleToggle(item)}
                    alignItems="center"
                    sx={{
                      py: 0
                    }}
                    dense>
                    <ListItemIcon
                      sx={{
                        minWidth: '30px'
                      }}>
                      <MHCheckbox
                        edge="start"
                        checked={
                          checked.findIndex(
                            (checkedItem) => checkedItem.id === item.id
                          ) > -1
                        }
                        tabIndex={-1}
                        inputProps={{ 'aria-labelledby': labelId }}
                      />
                    </ListItemIcon>
                    <ListItemText id={labelId} primary={item.label} />
                  </ListItemButton>
                </ListItem>
              );
            })}
        </List>
      </MobileDrawer>
    </React.Fragment>
  );
}

export function MHMultiSelect(props: MultiSelectProps<string>) {
  const { options, label, value, onChange, onBlur, ...rest } = props;

  return (
    <div style={{ position: 'relative', maxWidth: '100%' }}>
      {props.label && <Label>{props.label}</Label>}
      <CustomMultiSelect
        placeholder={props.placeholder}
        value={props.value}
        onChange={(value) =>
          onChange({} as React.MouseEvent<Element, MouseEvent>, value)
        }
        onBlur={props.onBlur}
        options={options}
        {...rest}>
        {props.options.map((opt) => (
          <StyledMultiSelectOption key={opt.value} value={opt.value}>
            {opt.label}
          </StyledMultiSelectOption>
        ))}
      </CustomMultiSelect>
    </div>
  );
}

const SelectTag = styled('span')(
  ({ theme }) => `
    border-radius: 3px;
    background: #4268aa38;
    padding: 1px 9px;
    display: inline-block;
    color: ${theme.palette.text.primary};
    width: fit-content;
  `
);

export function renderValue(options: SelectOption<string>[] | null) {
  let content = null;

  if (!options) return content;

  return (
    <Stack
      direction="row"
      spacing={1}
      maxWidth="calc(100% - 30px)"
      overflow={'auto'}
      sx={{
        whiteSpace: 'nowrap',
        '::-webkit-scrollbar': {
          height: '0px'
        }
      }}>
      {options.map((item) => (
        <SelectTag key={item.value}>{item.label}</SelectTag>
      ))}
    </Stack>
  );
}
