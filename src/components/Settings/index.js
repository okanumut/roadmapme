import React from 'react';
import styled, { keyframes, ThemeProvider } from 'styled-components'
import PowerButton from '../../subComponents/PowerButton';
import {DarkTheme} from '../Themes';
function Settings() { 
  return (
    <ThemeProvider theme={DarkTheme}>
      <PowerButton />
      Settings
    </ThemeProvider>
  );
}

export default Settings;
