import { AppBar, Box, InputBase, Toolbar, Typography } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { Autocomplete } from '@react-google-maps/api';
import React, { useState } from 'react';
import useStyles from './Header.style';

export const Header = ({ setCoordinates }) => {
  const classes = useStyles();
  const [autocomplete, setAutoComplete] = useState(null);

  const onLoad = (value) => setAutoComplete(value);

  const onPlaceChange = () => {
    const lat = autocomplete.getPlace().geometry.Location.lat();
    const lng = autocomplete.getPlace().geometry.Location.lng();

    setCoordinates({ lat, lng });
  };

  return (
    <AppBar position='static'>
      <Toolbar className={classes.toolbar}>
        <Typography variant='h5' className={classes.title}>
          Traveller
        </Typography>
        <Box display='flex'>
          <Typography variant='h6'>Explore new places</Typography>
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChange}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <Search />
              </div>
              <InputBase
                placeholder='Search...'
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
          </Autocomplete>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
