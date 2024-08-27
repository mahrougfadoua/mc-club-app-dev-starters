// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   //console.log("executed");
//   return (
//     <View style={styles.container}>
//       <Text> Hello World 👋 🌍!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const App = () => {
  const [cash, setCash] = useState('');
  const [result, setResult] = useState(null);

  const calculateTax = () => {
    const tax = parseFloat(cash) * 0.32;
    setResult(tax.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tax Calculator</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter amount of cash"
        keyboardType="numeric"
        value={cash}
        onChangeText={setCash}
      />
      <Button title="Calculate" onPress={calculateTax} />
      {result !== null && (
        <Text style={styles.result}>Tax: {result} </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  result: {
    marginTop: 20,
    fontSize: 20,
  },
});

export default App;

