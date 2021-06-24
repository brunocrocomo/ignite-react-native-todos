import React from 'react';
import {
  FlatList,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  FlatListProps,
} from 'react-native';

import { Theme } from '../utils/enums';

interface FlatListHeaderComponentProps {
  theme: Theme;
}

function FlatListHeaderComponent({ theme }: FlatListHeaderComponentProps) {
  const themedStyles = theme === Theme.light ? lightStyles : darkStyles;

  return (
    <View>
      <Text style={themedStyles.header}>Minhas tasks</Text>
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
  const themedStyles = theme === Theme.light ? lightStyles : darkStyles;

  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            testID={`button-${index}`}
            activeOpacity={0.7}
            onPress={() => onPress(item.id)}
            onLongPress={() => onLongPress(item.id)}
            style={
              item.done ? themedStyles.taskButtonDone : themedStyles.taskButton
            }
          >
            <View
              testID={`marker-${index}`}
              style={
                item.done
                  ? themedStyles.taskMarkerDone
                  : themedStyles.taskMarker
              }
            />
            <Text
              style={
                item.done ? themedStyles.taskTextDone : themedStyles.taskText
              }
            >
              {item.title}
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

const lightStyles = StyleSheet.create({
  header: {
    color: '#3D3D4D',
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold',
  },
  taskButton: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  taskMarker: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#3D3D4D',
    marginRight: 10,
  },
  taskText: {
    color: '#3D3D4D',
  },
  taskButtonDone: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    backgroundColor: 'rgba(25, 61, 223, 0.1)',
    flexDirection: 'row',
    alignItems: 'center',
  },
  taskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: '#273FAD',
    marginRight: 10,
  },
  taskTextDone: {
    color: '#A09CB1',
    textDecorationLine: 'line-through',
  },
});

const darkStyles = StyleSheet.create({
  header: {
    color: '#BF4AD4',
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold',
  },
  taskButton: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  taskMarker: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#12A952',
    marginRight: 10,
  },
  taskText: {
    color: '#E1E1E6',
  },
  taskButtonDone: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    backgroundColor: 'rgba(34, 34, 34, 0.6)',
    flexDirection: 'row',
    alignItems: 'center',
  },
  taskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: '#12A952',
    marginRight: 10,
  },
  taskTextDone: {
    color: '#rgba(225, 225, 230, 0.6)',
    textDecorationLine: 'line-through',
  },
});
