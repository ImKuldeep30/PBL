import { StyleSheet, Text, TextInput, View, Pressable, Image, Keyboard} from 'react-native'
import React from 'react'
import { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Verified = () => {

    const [otp, setOtp] = React.useState('');
    const [keyboardOpen, setKeyboardOpen] = useState(false);

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

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Verify</Text>

      {!keyboardOpen && (
        <View style={styles.imageContainer}>
        <Image
            source={require('../assets/otp.jpg')}
            style={styles.image}
        />
        </View>
      )}

      <Text style={styles.heading}>Enter OTP</Text>

      <Text style={styles.subText}>
        A 4 digit OTP has been sent to your student email (Outlook)
      </Text>

      <TextInput value={otp} onChangeText={setOtp} keyboardType="number-pad" maxLength={4}
        style={styles.otpInput}
        placeholder="----"
        placeholderTextColor="#999"
      />

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Verify</Text>
      </Pressable>

      <Text style={styles.resendText}>Resend OTP (00:12)</Text>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    width: "100%",
    alignItems: "center",
    marginVertical: 20,
  },
  image: {
    width: 250,      
    height: 200,
    resizeMode: "contain", 
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    marginTop: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: "600",
    marginTop: 10,
  },
  subText: {
    textAlign: "center",
    fontSize: 14,
    color: "#666",
    marginVertical: 10,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginVertical: 20,
  },

  otpInput: {
    width: "80%",
    height: 55,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    textAlign: "center",
    fontSize: 24,
    letterSpacing: 20,  
    backgroundColor: "#fafafa",
    color: "#000",
    margin: 20,
  },


  button: {
    backgroundColor: "#000",
    width: "90%",
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
  },

  resendText: {
    marginTop: 15,
    fontSize: 14,
    color: "#777",
  },
});


export default Verified
