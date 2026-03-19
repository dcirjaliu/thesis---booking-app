import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
    height: 60,
    marginTop: 30,
    borderRadius: 15,

    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.4,
    shadowRadius: 15,
    elevation: 8,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  gradient: {
    flex: 1,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.2)",
    overflow: "hidden",
  },
  text: {
    color: "#634DBF",
    fontSize: 18,
    fontWeight: "800",
    letterSpacing: 1.5,
    textTransform: "uppercase",
  },
  shimmer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "40%",
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
});

export default styles;
