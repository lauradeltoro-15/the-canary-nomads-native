import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  Text,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Text>Canary Nomads App</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
