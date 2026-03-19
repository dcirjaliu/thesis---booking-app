import { TouchableOpacity, Text, View } from "react-native";
import styles from "./styles";

export default function AuthForm() {
  return (
    <View style={styles.container}>
      <Text style={styles.heroText}>Hello! </Text>
      <Text style={styles.subHeading}>
        Ești gata? Înregistrează-te cu mail-ul de facultate sau loghează-te dacă
        ai deja cont.
      </Text>
      <TouchableOpacity activeOpacity={0.8} style={styles.btn}>
        <Text style={styles.textBtn}> Logheaza-te</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.8} style={styles.btn}>
        <Text style={styles.textBtn}> Creeaza-ti cont</Text>
      </TouchableOpacity>
    </View>
  );
}
