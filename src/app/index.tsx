import { useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  const message: string = "Hello";
  
  useEffect(() => {
    if(Math.random() > 0.5) {
    console.log("over 50%");
    }
  });
  

  return (
    <View style={s.container}>
      <Text>{message}</Text>
    </View>
  );
}

const s = StyleSheet.create({
  title: {
    fontSize:32,
    fontWeight:"bold"
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
