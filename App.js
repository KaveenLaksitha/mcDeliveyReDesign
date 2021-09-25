import * as React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import TabNavigation from './components/navigation/TabNavigation';


const defaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    card: '#FF3131',
    text: 'white',
    background: 'white'
  },
};

function App() {
  return (
    <NavigationContainer theme={defaultTheme}>

      <TabNavigation />
    </NavigationContainer>
  );
}

export default App;