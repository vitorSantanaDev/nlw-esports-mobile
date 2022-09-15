import React, { ReactNode } from "react";
import { ImageBackground } from "react-native";

import BackgroundImage from "../../assets/background-galaxy.png";

import { styles } from "./styles";

interface IBackgroundProps {
  children: ReactNode;
}

export default function Background({ children }: IBackgroundProps) {
  return (
    <ImageBackground
      defaultSource={BackgroundImage}
      source={BackgroundImage}
      style={styles.container}
    >
      {children}
    </ImageBackground>
  );
}
