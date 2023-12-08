import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  ToastAndroid,
} from 'react-native';

export const showToast = (text: string, time: number) =>
  ToastAndroid.show(text, time);

const FormDemo = () => {
  const [formData, setFromData] = useState({
    name: '',
    password: '',
    email: '',
  });
  const [showData, setShowData] = useState(false);
  const showFormData = () => {
    setShowData(prev => !prev);
    showData
      ? showToast('Data Hidden successfully', 1000)
      : showToast('Data Shown successfully', 1000);
  };
  const clearFormData = () => {
    setFromData({name: '', password: '', email: ''});
    showToast('Form Cleared', 1000);
  };
  return (
    <View>
      <View>
        <TextInput
          onChangeText={text => setFromData({...formData, name: text})}
          value={formData.name}
          style={formStyles.input}
          placeholder="Enter your name"
        />
        <TextInput
          textContentType="emailAddress"
          onChangeText={text => setFromData({...formData, email: text})}
          value={formData.email}
          style={formStyles.input}
          placeholder="Enter your email"
        />
        <TextInput
          onChangeText={text => setFromData({...formData, password: text})}
          value={formData.password}
          style={formStyles.input}
          placeholder="Enter your password"
        />
        <Button color="blue" title="View Data" onPress={showFormData} />
        <Button
          accessibilityLabel="Learn more about this purple button"
          color="red"
          title="Clear Data"
          onPress={clearFormData}
        />
      </View>
      <View>
        {showData && (
          <Text>
            {`Name: ${formData?.name} \nEmail: ${formData?.email} \nPassword: ${formData?.password}`}
          </Text>
        )}
      </View>
    </View>
  );
};

const formStyles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});
export default FormDemo;
