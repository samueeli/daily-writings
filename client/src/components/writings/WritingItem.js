import { IconButton, Menu, MenuItem } from '@mui/material';
import { useContext, useState } from 'react';
import { FiChevronDown, FiMoreHorizontal } from 'react-icons/fi';
import WritingContext from '../../context/writing/writingContext';
import './WritingItem.styles.css';

export const WritingItem = ({ id, title, text }) => {
  const writingContext = useContext(WritingContext);
  const { deleteWriting } = writingContext;

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
    handleClose();
  };

  const onDelete = () => {
    deleteWriting(id);
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
