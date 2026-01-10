import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const AccountCreated = () => {
  return (
    <SafeAreaView style={styles.container}>
      
      <Image
        source={require('../assets/accountcreated.jpg')}
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.text}>Your account</Text>
      <Text style={styles.text}>was successfully verified !</Text>

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Done</Text>
      </Pressable>

    </SafeAreaView>
  )
}

export default AccountCreated

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  image: {
    width: 280,  
    height: 280,  
    marginBottom: 20,
  },

  text: {
    fontSize: 24,      
    fontWeight: '600', 
    color: '#000',
    textAlign: 'center',
  },

  button: {
    backgroundColor: '#000',
    paddingVertical: 14,
    paddingHorizontal: 60,
    borderRadius: 8,
    marginTop: 40,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
})
