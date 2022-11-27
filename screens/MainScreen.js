import React, { useEffect } from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import { View, Text, Button } from "react-native";

const Tab = createMaterialBottomTabNavigator();

function MainScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarIndicatorStyle: {
          backgroundColor: `#009688`,
        },
        tabBarActiveTintColor: `#009688`,
      }}
    >
      {" "}
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "홈",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons
              name="home"
              color={color}
              size={size}
            ></MaterialIcons>
            // 탭바에 MaterialIcons 넣는 방법
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: "검색",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons
              name="search"
              color={color}
              size={size}
            ></MaterialIcons>
            // 탭바에 MaterialIcons 넣는 방법
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          title: "알림",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons
              name="notifications"
              color={color}
              size={size}
            ></MaterialIcons>
            // 탭바에 MaterialIcons 넣는 방법
          ),
        }}
      />
      <Tab.Screen
        name="Message"
        component={MessageScreen}
        options={{
          title: "메시지",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons
              name="message"
              color={color}
              size={size}
            ></MaterialIcons>
            // 탭바에 MaterialIcons 넣는 방법
          ),
        }}
      />
    </Tab.Navigator>
  );
}
