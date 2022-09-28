import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";
import Home from "./app/pages/Home";
import SelectColor from "./app/pages/SelectColor";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SelectColor" component={SelectColor} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
