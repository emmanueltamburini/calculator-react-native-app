import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../theme/appTheme';
import {ButtonCalc} from '../components/ButtonCalc';
import {useCalculator} from '../hooks/useCalculator';

export const CalculatorScreen = () => {
  const {
    addNumber,
    changeSign,
    cleanOperation,
    deleteNumber,
    doOperation,
    getResult,
    operation,
    previousOperation,
  } = useCalculator();

  return (
    <View style={styles.calculatorContainer}>
      {previousOperation !== '0' && (
        <Text style={styles.previousResult}>{previousOperation}</Text>
      )}
      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {operation}
      </Text>
      <View style={styles.row}>
        <ButtonCalc color="#9B9B9B" text="C" onPress={cleanOperation} />
        <ButtonCalc color="#9B9B9B" text="+/-" onPress={changeSign} />
        <ButtonCalc color="#9B9B9B" text="del" onPress={deleteNumber} />
        <ButtonCalc color="#FF9427" text="/" onPress={doOperation} />
      </View>
      <View style={styles.row}>
        <ButtonCalc text="7" onPress={addNumber} />
        <ButtonCalc text="8" onPress={addNumber} />
        <ButtonCalc text="9" onPress={addNumber} />
        <ButtonCalc color="#FF9427" text="X" onPress={doOperation} />
      </View>
      <View style={styles.row}>
        <ButtonCalc text="4" onPress={addNumber} />
        <ButtonCalc text="5" onPress={addNumber} />
        <ButtonCalc text="6" onPress={addNumber} />
        <ButtonCalc color="#FF9427" text="-" onPress={doOperation} />
      </View>
      <View style={styles.row}>
        <ButtonCalc text="1" onPress={addNumber} />
        <ButtonCalc text="2" onPress={addNumber} />
        <ButtonCalc text="3" onPress={addNumber} />
        <ButtonCalc color="#FF9427" text="+" onPress={doOperation} />
      </View>
      <View style={styles.row}>
        <ButtonCalc text="0" onPress={addNumber} big />
        <ButtonCalc text="." onPress={addNumber} />
        <ButtonCalc color="#FF9427" text="=" onPress={getResult} />
      </View>
    </View>
  );
};
