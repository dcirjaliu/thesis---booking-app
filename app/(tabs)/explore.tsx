import { StyleSheet, ScrollView, Text, View } from "react-native";
import ServiceCard from "@/components/service-card/service-card";

export default function TabTwoScreen() {
  return (
    <>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.topContainer}>
          <View style={styles.textWrapper}>
            <Text style={styles.textStyle}>Servicii Studenți</Text>
          </View>
        </View>
        <View style={styles.whiteSheet}>
          <ServiceCard />
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  topContainer: {
    backgroundColor: "#634DBF",
    height: 180,
    width: "100%",
  },
  contentContainer: {
    alignItems: "center",
    gap: 20,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    width: "100%",
  },
  whiteSheet: {
    backgroundColor: "white",
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35,
    marginTop: -45,
    minHeight: 600,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
    padding: 30,
  },
  textWrapper: {
    height: 200,
    width: 400,
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    fontSize: 30,
    fontWeight: "600",
    color: "white",
    letterSpacing: 2,
    textAlign: "center",
  },
});
