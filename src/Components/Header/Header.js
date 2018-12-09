import React from 'react';
import ListIcon from '@material-ui/icons/List';

const classes = {
  title: {
    display: 'inline',
  },
};

function Header() {
  return (
    <div>
      <ListIcon />
      <h1 style={classes.title}>Todo list</h1>
    </div>
  );
}

export default Header;
