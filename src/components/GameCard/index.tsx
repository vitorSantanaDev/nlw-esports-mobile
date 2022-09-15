import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  Text,
  TouchableOpacity,
  ImageBackground,
  ImageSourcePropType,
  TouchableOpacityProps,
} from "react-native";
import { THEME } from "../../theme";

import { styles } from "./styles";

export interface IGameData {
  id: string;
  name: string;
  ads: string;
  cover: ImageSourcePropType;
}

interface IGameProps extends TouchableOpacityProps {
  data: IGameData;
}

export default function GameCard({ data, ...rest }: IGameProps) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <ImageBackground source={data.cover} style={styles.cover}>
        <LinearGradient style={styles.footer} colors={THEME.COLORS.FOOTER}>
          <Text style={styles.name}>{data.name}</Text>
          <Text style={styles.name}>{data.ads} anúncios</Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}
