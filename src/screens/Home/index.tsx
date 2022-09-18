import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { FlatList, Image, SafeAreaView, View } from "react-native";

import LogoImage from "../../assets/logo-nlw-esports.png";
import { Background, Heading } from "../../components";
import { GameCard } from "../../components";
import { IGame } from "../../interfaces/game";

import { styles } from "./styles";

export default function Home() {
  const navigation = useNavigation();
  const [games, setGames] = useState<IGame[]>([]);

  const handleOpenDetailsGame = (item: IGame) =>
    navigation.navigate("Game", item);

  const fetchGames = () => {
    (async () => {
      const response = await fetch(`http://localhost:3333/games`);
      const games = await response.json();
      setGames(games.data.games);
    })();
  };

  useEffect(fetchGames, []);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image source={LogoImage} style={styles.logo} />
        <Heading
          title="Encontre seu duo!"
          subtitle="Selecione o game que deseja jogar..."
        />
        <FlatList
          horizontal
          data={games}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentList}
          renderItem={({ item }) => (
            <GameCard onPress={() => handleOpenDetailsGame(item)} data={item} />
          )}
        />
      </SafeAreaView>
    </Background>
  );
}
