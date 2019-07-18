import React from "react";
import { View } from "react-native";

import LoginScreen from "./src/module/auth/LoginScreen";
import MainApp from "./src/module/navigation/MainNavigator";

const App = () => (
  <View style={{ flex: 1 }}>
    <MainApp />
  </View>
);

export default App;
