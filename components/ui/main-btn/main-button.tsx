import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./style";

interface MainButtonProps {
  children: string;
}

export default function MainButton({ children }: MainButtonProps) {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.buttonContainer}>
      <LinearGradient
        colors={["#7b2cbf", "#6231e2"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
      >
        <Text style={styles.text}>{children}</Text>

        <View style={styles.shimmer} />
      </LinearGradient>
    </TouchableOpacity>
  );
}
