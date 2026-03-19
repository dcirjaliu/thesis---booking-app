import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  card: {
    width: 252,
    height: 300,
    backgroundColor: "white",
    borderRadius: 30,
    shadowColor: "#0a0a0a",
    shadowOffset: { width: 15, height: 15 },
    shadowOpacity: 1,
    shadowRadius: 30,
    elevation: 10,
    padding: 0,
    marginBottom: 20,
  },
  textWrapper: { padding: 20 },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 13,
    fontWeight: "bold",
    color: "rgb(172, 171, 171)",
  },
  btn: {
    marginTop: 7,
    backgroundColor: "#634DBF",
    padding: 6,
    alignSelf: "flex-start",
    borderRadius: 5,
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 12,
  },
  img: {
    width: "100%",
    height: 180,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});

export default styles;
