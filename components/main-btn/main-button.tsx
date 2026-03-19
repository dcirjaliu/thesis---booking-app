import { TouchableOpacity, Text, View } from "react-native";
import styles from "./style";

interface MainButtonProps {
  children: string;
  onPress?: () => void;
}

export default function MainButton({ children, onPress }: MainButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.buttonContainer}
      onPress={onPress}
    >
      <Text style={styles.text}>{children}</Text>

      <View style={styles.shimmer} />
    </TouchableOpacity>
  );
}
