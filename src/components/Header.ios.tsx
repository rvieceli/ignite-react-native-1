import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

import { ThemeButton } from "./ThemeButton";

import { Theme } from "../styles/colors";

interface Props {
  onPress: () => void;
  theme: Theme;
}

export function Header({ theme, onPress }: Props) {
  return (
    <SafeAreaView style={{ backgroundColor: theme.background }}>
      <View style={styles.header}>
        <Text style={[styles.headerText, { color: theme.white }]}>
          <Text>to.</Text>
          <Text style={{ fontFamily: "Poppins-SemiBold" }}>do</Text>
        </Text>
      </View>
      <ThemeButton onPress={onPress} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
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
