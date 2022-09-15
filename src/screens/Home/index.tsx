import React from "react";
import { FlatList, Image, View } from "react-native";

import LogoImage from "../../assets/logo-nlw-esports.png";
import { Heading } from "../../components";
import GameCard from "../../components/GameCard";
import { GAMES } from "../../utils/games";

import { styles } from "./styles";

export default function Home() {
  return (
    <View style={styles.container}>
      <Image source={LogoImage} style={styles.logo} />
      <Heading
        title="Encontre seu duo!"
        subtitle="Selecione o game que deseja jogar..."
      />
      <FlatList
        horizontal
        data={GAMES}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentList}
        renderItem={({ item }) => <GameCard data={item} />}
      />
    </View>
  );
}
