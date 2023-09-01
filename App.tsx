import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { ContextProvider } from './src/context/AppContext';
import AppNavigator from './src/navigation/AppNavigator';


export default function App() {
  
  return (
    <ContextProvider>
    <NavigationContainer>
        <AppNavigator />
     </NavigationContainer>
 </ContextProvider>
  );
}
