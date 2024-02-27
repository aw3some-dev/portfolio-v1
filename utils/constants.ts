import { SxProps, Theme } from '@mui/material/styles';
import { SelectOption } from '@mui/base';

export const DRAWER_WIDTH: number = 300;

export const DEFAULT_NOTIFICATION_DURATION: number = 7000;

export const REQUIRED_ERROR_TIP = 'This field is required';

export const BACKGROUND_IMAGE_SX: SxProps<Theme> = {
  backgroundRepeat: 'no-repeat',
  // backgroundColor: 'background.default',
  backgroundPosition: 'center',
  backgroundSize: 'cover'
};

export const JOB_LOCATIONS: Array<SelectOption<string>> = [
  {
    label: 'In-person',
    value: 'In-person'
  },
  {
    label: 'Remote',
    value: 'Remote'
  },
  {
    label: 'Hybrid',
    value: 'Hybrid'
  }
];

export const OPTIONS: Array<SelectOption<string>> = [
  {
    label: 'Option #1',
    value: 'Option #1'
  },
  {
    label: 'Option #2',
    value: 'Option #2'
  },
  {
    label: 'Option #3',
    value: 'Option #3'
  },
  {
    label: 'Option #4',
    value: 'Option #4'
  },
  {
    label: 'Option #5',
    value: 'Option #5'
  }
];