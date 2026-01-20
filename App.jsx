import React from "react";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, StatusBar } from "react-native";
import CounterStateVersion from './src/components/CounterStateVersion'
import CounterReducerVersion from './src/components/CounterReducerVersion'
import {ThemeProvider}  from "./context/ThemeContext";
import {Header} from './src/components/Header';
import {ToggleTheme} from './src/components/ToggleTheme';

import { Provider } from "react-redux"
import { store } from "./src/store"
import { MainScreen } from "./src/components/MainScreen"

const App = () => {
 return (
  // <ThemeProvider>
  //   <SafeAreaProvider>
  //    <SafeAreaView style={{ flex: 1, backgroundColor: '#eef' }}>

  //    <StatusBar />

  //    {/* Import and Bring out the Component  */}
  //      {/* <CounterStateVersion />
  //      <CounterReducerVersion/> */}
      
  //      <Header/>
  //      <ToggleTheme/>

  //  </SafeAreaView>
  //  </SafeAreaProvider>
  //  </ThemeProvider>
   <Provider store={store}>
     <SafeAreaProvider>
     <SafeAreaView style={styles.safeArea}>
       <MainScreen />
     </SafeAreaView>
     </SafeAreaProvider>
   </Provider>
 );
};

export default App;
