import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  Text,
  StyleSheet,
} from 'react-native';

import { Theme } from '../utils/enums';

interface ThemeButtonProps extends TouchableOpacityProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export function ThemeButton({ theme, setTheme, ...rest }: ThemeButtonProps) {
  function handleOnPress() {
    if (theme === Theme.light) {
      setTheme(Theme.dark);
    } else {
      setTheme(Theme.light);
    }
  }

  return (
    <TouchableOpacity onPress={handleOnPress} {...rest}>
      <View>
        <Text style={styles.text}>
          {theme === Theme.light ? 'Dark' : 'Light'}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#FFF',
  },
});
