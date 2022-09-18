import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";

import {
  Background,
  DuoCard,
  DuoMatch,
  Heading,
  NoAdsPlaceholder,
} from "../../components";

import LogoImage from "../../assets/logo-nlw-esports.png";

import { styles } from "./styles";
import { IGame } from "../../interfaces/game";
import { THEME } from "../../theme";
import { IAd } from "../../interfaces/ad";

export default function Game() {
  const navigation = useNavigation();
  const route = useRoute();
  const game = route.params as IGame;
  const [duos, setDuos] = useState<Array<IAd>>([]);
  const [discordDuoSelected, setDiscordDuoSelected] = useState("");

  const handleGoBackToHome = () => navigation.goBack();

  const fetchAdsOfTheGame = () => {
    (async () => {
      const response = await fetch(
        `http://localhost:3333/games/${game.id}/ads`
      );
      const data = await response.json();
      setDuos(data.data.ads);
    })();
  };

  const getDiscordOfTheAd = (adsId: string) => {
    (async () => {
      const response = await fetch(
        `http://localhost:3333/ads/${adsId}/discord`
      );
      const data = await response.json();
      setDiscordDuoSelected(data.data.discord);
    })();
  };

  useEffect(fetchAdsOfTheGame, []);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBackToHome}>
            <Entypo
              size={20}
              name="chevron-thin-left"
              color={THEME.COLORS.CAPTION_300}
            />
          </TouchableOpacity>
          <Image style={styles.logo} source={LogoImage} />
          <View style={styles.elementRight} />
        </View>
        <Image
          resizeMode="cover"
          style={styles.bannerGame}
          source={{ uri: game.bannerUrl }}
        />
        <Heading title={game.title} subtitle="Conecte-se e comece a jogar!" />
        <FlatList
          data={duos}
          horizontal
          style={styles.containerList}
          contentContainerStyle={
            duos.length > 0 ? styles.contentList : styles.empytListContainer
          }
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <DuoCard
              onConnectHandle={() => getDiscordOfTheAd(item.id)}
              data={item}
            />
          )}
          ListEmptyComponent={<NoAdsPlaceholder />}
        />
        <DuoMatch
          discord={discordDuoSelected}
          animationType="fade"
          handleCloseModal={() => setDiscordDuoSelected("")}
          visible={discordDuoSelected.length > 0}
        />
      </SafeAreaView>
    </Background>
  );
}
