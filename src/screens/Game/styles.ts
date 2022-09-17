import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 32,
    marginTop: 28,
    justifyContent: "space-between",
  },
  logo: {
    width: 72,
    height: 40,
  },
  elementRight: {
    width: 20,
    height: 20,
  },
  bannerGame: {
    width: 311,
    height: 160,
    borderRadius: 8,
    marginTop: 22,
  },
  containerList: {
    width: "100%",
  },
  contentList: {
    paddingLeft: 32,
    paddingRight: 64,
    alignItems: "flex-start",
  },
  empytListContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
