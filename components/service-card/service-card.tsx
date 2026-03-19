import styles from "./styles";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { serviceDetails } from "@/assets/data/serviceDetails";

export default function ServiceCard() {
  return (
    <>
      {serviceDetails.map((item) => (
        <View key={item.key} style={styles.card}>
          <Image source={item.image} style={styles.img} />

          <View style={styles.textWrapper}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.location}</Text>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnText}>Learn More 🚀</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </>
  );
}
