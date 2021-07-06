import React, { useState, useLayoutEffect } from "react";
import { StyleSheet, View, KeyboardAvoidingView } from "react-native";
import { Input, Button, Text } from "react-native-elements";
import { StatusBar } from "expo-status-bar";
import { auth } from "../firebase";

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const register = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(authUser => {
        authUser.user.updateProfile({
          displayName: name,
          photoURL:
            imageUrl || "https://thumb.ac-illust.com/t/c1/c1607d6f2ba2f9eb5d6f6e5e50bd01e3_t.jpeg"
        });
      })
      .catch(error => alert(error.message));
  };

  // useEffect 와 같음 -> vue 의 mounted
  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: "Back to Login"
    });
  }, [navigation]);

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />
      <Text h3 style={{ marginBottom: 50 }}>
        Create a Signal account
      </Text>

      <View style={styles.inputContainer}>
        <Input
          placeholder="Full Name"
          autoFocus
          type="text"
          value={name}
          onChangeText={text => setName(text)}
        />

        <Input
          placeholder="Email"
          type="email"
          value={email}
          onChangeText={text => setEmail(text)}
        />

        <Input
          placeholder="Password"
          type="password"
          secureTextEntry
          value={password}
          onChangeText={text => setPassword(text)}
        />

        <Input
          placeholder="Profile Picture URL (optional)"
          type="text"
          value={imageUrl}
          onChangeText={text => setImageUrl(text)}
          onSubmitEditing={register}
        />
      </View>

      <Button style={styles.button} raised onPress={register} title="Register" />
      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white"
  },
  inputContainer: {
    width: 300
  },
  button: {
    width: 200,
    marginTop: 10
  }
});
