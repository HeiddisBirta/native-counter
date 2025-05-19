import { Image } from "expo-image";
import { useContext } from "react";
import { Text, Platform, StyleSheet, Button } from "react-native";
import CounterContext from "@/contexts/counter-context";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen() {
  const { count, increaseCount } = useContext(CounterContext);
  return (
    <>
      <Text style={styles.counter}>{count}</Text>
      <Button
        onPress={increaseCount}
        color="#841584"
        title="Increase the count"
        accessibilityLabel="Increase the count"
      />
      <Image
        source={require("@/assets/images/partial-react-logo.png")}
        style={styles.reactLogo}
      />
    </>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  counter: {
    fontSize: 45,
    textAlign: "center",
    marginTop: 160,
    marginBottom: 30,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
