import React from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';

import MHPopper from '../MenuPopper/MHPopper';
import { DropdownButton } from './MHDropdown';
import MHCheckbox from '../Form/MHCheckbox';

export type ChecklistItem = {
  id: number;
  label: string;
};

type ChecklistProps = {
  items: ChecklistItem[];
  setOfCheckedId: number[];
  onCheck?: (id: number, checked: boolean) => void;
};

const Checklist = (props: ChecklistProps) => {
  // const [checked, setChecked] = React.useState<ChecklistItem[]>([]);

  // const handleToggle = (listItem: ChecklistItem) => () => {
  //   const currentIndex = checked.findIndex((item) => item.id === listItem.id);
  //   const newChecked = [...checked];

  //   if (currentIndex === -1) {
  //     newChecked.push(listItem);
  //   } else {
  //     newChecked.splice(currentIndex, 1);
  //   }

  //   setChecked(newChecked);
  //   props.onCheck && props.onCheck(newChecked);
  // };

  // React.useEffect(() => {
  //   let checkedSet: ChecklistItem[] = [];
  //   // console.log(props.setOfCheckedId)

  //   for (const checkedId of props.setOfCheckedId) {
  //     const checkedItem = props.items.find((item) => item.id === checkedId);

  //     if (checkedItem) {
  //       checkedSet = checkedSet.concat(checkedItem);
  //     }
  //   }

  //   setChecked(checkedSet);
  // }, []);

  const handleToggle = (id: number) => () => {
    const checkedItemIndex = props.setOfCheckedId.indexOf(id);

    // if item doesn't exist in setOfCheckedId,treat as newly checked item
    // if item exists in setOfCheckedId,treat as previously checked item that is now unchecked
    let checked = checkedItemIndex === -1;
    props.onCheck && props.onCheck(id, checked);
  };

  return (
    <List sx={{ width: '100%', maxWidth: 360 }}>
      {props.items.map((item, index) => {
        const labelId = `checkbox-list-label-${index}`;

        return (
          <ListItem key={item.id} disableGutters>
            <ListItemButton
              role={undefined}
              onClick={handleToggle(item.id)}
              alignItems="center"
              sx={{
                py: 0
              }}
              dense>
              <ListItemIcon
                sx={{
                  minWidth: '30px'
                }}>
                <MHCheckbox
                  edge="start"
                  checkboxColor='secondary.main'
                  checked={props.setOfCheckedId.indexOf(item.id) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={item.label} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};

const MHChecklistDropdown = (props: { label: string } & ChecklistProps) => {
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

  return (
    <MHPopper
      open={isDropdownOpen}
      anchorEl={dropdownAnchorEl}
      popperContent={
        <Checklist
          items={props.items}
          setOfCheckedId={props.setOfCheckedId}
          onCheck={props.onCheck}
        />
      }
      onClickAway={handleCloseDropdown}>
      <DropdownButton
        label={props.label}
        onExpand={handleOpenDropdown}
        isOpen={isDropdownOpen}
      />
    </MHPopper>
  );
};

export default MHChecklistDropdown;
