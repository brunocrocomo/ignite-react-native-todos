import React from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';

import { ThemeButton } from './ThemeButton';

import { Theme } from '../utils/enums';

interface HeaderProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export function Header({ theme, setTheme }: HeaderProps) {
  const themedStyles = theme === Theme.light ? lightStyles : darkStyles;

  return (
    <View style={themedStyles.header}>
      <Text style={themedStyles.headerText}>to.</Text>
      <Text
        style={[themedStyles.headerText, { fontFamily: 'Poppins-SemiBold' }]}
      >
        do
      </Text>
      <ThemeButton
        theme={theme}
        setTheme={setTheme}
        style={themedStyles.themeButton}
      />
    </View>
  );
}

const lightStyles = StyleSheet.create({
  container: {
    backgroundColor: '#273FAD',
  },
  header: {
    marginBottom: 44,
    backgroundColor: '#273FAD',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerText: {
    fontSize: 24,
    color: '#FFF',
    fontFamily: 'Poppins-Regular',
  },
  themeButton: { position: 'absolute', right: 8 },
});

const darkStyles = StyleSheet.create({
  container: {
    backgroundColor: '#3E3E3E',
  },
  header: {
    marginBottom: 44,
    backgroundColor: '#3E3E3E',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerText: {
    fontSize: 24,
    color: '#E1E1E6',
    fontFamily: 'Poppins-Regular',
  },
  themeButton: { position: 'absolute', right: 8 },
});
