import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";

import { colors } from "../styles/colors";

interface ThemeButtonProps {
  onPress: () => void;
}

function ThemeButton({ onPress }: ThemeButtonProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View
        style={[
          styles.line,
          {
            backgroundColor: colors.darkRosa.textTitle,
          },
        ]}
      >
        <View
          style={[
            styles.box,
            {
              backgroundColor: colors.darkVerde.textTitle,
            },
          ]}
        />
      </View>
      <View
        style={[
          styles.line,
          {
            backgroundColor: colors.darkBlu.textTitle,
          },
        ]}
      >
        <View
          style={[
            styles.box,
            {
              backgroundColor: colors.light.button,
            },
          ]}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 44,
    right: 20,
    height: 24,
    width: 24,
    borderRadius: 20,
    overflow: "hidden",
  },
  line: {
    width: 24,
    height: 12,
  },
  box: {
    width: 12,
    height: 12,
  },
});

export { ThemeButton };
