import { View } from "react-native";
import { Stack } from "expo-router";
import styles from "./styles";
import { useRef } from "react";
import LottieView from "lottie-react-native";
import AuthForm from "../../components/auth-form/auth-form";

export default function Login() {
  const animation = useRef(null);
  return (
    <View style={styles.background}>
      <Stack.Screen options={{ headerShown: false }} />
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
          source={require("../../assets/animations/Login.json")}
        />
      </View>
      <AuthForm />
    </View>
  );
}
