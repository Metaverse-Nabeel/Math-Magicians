import operate from '../logic/operate';

describe('Addition', () => {
  test('calcFunction: 7 + 3. Result expected = 10', () => {
    const calcFunction = operate(7, 3, '+');
    expect(calcFunction).toBe('10');
  });
});

describe('Multiplication', () => {
  test('calcFunction: 100 x 0.2 . Result expected = 20', () => {
    const calcFunction = operate(100, 0.2, 'x');
    expect(calcFunction).toBe('20');
  });
});

describe('Substraction', () => {
  test('calcFunction: 9 - 7. Result expected = -3', () => {
    const calcFunction = operate(9, 7, '-');
    expect(calcFunction).toBe('2');
  });
});

describe('Division', () => {
  test('calcFunction: 9 ÷ 3 . Result expected = 3', () => {
    const calcFunction = operate(9, 3, '÷');
    expect(calcFunction).toBe('3');
  });
});

describe('Modulos', () => {
  test('calcFunction: 8 % 2 . Result expected = 0', () => {
    const calcFunction = operate(8, 2, '%');
    expect(calcFunction).toBe('0');
  });
});
