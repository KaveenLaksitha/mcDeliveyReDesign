import * as React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import TabNavigation from './components/navigation/TabNavigation';
import { LogBox } from 'react-native';
import { ThemeProvider, Default } from 'styled-components'
import { ToastProvider } from 'react-native-styled-toast'
// to ignore yellow box warnings
LogBox.ignoreAllLogs(true);

const defaultTheme = {
  ...DefaultTheme,
  // dark: false,
  colors: {
    // ...DefaultTheme.colors,
    card: '#FF3131',
    primary: '#FF3131',
    text: 'white',
    background: 'white',
  },
};

const theme = {
  space: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48],
  colors: {
    text: '#0A0A0A',
    background: '#FFF',
    border: '#FFF',
    muted: '#F0F1F3',
    success: '#7DBE31',
    error: '#FF3131',
    info: '#00FFFF'
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ToastProvider maxToasts={1} offset={70} position="TOP">
        <NavigationContainer theme={defaultTheme}>
          <TabNavigation />
        </NavigationContainer>
      </ToastProvider>
    </ThemeProvider>
  );
}

export default App;