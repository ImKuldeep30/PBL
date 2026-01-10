import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Greating = () => {
  return (
    <View style={styles.container}>
      
      {/* Heading */}
      <Text style={styles.title}>Hello Kuldeep</Text>

      {/* Profile Image */}
      <View style={styles.imageWrapper}>
        <Image
          source={require('../assets/otp.jpg')} // replace with your image
          style={styles.image}
        />
      </View>

      {/* Sub text */}
      <Text style={styles.subtitle}>Good to see you back ..</Text>

      {/* Button */}
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Home</Text>
      </Pressable>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 80,
  },

  title: {
    fontSize: 36,
    fontWeight: '700',
    color: '#000',
    marginBottom: 30,
    textAlign: 'center',
  },

  imageWrapper: {
    width: 260,
    height: 260,
    borderRadius: 130,
    backgroundColor: 'black', 
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },

  image: {
    width: 240,
    height: 240,
    borderRadius: 120,
    resizeMode: 'cover',
  },

  subtitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
    marginBottom: 40,
    textAlign: 'center',
  },

  button: {
    backgroundColor: '#2c2c2c',
    paddingVertical: 14,
    paddingHorizontal: 50,
    borderRadius: 14,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
})


export default Greating
