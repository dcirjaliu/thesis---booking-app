import { Text, View, StyleSheet, Image } from "react-native";
import LottieView from "lottie-react-native";
import { useRef } from "react";
import { Link } from "expo-router";
import MainButton from "../../components/main-btn/main-button";

export default function HomeScreen() {
  const animation = useRef(null);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/logo.png")}
        style={styles.imgWrapper}
      />
      <Text style={styles.heroTitle}>Rezervă-ți timpul, nu doar locul.</Text>
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

      <Link href="/auth/login" asChild>
        <MainButton children="Rezervă acum" />
      </Link>
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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#634DBF",
  },
  heroTitle: {
    fontSize: 35,
    fontWeight: "600",
    color: "white",
    letterSpacing: 2,
    textAlign: "center",
  },

  row: { flexDirection: "row", marginTop: 15 },
  subheading: {
    fontSize: 16,
    color: "black",
    marginTop: 10,
    fontWeight: "400",
    letterSpacing: 0.5,
  },
  imgWrapper: {
    marginTop: 50,
    width: 300,
    height: 80,
    alignSelf: "center",
    resizeMode: "contain",
  },
});
