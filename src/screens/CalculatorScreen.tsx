import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {styles} from '../theme/appTheme';
import {ButtonCalc} from '../components/ButtonCalc';

export const CalculatorScreen = () => {
  const [operation, setOperation] = useState<string>('0');
  const [previousOperation, setPreviousOperation] = useState<string>('0');

  const cleanOperation = () => {
    setOperation('0');
    setPreviousOperation('0');
  };

  const addNumber = (number: string) => {
    if (operation.includes('.') && number === '.') {
      return;
    }

    if (operation === '0' && number !== '.') {
      setOperation(number);
    } else {
      setOperation(operation + number);
    }
  };

  const changeSign = () => {
    if (operation.includes('-') || operation === '0') {
      setOperation(operation.replace('-', ''));
    } else {
      setOperation('-' + operation);
    }
  };

  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.previousResult}>{previousOperation}</Text>
      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {operation}
      </Text>
      <View style={styles.row}>
        <ButtonCalc color="#9B9B9B" text="C" onPress={cleanOperation} />
        <ButtonCalc color="#9B9B9B" text="+/-" onPress={changeSign} />
        <ButtonCalc color="#9B9B9B" text="del" onPress={cleanOperation} />
        <ButtonCalc color="#FF9427" text="/" onPress={cleanOperation} />
      </View>
      <View style={styles.row}>
        <ButtonCalc text="7" onPress={addNumber} />
        <ButtonCalc text="8" onPress={addNumber} />
        <ButtonCalc text="9" onPress={addNumber} />
        <ButtonCalc color="#FF9427" text="X" onPress={cleanOperation} />
      </View>
      <View style={styles.row}>
        <ButtonCalc text="4" onPress={addNumber} />
        <ButtonCalc text="5" onPress={addNumber} />
        <ButtonCalc text="6" onPress={addNumber} />
        <ButtonCalc color="#FF9427" text="-" onPress={cleanOperation} />
      </View>
      <View style={styles.row}>
        <ButtonCalc text="1" onPress={addNumber} />
        <ButtonCalc text="2" onPress={addNumber} />
        <ButtonCalc text="3" onPress={addNumber} />
        <ButtonCalc color="#FF9427" text="+" onPress={cleanOperation} />
      </View>
      <View style={styles.row}>
        <ButtonCalc text="0" onPress={addNumber} big />
        <ButtonCalc text="." onPress={addNumber} />
        <ButtonCalc color="#FF9427" text="=" onPress={cleanOperation} />
      </View>
    </View>
  );
};
