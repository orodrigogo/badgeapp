import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
  },
  badge: {
    width: "100%",
    alignItems: "center",
    position: "relative",
  },
  band: {
    marginBottom: -24,
    zIndex: 1,
  },
  image: {
    width: 160,
    height: 160,
    borderRadius: 32,
  },
  background: {
    width: "100%",
    height: 500,
    backgroundColor: "#161618",
    borderRadius: 18,
    overflow: "hidden",
  },
  company: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  id: {
    color: "#fff",
    fontSize: 14,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 24,
    paddingTop: 54,
  },
  content: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 24,
  },
  email: {
    color: "#CECECE",
    fontSize: 16,
  },
  motiView: {
    marginTop: -32,
  },
})
