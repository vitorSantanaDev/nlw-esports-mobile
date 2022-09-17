import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    width: 311,
    height: 160,
    borderRadius: 8,
    marginTop: 22,
    padding: 20,
    alignItems: "center",
    backgroundColor: THEME.COLORS.SHAPE,
  },
  textComponent: {
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    marginTop: 12,
  },
});
