import { IconButton, Menu, MenuItem } from '@mui/material'
import PopupState, { bindMenu, bindTrigger } from 'material-ui-popup-state';
import React, { useContext } from 'react'

import MoreVertIcon from '@mui/icons-material/MoreVert';
import { UserContext } from '../../context/UserContext';

const NavbarMenu = () => {
  const { handleLogOut } = useContext(UserContext)
  
  const handleClickLogout = (close: () => void) => {
    handleLogOut();
    close()
  }
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
    {(popupState) => (
      <>
        <IconButton color='inherit' {...bindTrigger(popupState)}>
        <MoreVertIcon/>
        </IconButton>
        <Menu {...bindMenu(popupState)}>
          <MenuItem onClick={popupState.close}>Profile</MenuItem>
          <MenuItem onClick={popupState.close}>My account</MenuItem>
          <MenuItem onClick={()=> handleLogOut(popupState.close)}>Logout</MenuItem>
        </Menu>
      </>
    )}
            </PopupState>
  )
}

export default NavbarMenu