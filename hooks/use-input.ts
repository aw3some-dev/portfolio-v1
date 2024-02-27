import React from 'react';

import { Validator } from '../models/form.model';

const useInput = (validators: Validator[]) => {
  const [value, setValue] = React.useState('');
  const [valid, setValid] = React.useState(false);
  const [touched, setTouched] = React.useState(false);
  const [error, setError] = React.useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement> | string) => {
    setValue(typeof e === 'string' ? e : e.target.value);
    setTouched(true);
  };

  const onBlur = () => {
    setTouched(true);
  };

  const markAsTouched = () => {
    setTouched(true);
  };

  const resetInput = () => {
    setTouched(false);
    setError(false);
    setValue('');
  };

  React.useEffect(() => {
    const validatorsResults = validators.map((validator) =>
      validator.validator(value)
    );
    const isValid = validatorsResults.reduce((acc, curr) => acc && curr, true);
    setValid(isValid);
    setError(!isValid && touched);
  }, [value, touched, validators]);

  return {
    value,
    valid,
    touched,
    error,
    onChange,
    onBlur,
    markAsTouched,
    resetInput
  };
};

export default useInput;
