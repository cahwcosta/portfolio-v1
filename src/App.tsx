import React from 'react';
import { ThemeProvider } from 'styled-components';
import GSAPPlugins from './components/GSAPPlugins';
import Home from './pages/home';
import { GlobalStyle } from './styles/global';
import theme from './styles/theme';

const App = () => {
  return (
    <>
      <GSAPPlugins/>
      <ThemeProvider theme={theme}>
        <Home/>
        <GlobalStyle/>
      </ThemeProvider>
    </>
  );
}

export default App;
