import React from 'react';

import MHTextInput from './MHTextInput';
import MHButton from '../Button/OpButton';
// import InputAdornment from './InputAdornment';
// import IconButtonUnstyled from '../Button/IconButtonStyled';
import useInput from '../../../hooks/use-input';

import * as validators from '../../../utils/validators';
import StackedRow from '../../UI/StackedRow';

const SearchField = ({
  icon,
  placeholder,
  sx,
  loading
}: {
  icon?: React.ReactElement;
  placeholder: string;
  bgcolor?: string;
  sx?: object;
  loading?: boolean;
  onSearch: (value: string) => void;
}) => {
  const {
    value: searchValue,
    // valid: searchValid,
    onChange: searchOnChange,
    onBlur: searchOnBlur
  } = useInput([
    {
      validator: (value: string) => validators.required(value)
    }
  ]);

  return (
    <React.Fragment>
      <StackedRow
        // bgcolor={bgcolor || '#F1F1F1'}
        sx={{
          '& > .MuiInput-root': {
            flexGrow: 1
          },
          ...sx
        }}>
        <MHTextInput
          id="search"
          type="text"
          placeholder={placeholder}
          value={searchValue}
          onChange={searchOnChange}
          onBlur={searchOnBlur}
        />
        <MHButton
          variant="contained"
          type="submit"
          loading={loading}
          sx={{
            minWidth: 'auto',
            '& svg': {
              stroke: 'grey.500',
              width: '1rem'
            },
            '&.MuiButton-root:hover svg': {
              stroke: 'primary'
            }
          }}>
          {icon && icon}
        </MHButton>
      </StackedRow>
    </React.Fragment>
  );
};

export default SearchField;
