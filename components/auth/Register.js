import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const SignUp = () => {}

  return (
    <View>
      <TextInput placeholder="name" onChangeText={(name) => setName(name)} />
      <TextInput placeholder="email" onChangeText={(email) => setName(email)} />
      <TextInput
        placeholder="password"
        onChangeText={(password) => setName(password)}
      />
      <Button title="Register" onPress={() => SignUp()} />
    </View>
  );
};

export default Register;
