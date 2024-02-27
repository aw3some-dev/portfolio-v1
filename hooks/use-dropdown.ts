import React from 'react';

const useDropdown = () => {
  const [
    dropdownAnchorEl,
    setDropdownAnchorEl
  ] = React.useState<HTMLButtonElement | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  const handleOpenDropdown = (e: React.MouseEvent<HTMLButtonElement>) => {
    setDropdownAnchorEl(e.currentTarget);
    setIsDropdownOpen((prev) => !prev);
  };

  const handleCloseDropdown = () => {
    setDropdownAnchorEl(null);
    setIsDropdownOpen(false);
  };

  return {
    isDropdownOpen,
    dropdownAnchorEl,
    handleOpenDropdown,
    handleCloseDropdown
  };
};

export default useDropdown;
