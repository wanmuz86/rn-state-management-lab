import React from "react";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, StatusBar } from "react-native";
import CounterStateVersion from './src/components/CounterStateVersion'
import CounterReducerVersion from './src/components/CounterReducerVersion'
import {ThemeProvider}  from "./context/ThemeContext";
import {Header} from './src/components/Header';
import {ToggleTheme} from './src/components/ToggleTheme';

const App = () => {
 return (
  <ThemeProvider>
    <SafeAreaProvider>
     <SafeAreaView style={{ flex: 1, backgroundColor: '#eef' }}>

     <StatusBar />
     <ScrollView contentContainerStyle={{ padding: 16 }}>
     {/* Import and Bring out the Component  */}
       {/* <CounterStateVersion />
       <CounterReducerVersion/> */}
       <Header/>
       <ToggleTheme/>
     </ScrollView>
   </SafeAreaView>
   </SafeAreaProvider>
   </ThemeProvider>
 );
};

export default App;
