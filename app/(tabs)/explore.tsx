import { StyleSheet, ScrollView } from "react-native";
import ServiceCard from "@/components/ui/service-card/service-card";
import LottieView from "lottie-react-native";
import { useRef } from "react";

export default function TabTwoScreen() {
  const animation = useRef(null);
  return (
    <>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <LottieView
          autoPlay
          loop
          ref={animation}
          style={{
            width: 300,
            height: 300,
            backgroundColor: "transparent",
          }}
          source={require("../../assets/animations/AnimationText1.json")}
        />
        <ServiceCard />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  contentContainer: {
    padding: 20,
    alignItems: "center",
    gap: 20,
  },
});
