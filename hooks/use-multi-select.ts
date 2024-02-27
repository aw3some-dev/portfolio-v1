import React from 'react';

const useMultiSelect = () => {
  const [values, setValues] = React.useState<string[] | null>([]);

  const inputChangeHandler = (values: string[] | null) => {
    setValues(values);
  };

  return {
    values,
    inputChangeHandler
  };
};

export default useMultiSelect;
