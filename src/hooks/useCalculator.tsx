import {useState, useRef} from 'react';

enum Operators {
  ADD,
  SUBTRACT,
  MULTIPLY,
  DIVIDE,
}

export const useCalculator = () => {
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
      (operation.includes('-') && operation.length === 2) ||
      Number(operation) === Infinity
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
    if (operation.replace('.', '').replace(/0/g, '').length === 0) {
      return;
    }

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

    if (previousOperation !== '0') {
      getResultInPreviousOperation();
    } else {
      changeOperation();
    }
  };

  const getResultInPreviousOperation = () => {
    const number1: number = Number(previousOperation);
    const number2: number = Number(operation);

    if (number1 === 0) {
      return;
    }

    switch (operator.current) {
      case Operators.ADD:
        setPreviousOperation(`${number1 + number2}`);
        break;
      case Operators.SUBTRACT:
        setPreviousOperation(`${number1 - number2}`);
        break;
      case Operators.MULTIPLY:
        setPreviousOperation(`${number1 * number2}`);
        break;
      case Operators.DIVIDE:
        setPreviousOperation(`${number1 / number2}`);
        break;

      default:
        break;
    }

    setOperation('0');
  };

  const getResult = () => {
    const number1: number = Number(previousOperation);
    const number2: number = Number(operation);

    if (number1 === 0) {
      return;
    }

    switch (operator.current) {
      case Operators.ADD:
        setOperation(`${number1 + number2}`);
        break;
      case Operators.SUBTRACT:
        setOperation(`${number1 - number2}`);
        break;
      case Operators.MULTIPLY:
        setOperation(`${number1 * number2}`);
        break;
      case Operators.DIVIDE:
        setOperation(`${number1 / number2}`);
        break;

      default:
        break;
    }

    setPreviousOperation('0');
  };

  return {
    previousOperation,
    operation,
    cleanOperation,
    addNumber,
    deleteNumber,
    changeSign,
    doOperation,
    getResult,
  };
};
