import { Text, View, StyleSheet } from "react-native"; // 1. Importă View și StyleSheet din 'react-native'
import LottieView from "lottie-react-native";
import { useRef } from "react";
import MainButton from "../../components/ui/main-btn/main-button";

export default function HomeScreen() {
  const animation = useRef(null);
  return (
    <View style={styles.container}>
      <View style={styles.animationWrapper}>
        <LottieView
          autoPlay
          loop
          ref={animation}
          style={{
            width: 300,
            height: 300,
            backgroundColor: "transparent",
          }}
          source={require("../../assets/animations/Time management.json")}
        />
      </View>
      <Text style={styles.heroTitle}>
        REZERVA-TI <Text style={styles.orangeText}>TIMPUL,</Text> NU DOAR{" "}
        <Text style={styles.orangeText}>LOCUL.</Text>
      </Text>
      <Text style={styles.subheading}>
        Gestionează-ți programul eficient în clădirile UPT.
      </Text>
      <MainButton children="Rezerva acum" />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
  },
  animationWrapper: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: 300,
    marginVertical: 30,
  },

  container: {
    flex: 1,
    padding: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "white",
  },
  heroTitle: {
    fontSize: 40,
    fontWeight: "900",
    color: "rgb(98, 49, 226)",
    letterSpacing: 2,
  },

  orangeText: {
    color: "#FFB84D",
    fontWeight: "900",
  },
  row: { flexDirection: "row", marginTop: 15 },
  line: {
    width: 20,
    height: 3,
    backgroundColor: "#FFB84D",
    marginRight: 5,
  },
  subheading: {
    fontSize: 16,
    color: "black",
    marginTop: 10,
    fontWeight: "400",
    letterSpacing: 0.5,
    textAlign: "left",
  },
});
