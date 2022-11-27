import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import DetailScreen from "./screens/DetailScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* Stack Navigator 컴포넌트는 Navigation 사이에 넣어야 작동 */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "홈",
            // 헤더 커스터마이징하는 첫 번째 방법
          }}
        />
        {/* Stack.Screen 컴포넌트를 사용해 각 화면 설정 가능 */}
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={({ route }) => ({
            title: `상세정보 = ${route.params.id}`,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
