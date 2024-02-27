import React from 'react';

import InputUnstyled, {
  InputUnstyledProps
  // inputUnstyledClasses
} from '@mui/base/InputUnstyled';
// import { useFormControlUnstyledContext } from '@mui/base/FormControlUnstyled';
import { styled } from '@mui/system';
import { formatNumber, parseNumber } from '@/utils/utils';

const StyledInputRoot = styled('div')(
  ({}) => `
  display: flex;
  font-weight: 400;
  align-items: center;
  justify-content: center;
  transition: all 0.4s ease-in;
  position: relative;
  border: 1px solid #d8d8d8;

  &.MuiInput-root::placeholder {
    color: #A6A6A6;
  }

  .Mui-focused > &.MuiInput-root.MuiInput-formControl {

  }

  &.MuiInput-root.Mui-disabled input {
    background-color: #F5F5F5;
    border: 1px solid #F5F5F5;
    color: #A6A6A6;
  }

  &.MuiInput-root.Mui-focused {
  }

  &.MuiInput-root:hover {
  }
  `
);

const StyledInputElement = styled('input')`
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 200%;
  letter-spacing: 0.02em;
  flex-grow: 1;
  color: #194049;
  background: #ffffff;
  border: none;
  border-radius: inherit;
  padding: 12px 12px;
  outline: 0;
  box-sizing: border-box;
  &::placeholder {
    color: #194049;
    opacity: 0.5;
  }
`;

const TextareaEl = React.forwardRef(
  ({ ...props }, _ref: React.ForwardedRef<HTMLInputElement>) => (
    <textarea {...props} rows={4}></textarea>
  )
);

TextareaEl.displayName = 'TextareaEl';

const StyledTextareaElement = styled(TextareaEl, {
  shouldForwardProp: (prop) =>
    !['ownerState', 'minRows', 'maxRows', 'rows'].includes(prop.toString())
})(
  ({}) => `
  display: block;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 200%;
  letter-spacing: 0.02em;
  flex-grow: 1;
  color: #194049;
  background: #ffffff;
  border: none;
  border-radius: inherit;
  padding: 12px 12px;
  outline: 0;
  &::placeholder {
    color: #194049;
    opacity: 0.5;
  }
`
);

StyledTextareaElement.displayName = 'StyledTextareaElement';

type NumberInputProps = {
  precision?: number;
};

const MHTextInput = React.forwardRef(
  (
    props: InputUnstyledProps & NumberInputProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const { components, rows, ...others } = props;

    // const formControlContext = useFormControlUnstyledContext();
    React.useEffect(() => {
      // console.log(inputRef);
    }, []);

    // const { onChange, onFocus, onBlur, error } = formControlContext!;

    const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
      others.onChange && others.onChange(event);
    };

    const inputBlurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
      formatNumberInput(event);
      others.onBlur && others.onBlur(event);
    };

    const formatNumberInput = (e: React.FocusEvent<HTMLInputElement>) => {
      if (others.type !== 'number' || !e.target.value) {
        return;
      }

      let formattedValue =
        others.precision && others.precision > 0
          ? parseFloat(parseNumber(e.target.value))
              .toFixed(2)
              .replace(/\d(?=(\d{3})+\.)/g, '$&,')
          : formatNumber(+parseNumber(e.target.value));

      e.target.value = formattedValue;

      others.onChange &&
        others.onChange(e as React.ChangeEvent<HTMLInputElement>);
    };

    // if (others.type === 'number' && event.target.value) {
    //   let formattedValue = parseFloat(parseNumber(event.target.value))
    //     .toFixed(2)
    //     .replace(/\d(?=(\d{3})+\.)/g, '$&,');
    //   event.target.value = formattedValue;
    //   others.onChange &&
    //     others.onChange(event as React.ChangeEvent<HTMLInputElement>);
    // }

    React.useImperativeHandle(ref, () => ({} as any));

    return (
      <React.Fragment>
        <InputUnstyled
          components={{
            Root: StyledInputRoot,
            Input: StyledInputElement,
            Textarea: StyledTextareaElement,
            ...components
          }}
          {...others}
          onChange={inputChangeHandler}
          onBlur={inputBlurHandler}
          ref={ref}
          componentsProps={{
            input: {
              type: others.type === 'number' ? 'text' : others.type,
              disabled: others.disabled,
              className: others.className
            }
          }}
        />
      </React.Fragment>
    );
  }
);

MHTextInput.displayName = 'MHTextInput';

export default MHTextInput;
// event.target.value.replace(/[^0-9]/g, '');
// inputMode: 'decimal',
// pattern: '[0-9]*',
// precision: '2',
// step: '1.00'
