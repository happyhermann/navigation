import React from "react";
import { View, Text, Button, SafeAreaView } from "react-native";

function HeaderlessScreen({ navigation }) {
  return (
    <SafeAreaView>
      {/* SafeAreaView 추가, 헤더 침범 이슈 해결 */}
      <View>
        <Text>Header가 없네</Text>
        <Text>Header가 없네</Text>
        <Button onPress={() => navigation.pop()} title="뒤로가기" />
      </View>
    </SafeAreaView>
  );
}

export default HeaderlessScreen;
