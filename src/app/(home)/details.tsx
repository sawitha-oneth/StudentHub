import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function DetailsScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Digital ID Card</Text>
      <Image 
        source={require('../../../assets/images/user.png')} 
        style={styles.image} 
      />
      <Text style={styles.text}>Name:  D.R Savitha Oneth </Text>
      <Text style={styles.text}>Student ID:  PE/2022/051 </Text>
      <Text style={styles.text}>Course: Mobile Application Development</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, alignItems: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 100, marginTop: 40 },
  text: { fontSize: 18, marginBottom: 10 },
  image: { width: 200, height: 200, resizeMode: 'contain', marginBottom: 20 },
});