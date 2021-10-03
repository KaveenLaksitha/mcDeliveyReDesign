import * as React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import TabNavigation from './components/navigation/TabNavigation';
import { LogBox } from 'react-native';



// to ignore yellow box warnings
LogBox.ignoreAllLogs(true);

const defaultTheme = {
  ...DefaultTheme,
  // dark: false,
  colors: {
    // ...DefaultTheme.colors,
    card: '#FF3131',
    primary: "#FF3131",
    text: 'white',
    background: 'white',
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