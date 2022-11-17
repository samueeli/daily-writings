import { IconButton, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';
import { FiChevronDown, FiMoreHorizontal } from 'react-icons/fi';
import {
  useWritings,
  deleteWriting,
  setCurrent,
  clearCurrent,
} from '../../context/writing/WritingState';

import './WritingItem.styles.css';

export const WritingItem = ({ writing }) => {
  // writing dispatch without the state
  const writingDispatch = useWritings()[1];

  const { _id, title, text } = writing;

  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const onEdit = () => {
    console.log('edited something');
    setCurrent({ writingDispatch, writing });
    handleClose();
  };

  const onDelete = () => {
    deleteWriting(writingDispatch, _id);
    clearCurrent(writingDispatch);
    handleClose();
  };

  return (
    <div className={`WritingItemContainer ${isOpen ? 'open' : ''}`}>
      <div className="WritingItemHeading">
        <h3>{title}</h3>
        <div>
          <span>
            <IconButton onClick={handleMenu}>
              <FiMoreHorizontal />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={onEdit}>Edit</MenuItem>
              <MenuItem onClick={onDelete}>Delete</MenuItem>
            </Menu>
          </span>

          <span className="expand">
            <IconButton onClick={toggleOpen}>
              <FiChevronDown />
            </IconButton>
          </span>
        </div>
      </div>

      <p>{text}</p>
      <div className="bottomFader"></div>
    </div>
  );
};
