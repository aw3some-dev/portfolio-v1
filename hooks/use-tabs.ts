import React from 'react';

const useTabs = () => {
  const [tabIndex, setTabIndex] = React.useState(0);

  const onSwitchTab = (_event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
  };

  return {
    tabIndex,
    onSwitchTab
  };
};

export default useTabs;
