import { isNumericLiteral } from '@babel/types';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Platform, StyleSheet, TextInput } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';

export default function LoginScreen({ navigation }: RootStackScreenProps<'Login'>) {
    const [refNum,setRefNum]= React.useState('');
    const [name,setName]= React.useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Reference Number</Text>
      <TextInput style={styles.input} keyboardType="numeric" placeholder="Reference Number" onChangeText={setRefNum} onSubmitEditing={()=>{
          if(name!=="")
          {navigation.navigate('Home',{refNum,name});}
      }}/>
      <TextInput style={styles.input} placeholder="Lastname Firstname" onChangeText={setName} onSubmitEditing={()=>{
           if(refNum!=="")
          {
              navigation.navigate('Home',{refNum,name});
        }
      }}/>
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/ModalScreen.tsx" /> */}

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      {/* <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
  input: {
      width:'80%',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
