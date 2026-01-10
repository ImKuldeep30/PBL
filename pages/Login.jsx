import { StyleSheet, Text, View, Alert, Pressable, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import BottomPill from '../components/BottomPill.jsx'
import { Keyboard } from 'react-native';

const Login = () => {
  const [text, onChangeText] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const [keyboardOpen, setKeyboardOpen] = React.useState(false);

  React.useEffect(() => {
    const showSub = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardOpen(true);
    });

    const hideSub = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardOpen(false);
    });

    return () => {
      showSub.remove();
      hideSub.remove();
    };
  }, []);


  function onSubmit(){
    console.log(text)
    console.log(password)
  }

  return (
    <SafeAreaView style={styles.container}>
      
      <Text style={styles.text}>Login</Text>

      <View style={styles.form}>
        <Text style={styles.label}>Student ID</Text>
        <TextInput 
          keyboardType="number-pad"
          placeholder="Enter Student ID"
          placeholderTextColor="#999"
          style={styles.input}
          value={text}
          onChangeText={onChangeText}
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          placeholder="Enter Password"
          placeholderTextColor="#999"
          style={styles.input}
          value={password}
          onChangeText={onChangePassword}
          secureTextEntry={true}
        />

        <Pressable
          style={styles.button}
          onPress={onSubmit}
        >
          <Text style={{ fontSize: 18, color:"white"}}>Login</Text>
        </Pressable>

      </View>
      {!keyboardOpen && <BottomPill />}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f2", // light background
  },

  text: {
    fontSize: 32,
    fontWeight: "700",
    marginBottom: 30,
  },

  form: {
    width: "90%",
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 16,

    // shadow for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,

    // shadow for Android
    elevation: 6,
  },

  label: {
    fontSize: 16,
    marginBottom: 6,
    color: "#333",
  },

  input: {
    height: 48,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    paddingHorizontal: 12,
    fontSize: 16,
    marginBottom: 16,
    backgroundColor: "#fafafa",
  },

  button: {
    height: 48,
    backgroundColor: "#000",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
});

export default Login