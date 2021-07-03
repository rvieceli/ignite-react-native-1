import React from "react";
import { View, Text, StatusBar, StyleSheet } from "react-native";

import { ThemeButton } from "./ThemeButton";

import { Theme } from "../styles/colors";

interface Props {
  onPress: () => void;
  theme: Theme;
}

export function Header({ theme, onPress }: Props) {
  return (
    <View style={[styles.header, { backgroundColor: theme.background }]}>
      <Text style={[styles.headerText, { color: theme.white }]}>
        <Text>to.</Text>
        <Text style={{ fontFamily: "Poppins-SemiBold" }}>do</Text>
      </Text>

      <ThemeButton onPress={onPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  headerText: {
    fontSize: 24,
    fontFamily: "Poppins-Regular",
  },
});
