// src/components/Sidebar.js
import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import { Home, TableChart, BarChart, CalendarToday, ViewKanban, ChevronLeft } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: theme.spacing(7) + 1,
  [theme.breakpoints.up('sm')]: {
    width: theme.spacing(9) + 1,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const Sidebar = ({ open, toggleDrawer }) => {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
          ...openedMixin,
          '& .MuiDrawer-paper': openedMixin,
        }),
        ...(!open && {
          ...closedMixin,
          '& .MuiDrawer-paper': closedMixin,
        }),
      }}
      variant="permanent"
      open={open}
    >
      <DrawerHeader>
        <IconButton onClick={toggleDrawer}>
          <ChevronLeft />
        </IconButton>
      </DrawerHeader>
      <List>
        <ListItem button component={Link} to="/">
          <ListItemIcon><Home /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/tables">
          <ListItemIcon><TableChart /></ListItemIcon>
          <ListItemText primary="Tables" />
        </ListItem>
        <ListItem button component={Link} to="/charts">
          <ListItemIcon><BarChart /></ListItemIcon>
          <ListItemText primary="Charts" />
        </ListItem>
        <ListItem button component={Link} to="/calendar">
          <ListItemIcon><CalendarToday /></ListItemIcon>
          <ListItemText primary="Calendar" />
        </ListItem>
        <ListItem button component={Link} to="/kanban">
          <ListItemIcon><ViewKanban /></ListItemIcon>
          <ListItemText primary="Kanban" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
