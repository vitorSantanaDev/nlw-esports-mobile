import React from "react";
import { Text, View } from "react-native";
import { SmileySad } from "phosphor-react-native";

import { styles } from "./styles";
import { THEME } from "../../theme";

export default function NoAdsPlaceholder() {
  return (
    <View style={styles.container}>
      <SmileySad size={64} color={THEME.COLORS.SUCCESS} />
      <Text style={styles.textComponent}>Não há anúncios publicados</Text>
    </View>
  );
}
