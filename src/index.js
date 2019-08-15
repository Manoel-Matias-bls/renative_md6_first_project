import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import './config/ReactotronConfig';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
});

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Hello World! Welcome the MATC Inc</Text>
      <Text>Hello World! Welcome the MATC Inc</Text>
      <Text>Hello World! Welcome the MATC Inc</Text>
    </View>
  );
};

export default App;
