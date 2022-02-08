import React from 'react';
import styled, { keyframes, ThemeProvider } from 'styled-components'
import PowerButton from '../../subComponents/PowerButton';
import {DarkTheme} from '../Themes';
function Favorities() { 
  return (
    <ThemeProvider theme={DarkTheme}>
      <PowerButton />
      Favorities
    </ThemeProvider>
  );
}

export default Favorities;
