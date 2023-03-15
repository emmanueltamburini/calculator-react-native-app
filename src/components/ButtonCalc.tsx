import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

interface Props {
  text: string;
  onPress: (number: string) => void;
  color?: string;
  big?: boolean;
}

export const ButtonCalc = ({
  text,
  onPress,
  color = '#2D2D2D',
  big = false,
}: Props) => {
  const textColor = color === '#9B9B9B' ? 'black' : 'white';
  const widthButton = big ? 180 : 80;

  return (
    <TouchableOpacity activeOpacity={0.75} onPress={() => onPress(text)}>
      <View
        style={{
          ...styles.button,
          backgroundColor: color,
          width: widthButton,
        }}>
        <Text
          style={{
            ...styles.buttonText,
            color: textColor,
          }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 80,
    width: 80,
    borderRadius: 100,
    justifyContent: 'center',
    backgroundColor: '#2D2D2D',
    marginHorizontal: 10,
  },
  buttonText: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    color: 'white',
    fontWeight: '300',
  },
});
