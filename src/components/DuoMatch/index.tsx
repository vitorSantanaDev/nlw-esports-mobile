import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import {
  Modal,
  ModalProps,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import * as ClipBoard from "expo-clipboard";
import { CheckCircle } from "phosphor-react-native";

import Heading from "../Heading";
import Loading from "../Loading";

import { styles } from "./styles";
import { THEME } from "../../theme";

interface DuoMatchProps extends ModalProps {
  discord: string;
  handleCloseModal(): void;
}

export default function DuoMatch({
  discord,
  handleCloseModal,
  ...rest
}: DuoMatchProps) {
  const [isCopping, setIsCopping] = useState(false);

  const handleCopyDiscordToClipBoard = async () => {
    setIsCopping(true);
    await ClipBoard.setStringAsync(discord);
    setIsCopping(false);
    Alert.alert(`Discord do usuário copiado com sucesso! `);
  };

  return (
    <Modal statusBarTranslucent transparent {...rest}>
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity onPress={handleCloseModal} style={styles.closeIcon}>
            <MaterialIcons
              name="close"
              size={20}
              color={THEME.COLORS.CAPTION_500}
            />
          </TouchableOpacity>
          <CheckCircle size={64} color={THEME.COLORS.SUCCESS} weight="bold" />
          <Heading
            style={styles.heading}
            title="Let's Play!"
            subtitle="Agora é só começar a jogar!"
          />
          <Text style={styles.label}>Adicione seu discord</Text>
          <TouchableOpacity
            disabled={isCopping}
            onPress={handleCopyDiscordToClipBoard}
            style={styles.discordButton}
          >
            {isCopping ? (
              <Loading />
            ) : (
              <Text style={styles.discord}>{discord}</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
