import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Stack from "./src/navigations/Navigation";

export default function App() {
 
  return (
    <Stack/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
