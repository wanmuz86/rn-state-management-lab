import React from "react";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, StatusBar } from "react-native";
import CounterStateVersion from './src/components/CounterStateVersion'
import {CounterReducerVersion} from './src/components/CounterReducerVersion'
const App = () => {
 return (
    <SafeAreaProvider>
     <SafeAreaView style={{ flex: 1, backgroundColor: '#eef' }}>

     <StatusBar />
     <ScrollView contentContainerStyle={{ padding: 16 }}>
     {/* Import and Bring out the Component  */}
       <CounterStateVersion />
       <CounterReducerVersion/>
     </ScrollView>
   </SafeAreaView>
   </SafeAreaProvider>
 );
};

export default App;
