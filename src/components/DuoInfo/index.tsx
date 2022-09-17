import React from "react";
import { ColorValue, Text, View } from "react-native";
import { THEME } from "../../theme";

import { styles } from "./styles";

interface IDuoInfoProps {
  label: string;
  value: string;
  colorValue?: ColorValue;
}

export default function DuoInfo({
  label,
  value,
  colorValue = THEME.COLORS.TEXT,
}: IDuoInfoProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text numberOfLines={1} style={[styles.value, { color: colorValue }]}>
        {value}
      </Text>
    </View>
  );
}
