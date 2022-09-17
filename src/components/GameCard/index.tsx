import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  Text,
  TouchableOpacity,
  ImageBackground,
  TouchableOpacityProps,
} from "react-native";
import { THEME } from "../../theme";

import { styles } from "./styles";
import { IGame } from "../../interfaces/game";

interface IGameProps extends TouchableOpacityProps {
  data: IGame;
}

export default function GameCard({ data, ...rest }: IGameProps) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <ImageBackground
        source={{
          uri: data.bannerUrl,
        }}
        style={styles.cover}
      >
        <LinearGradient style={styles.footer} colors={THEME.COLORS.FOOTER}>
          <Text style={styles.name}>{data.name}</Text>
          <Text style={styles.name}>{data._count.ads} anúncios</Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}
