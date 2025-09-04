import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const age = 20;
  const licenseyears = 5;
  let feedback = '';

  if (age >= 18) 
            if (licenseyears >= 3) 
            {
                feedback = 'You are a qualified, safe driver.';
            } else
  {
      feedback = 'You are allowed to drive. YAY!'
    } else 
                {
                  feedback = 'You are not allowed drive yet.'
                }
  
  
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.content}>
     {/* Add a custom and other text component specific styles to the Heading */ }
     <Text style={[styles.response, {fontSize:48, color:'yellow', marginBottom:35, textAlign:'center'}]}>
      Driving License Checker
      </Text>

      {/* Our Image */ }
      <Image
        source={{uri:'https://images.pexels.com/photos/620335/pexels-photo-620335.jpeg',}} 
        style = {styles.image}/>

         {/* Response and User values displayed */ }
        <Text style={styles.response}>Age: {age}</Text>
        <Text style={styles.response}>License Years: {licenseyears}</Text>
     <Text style={[styles.response,
      {fontSize:48,
      color:'#14e036ff',
      marginBottom:35,
      textAlign:'center'} ]}>
      {feedback} {/* This is my message to be displayed to the user */ }
      </Text>
     
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8d24aaff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  content: {
    width:'100%',
    alignItems:'center'
  },

    response: {
      fontSize: 28,
      color: 'white',
      fontWeight: 'bold',
      marginTop:5
    },

    image:{
      width: '100%', 
      height: '50%',
      resizeMode:'cover',
      top:0,
      
    }

});
