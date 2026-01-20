import React from "react";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, StatusBar } from "react-native";
import CounterStateVersion from './src/components/CounterStateVersion'

const App = () => {
 return (
    <SafeAreaProvider>
     <SafeAreaView style={{ flex: 1, backgroundColor: '#eef' }}>

     <StatusBar />
     <ScrollView contentContainerStyle={{ padding: 16 }}>
     {/* Import and Bring out the Component  */}
       <CounterStateVersion />
     </ScrollView>
   </SafeAreaView>
   </SafeAreaProvider>
 );
};

export default App;
