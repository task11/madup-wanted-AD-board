import React from 'react';
import useDropdown from '../../utils/hooks/useDropdown';

import Dropdown from '../Dropdown/Dropdown';
import ItemList from '../ItemList/ItemList';
import Typography from '../Typography/Typography';

import { BANNER_LIST } from '../../utils/constants/constList';

import { StyledDropdownButton } from '../SidebarContainer/SidebarContainer.style';
import { StyledItemWrapper, StyledItemDot } from './GraphItemFilter.style';

export default function GraphItemFilter() {
  const { selectedItem, handleSelectBoxToggle, handleSelectItem, isToggled } =
    useDropdown('선택');

  return (
    <Dropdown size='sm'>
      <StyledItemWrapper>
        <StyledItemDot />
        <Typography size='xlg' variant='default'>
          {selectedItem}
        </Typography>
      </StyledItemWrapper>
      <Typography size='xlg' variant='default'>
        <StyledDropdownButton onClick={handleSelectBoxToggle} />
      </Typography>
      {isToggled && (
        <ItemList list={BANNER_LIST} handleSelectItem={handleSelectItem} />
      )}
    </Dropdown>
  );
}
