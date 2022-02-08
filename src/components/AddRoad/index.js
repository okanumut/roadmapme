import React from 'react';
import styled, { keyframes, ThemeProvider } from 'styled-components'
import PowerButton from '../../subComponents/PowerButton';
import {DarkTheme} from '../Themes';
function AddRoad() { 
  return (
    <ThemeProvider theme={DarkTheme}>
      <PowerButton />
      AddRoad
    </ThemeProvider>
  );
}

export default AddRoad;
