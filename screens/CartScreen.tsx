import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Button, Platform, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';

export default function CartScreen({route,navigation}: RootStackScreenProps<'Cart'>) {
//   const {name,refNum}= route.params;
  
    return (
    <View style={styles.container}>
        <View>
            <Text style={styles.title}> Time to Flight: 00:24:11</Text>
        </View>
      {/* <Text style={styles.title}>Cart</Text> */}
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
      {/* <EditScreenInfo path="/screens/CartScreen.tsx" /> */}
      
      {/* <Text style={styles.title}> Name:{name}</Text>
      <Text style={styles.title}> Reference No. {refNum}</Text> */}
      <Button title="Go to Shop" onPress={()=>{
          navigation.navigate('Shop');
      }}/>

      {/* Use a light status bar on iOS to account for the black space above the Cart */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
