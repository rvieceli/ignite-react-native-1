import React from "react";
import {
  View,
  Text,
  Modal,
  ModalProps,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { colors, Theme } from "../styles/colors";

interface SelectThemeModalProps extends ModalProps {
  onPress: (theme: Theme) => void;
}

function SelectThemeModal({ onPress, ...props }: SelectThemeModalProps) {
  return (
    <Modal presentationStyle="pageSheet" animationType="slide" {...props}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={[styles.title, styles.bold]}>Select a Theme</Text>
        </View>
        {Object.values(colors).map((theme, index) => {
          return (
            <TouchableOpacity
              key={String(index)}
              onPress={() => onPress(theme)}
              style={[
                styles.button,
                {
                  backgroundColor: theme.backgroundContrast,
                },
              ]}
            >
              <View
                style={[
                  styles.top,
                  {
                    backgroundColor: theme.background,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.logo,
                    {
                      color: theme.white,
                    },
                  ]}
                >
                  <Text>to.</Text>
                  <Text style={styles.bold}>do</Text>
                </Text>
              </View>
              <View style={{ height: "100%", flex: 0.8 }}>
                <View style={styles.content}>
                  <Text
                    style={[
                      styles.bold,
                      {
                        fontSize: 15,
                        color: theme.textTitle,
                      },
                    ]}
                  >
                    This is a title
                  </Text>
                  <Text
                    style={[
                      styles.regular,
                      {
                        fontSize: 12,
                        color: theme.text,
                      },
                    ]}
                  >
                    This is regular a text
                  </Text>
                  <Text
                    style={[
                      styles.regular,
                      {
                        fontSize: 12,
                        color: theme.disabled,
                      },
                    ]}
                  >
                    This is disabled a text
                  </Text>
                </View>
                <View
                  style={[
                    styles.footer,
                    {
                      backgroundColor: theme.backgroundDisabled,
                    },
                  ]}
                >
                  <View
                    style={[
                      styles.circle,
                      {
                        borderColor: theme.backgroundDone,
                      },
                    ]}
                  />
                  <View
                    style={[
                      styles.ball,
                      {
                        backgroundColor: theme.backgroundDone,
                      },
                    ]}
                  />
                  <View
                    style={[
                      styles.square,
                      {
                        backgroundColor: theme.button,
                      },
                    ]}
                  />
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1F1F1F",
    paddingTop: 30,
    paddingBottom: 50,
    paddingHorizontal: 30,
  },
  header: {
    flex: 0.5,
    alignItems: "center",
  },
  title: { fontSize: 24, color: "#fff" },
  button: {
    flex: 1,
    flexDirection: "row",
    marginTop: 10,
  },
  top: {
    height: "100%",
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    fontSize: 16,
    fontFamily: "Poppins-Regular",
    transform: [{ rotate: "-90deg" }],
  },
  bold: { fontFamily: "Poppins-SemiBold" },
  regular: { fontFamily: "Poppins-Regular" },
  content: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 10,
  },
  footer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  circle: {
    height: 14,
    width: 14,
    borderRadius: 8,
    borderWidth: 1,
  },
  ball: {
    height: 14,
    width: 14,
    borderRadius: 8,
  },
  square: {
    height: 18,
    width: 18,
    borderRadius: 2,
  },
});

export { SelectThemeModal };
