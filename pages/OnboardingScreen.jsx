import React from 'react';
import { StyleSheet, Text, View, Dimensions, Touchable, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';
import { setItem } from '../utils/asyncStorage';
import { getItem } from './utils/asyncStorage';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

export default OnboardingScreen = () => {

  return (
    <SafeAreaView style={styles.container}>
      <Onboarding
        containerStyles={{ paddingHorizontal: 15 }}
        bottomBarHighlight={false}
        
        pages={[
        
           {
            backgroundColor: '#fff',
            
            image: (
              <View style={styles.lottieContainer}>
                <View>
                    <>
                    <Text style={{fontSize:60, marginTop:-20, color:'#333', fontWeight:'600' , alignContent:'center' , alignSelf:'center'}}>Welcome</Text>
                    </>
                </View>
                <LottieView
                  source={require('../assets/Welcome.json')}
                  autoPlay
                  loop
                  style={styles.lottie}
                  
                />
                <View>
                    <>
                    
                    <Text style={{fontSize:16, marginTop:10, color:'#666', fontWeight:'400', textAlign:'center', paddingHorizontal:20 , alignSelf:'center'}}></Text>
                    </>
                </View>
              </View>
            ),
            
            
          },
          {
            backgroundColor: '#fff',
            
            image: (
              <View style={styles.lottieContainer}>
                <LottieView
                  source={require('../assets/AppDev.json')}
                  autoPlay
                  loop
                  style={styles.lottie}
                />
                <View>
                    <>
                    <Text style={{fontSize:28, marginTop:-20, color:'#333', fontWeight:'600' , alignContent:'center' , alignSelf:'center'}}>Digital Campus</Text>
                    <Text style={{fontSize:16, marginTop:10, color:'#666', fontWeight:'400', textAlign:'center', paddingHorizontal:20 , alignSelf:'center'}}>Explore digital campus experiences.</Text>
                    </>
                </View>
                
              </View>
            ),
            
            
          },
          
          {
            backgroundColor: '#fff',
            image: (
              <View style={styles.lottieContainer}>
                <LottieView
                  source={require('../assets/Man on computer.json')}
                  autoPlay
                  loop
                  style={styles.lottie}
                />
                <View>
                    <>
                    <Text style={{fontSize:28, marginTop:-20, color:'#333', fontWeight:'600' , alignContent:'center' , alignSelf:'center'}}>Online Desk</Text>
                    <Text style={{fontSize:16, marginTop:10, color:'#666', fontWeight:'400', textAlign:'center', paddingHorizontal:20 , alignSelf:'center'}}>One stop solution for all your college needs .</Text>
                    </>
                </View>
              </View>
            ),
    
          },
          {
            backgroundColor: '#fff',
            image: (
              <View style={styles.lottieContainer}>
                <LottieView
                  source={require('../assets/Phone.json')}
                  autoPlay
                  loop
                  style={styles.lottie}
                />
                <View>
                    <>
                    <Text style={{fontSize:28, marginTop:-20, color:'#333', fontWeight:'600' , alignContent:'center' , alignSelf:'center'}}>Community</Text>
                    <Text style={{fontSize:16, marginTop:10, color:'#666', fontWeight:'400', textAlign:'center', paddingHorizontal:20 , alignSelf:'center'}}>Connect with peers , join groups , create connections and stay updated with campus events.</Text>
                    </>
                </View>

                
              </View>
            ),
          },
        ]}
      />
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  lottieContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'upper',
  },
  lottie: {
    width: width*0.9,
    justifyContent: 'center',
    height: width*0.9,
  },
});
