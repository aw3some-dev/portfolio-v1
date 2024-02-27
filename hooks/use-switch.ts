import React from 'react';

const useSwitch = (defaultValue: boolean) => {
  const [checked, setChecked] = React.useState(defaultValue);

  const handleCheck = (
    _event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    setChecked(checked);
  };

  return {
    checked,
    handleCheck
  };
};

export default useSwitch;
