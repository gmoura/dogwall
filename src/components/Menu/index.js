import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

const useStyles = makeStyles({
  root: {
    marginTop: 20
  }
});

const Menu = ({ auth, loadFeed }) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const {
    user: { token }
  } = auth;

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        label="Husky"
        onClick={() => loadFeed(token, 'category=husky')}
      />
      <BottomNavigationAction
        label="Labrador"
        onClick={() => loadFeed(token, 'category=labrador')}
      />
      <BottomNavigationAction
        label="Hound"
        onClick={() => loadFeed(token, 'category=hound')}
      />
      <BottomNavigationAction
        label="Pug"
        onClick={() => loadFeed(token, 'category=pug')}
      />
    </BottomNavigation>
  );
};

export default Menu;
