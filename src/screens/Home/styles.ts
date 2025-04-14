import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24,
  },
  eventName: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48,
  },
  dateName: {
    color: "#6B6B6B",
    fontSize: 16,
  },
  form: {
    width: "100%",
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 50,
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: "#1F1E25",
    borderRadius: 5,
    color: "#FFF",
    padding: 16,
    fontSize: 16,
    marginRight: 12,
  },
  button: {
    backgroundColor: "#31CF67",
    width: 56,
    height: 56,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 15,
  },
  emptyComponent: {
    alignItems: "center",
    justifyContent: "center",
  },
  listEmptyText: {
    color: "#FFF",
    fontSize: 14,
    textAlign: "center",
  },
  image: {
    marginTop: 150,
    width: 250,
    height: 250,
  },
});
