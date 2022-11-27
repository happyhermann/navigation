import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import DetailScreen from "./screens/DetailScreen";
import HeaderlessScreen from "./screens/HeaderlessScreen";

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

            headerStyle: {
              backgroundColor: `#29b6fb`,
            },
            headerTintColor: `#ffffff`,
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 20,
            },
            // 헤더 스타일 커스터마이징
          }}
        />
        {/* Stack.Screen 컴포넌트를 사용해 각 화면 설정 가능 */}
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{
            headerLeft: ({ onPress }) => (
              <TouchableOpacity onPress={onPress}>
                <Text>Left</Text>
              </TouchableOpacity>
            ),
            headerTitle: ({ children }) => (
              <View>
                <Text>{children}</Text>
                {/* children이라는 props를 받아오고 있음, 화면의 타이틀을 가리킴 */}
              </View>
            ),
            headerRight: () => (
              <View>
                <Text>Right</Text>
              </View>
            ),
          }}
        />
        <Stack.Screen
          name="Headerless"
          component={HeaderlessScreen}
          options={{
            headerShown: false,
          }}
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
