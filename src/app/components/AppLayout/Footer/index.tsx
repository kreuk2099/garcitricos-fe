import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
} from '@material-ui/core';

import { menuItems } from 'app/components/AppLayout/MenuItems';

import './style.scss';

export const Footer = () => {
  const history = useHistory();
  return (
    <Box bgcolor="primary.main" className="applayout__footer">
      <BottomNavigation showLabels>
        {menuItems.map((item, index) => (
          <BottomNavigationAction
            key={index}
            onClick={() => item.handleClick(history)}
            icon={item.icon}
            label={item.tooltip}
          />
        ))}
      </BottomNavigation>

      {/* <Typography variant="body2" color="textSecondary" align="center">
        // {`Garcitricos - Copyright © ${new Date().getFullYear()}`}
      </Typography>  */}
    </Box>
  );
};
