import React from 'react';

const useCheckbox = (defaultValue: boolean) => {
  const [checked, setChecked] = React.useState(defaultValue);

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

  return {
    checked,
    handleCheck
  };
};

export default useCheckbox;