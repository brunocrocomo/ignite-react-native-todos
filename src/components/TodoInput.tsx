import React, { useState } from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { Theme } from '../utils/enums';

import checkIcon from '../assets/icons/Check.png';

interface TodoInputProps {
  theme: Theme;
  addTask: (task: string) => void;
}

export function TodoInput({ theme, addTask }: TodoInputProps) {
  const [task, setTask] = useState('');

  const themedStyles = theme === Theme.light ? lightStyles : darkStyles;

  function handleAddNewTask() {
    addTask(task);
    setTask('');
  }

  return (
    <View
      style={[
        themedStyles.inputContainer,
        Platform.OS === 'ios'
          ? themedStyles.inputIOSShadow
          : themedStyles.inputAndroidShadow,
      ]}
    >
      <TextInput
        style={themedStyles.input}
        placeholder="Adicionar novo todo..."
        placeholderTextColor={theme === Theme.light ? '#A09CB1' : '#E1E1E6'}
        returnKeyType="send"
        value={task}
        onChangeText={setTask}
        onSubmitEditing={handleAddNewTask}
      />
      <TouchableOpacity
        testID="add-new-task-button"
        activeOpacity={0.7}
        style={themedStyles.addButton}
        onPress={handleAddNewTask}
      >
        <Image source={checkIcon} />
      </TouchableOpacity>
    </View>
  );
}

const lightStyles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#F5F4F8',
    borderRadius: 5,
    marginTop: -25,
    marginHorizontal: 40,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    color: '#A09CB1',
    backgroundColor: '#F5F4F8',
    paddingLeft: 12,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  inputIOSShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  inputAndroidShadow: {
    elevation: 5,
  },
  addButton: {
    backgroundColor: '#3FAD27',
    height: 50,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
});

const darkStyles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#303030',
    borderRadius: 5,
    marginTop: -25,
    marginHorizontal: 40,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    color: '#E1E1E6',
    backgroundColor: '#303030',
    paddingLeft: 12,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  inputIOSShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  inputAndroidShadow: {
    elevation: 5,
  },
  addButton: {
    backgroundColor: '#181818',
    height: 50,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
});
