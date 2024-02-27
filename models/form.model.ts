import { SelectOption } from '@mui/base';

export type Form = {
  [key: string]: FormControl | boolean;
};

type FormControl = {
  value: string;
  valid: boolean;
  required: boolean;
  validating: boolean;
  validators: Validator[];
};

export type Validator = {
  validator: (value: string) => boolean;
};

export interface SelectProps<T> {
  options: SelectOption<T>[];
  placeholder?: string;
  label?: string;
  value: T;
  onChange: (event: React.MouseEvent | React.KeyboardEvent | React.FocusEvent | null, value: any) => void;
  onBlur: () => void;
  renderValue?: (option: SelectOption<T> | null) => React.ReactNode;
  error?: string;
  required?: boolean;
}

export interface MultiSelectProps<T> {
  options: SelectOption<T>[];
  placeholder?: string;
  label?: string;
  value: T[];
  onChange: (event: React.MouseEvent | React.KeyboardEvent | React.FocusEvent | null, value: any) => void;
  onBlur: () => void;
  renderValue?: (options: SelectOption<T>[] | null) => React.ReactNode;
}

export type MuiXDateChangeFn = (value: {} | null, keyboardInputValue?: string | undefined) => void;

// type  = {
//   placeholder?: string;
//   options: {
//     value: string;
//     label: string;
//     [key: string]: any;
//   }[];
