import React, { useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

function DetailScreen({ route, navigation }) {
  useEffect(() => {
    navigation.setOptions({
      title: `상세정보 - ${route.params.id}`,
    });
  }, [navigation, route.params.id]);

  return (
    <View style={styles.block}>
      <Text style={styles.text}>id: {route.params.id}</Text>
      <View style={styles.buttons}>
        <Button
          title="다음"
          onPress={() => navigation.push("Detail", { id: route.params.id + 1 })}
        />
        <Button title="뒤로가기" onPress={() => navigation.pop()} />
        {/* 스택 뒤로 */}
        <Button title="처음으로" onPress={() => navigation.popToTop()} />
        {/* 처음으로 한번에 */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 48,
  },
  buttons: {
    flexDirection: "row",
  },
});

export default DetailScreen;
