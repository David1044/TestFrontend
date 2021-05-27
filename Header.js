import React, { useState, useEffect} from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';

const App = () => {
  const [currentDate, setcurrentDate] = useState('')

  useEffect(() => {
      var date = new Date().getDate()
      var month = new Date().getMonth() + 1
      var year = new Date().getFullYear()
      var hours = new Date().getHours()
      var min = new Date().getMinutes()
      var sec = new Date().getSeconds()
      setcurrentDate(
          date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec)

    
  }, [])

  return (
      <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.container}>
            <Text style={styles.textStyle}>
            Home Screen
            </Text>
          <Text style={styles.textStyle}>

          </Text>
          </View>
      </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems : 'center',
    padding: 10,
    backgroundColor: '#2D2C3C'
  },
  textStyle: {
    textAlign : 'center',
    textDecorationColor : '#65D9E4',


      }
})

export default App