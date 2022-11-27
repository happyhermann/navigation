import React, { useEffect } from "react";

import { View, Button } from "react-native";

function HomeScreen({ navigation }) {
  useEffect(() => {
    navigation.setOptions({ title: "홈" });
  }, [navigation]);

  // 헤더 커스터마이징하는 두번 째 방법

  return (
    <View>
      <Button
        title="Detail 열기1"
        onPress={() => navigation.push("Detail", { id: 1 })}
      />
      <Button
        title="Detail 열기2"
        onPress={() => navigation.push("Detail", { id: 2 })}
      />
    </View>
  );
}

export default HomeScreen;
