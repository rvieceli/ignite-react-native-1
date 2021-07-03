import React from "react";
import {
  FlatList,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from "react-native";

import { Theme } from "../styles/colors";

interface FlatListHeaderComponentProps {
  theme: Theme;
}

function FlatListHeaderComponent({ theme }: FlatListHeaderComponentProps) {
  return (
    <View>
      <Text style={[styles.header, { color: theme.textTitle }]}>
        Minhas tasks
      </Text>
    </View>
  );
}

interface MyTasksListProps {
  theme: Theme;
  tasks: {
    id: number;
    title: string;
    done: boolean;
  }[];
  onPress: (id: number) => void;
  onLongPress: (id: number) => void;
}

export function MyTasksList({
  theme,
  tasks,
  onLongPress,
  onPress,
}: MyTasksListProps) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item, index }) => {
        const { id, done, title } = item;
        return (
          <TouchableOpacity
            testID={`button-${index}`}
            activeOpacity={0.7}
            onPress={() => onPress(id)}
            onLongPress={() => onLongPress(id)}
            style={[
              styles.taskButton,
              done && styles.taskButtonDone,
              done && { backgroundColor: theme.backgroundDisabled },
            ]}
          >
            <View
              testID={`marker-${index}`}
              style={[
                styles.taskMarker,
                { borderColor: theme.backgroundDone },
                done && styles.taskMarkerDone,
                done && { backgroundColor: theme.backgroundDone },
              ]}
            />
            <Text
              style={[
                { color: theme.text },
                done && styles.taskTextDone,
                done && { color: theme.disabled },
              ]}
            >
              {title}
            </Text>
          </TouchableOpacity>
        );
      }}
      ListHeaderComponent={<FlatListHeaderComponent theme={theme} />}
      ListHeaderComponentStyle={{
        marginBottom: 20,
      }}
      style={{
        marginHorizontal: 24,
        marginTop: 32,
      }}
    />
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontFamily: "Poppins-SemiBold",
  },
  taskButton: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  taskMarker: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,

    marginRight: 10,
  },

  taskButtonDone: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,

    flexDirection: "row",
    alignItems: "center",
  },
  taskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 8,

    marginRight: 10,
  },
  taskTextDone: {
    textDecorationLine: "line-through",
  },
});
