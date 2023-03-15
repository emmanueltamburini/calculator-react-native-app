import React, {useState, useRef} from 'react';
import {View, Text} from 'react-native';
import {styles} from '../theme/appTheme';
import {ButtonCalc} from '../components/ButtonCalc';

enum Operators {
  ADD,
  SUBTRACT,
  MULTIPLY,
  DIVIDE,
}

export const CalculatorScreen = () => {
  const [operation, setOperation] = useState<string>('0');
  const [previousOperation, setPreviousOperation] = useState<string>('0');

  const operator = useRef<Operators>();

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

  const deleteNumber = () => {
    if (
      operation.length === 1 ||
      (operation.includes('-') && operation.length === 2)
    ) {
      setOperation('0');
    } else {
      setOperation(operation.slice(0, -1));
    }
  };

  const changeSign = () => {
    if (operation.includes('-') || operation === '0') {
      setOperation(operation.replace('-', ''));
    } else {
      setOperation('-' + operation);
    }
  };

  const changeOperation = () => {
    if (operation.endsWith('.')) {
      setPreviousOperation(operation.slice(0, -1));
    } else {
      setPreviousOperation(operation);
    }

    setOperation('0');
  };

  const doOperation = (currentStringOperator: string) => {
    let currentOperator: Operators | undefined;
    switch (currentStringOperator) {
      case '+':
        currentOperator = Operators.ADD;
        break;
      case '-':
        currentOperator = Operators.SUBTRACT;
        break;
      case 'X':
        currentOperator = Operators.MULTIPLY;
        break;
      case '/':
        currentOperator = Operators.DIVIDE;
        break;

      default:
        break;
    }

    operator.current = currentOperator;
    console.log(operator.current);
    changeOperation();
  };

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
        <ButtonCalc color="#FF9427" text="=" onPress={cleanOperation} />
      </View>
    </View>
  );
};
