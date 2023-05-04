import operate from '../logic/operate';

describe('Addition', () => {
  test('calcFunc: 7 + 3. Result expected = 10', () => {
    const calcFunc = operate(7, 3, '+');
    expect(calcFunc).toBe('10');
  });
});

describe('Multiplication', () => {
  test('calcFunc: 100 x 0.2 . Result expected = 20', () => {
    const calcFunc = operate(100, 0.2, 'x');
    expect(calcFunc).toBe('20');
  });
});

describe('Substraction', () => {
  test('calcFunc: 9 - 7. Result expected = -3', () => {
    const calcFunc = operate(9, 7, '-');
    expect(calcFunc).toBe('2');
  });
});

describe('Division', () => {
  test('calcFunc: 9 ÷ 3 . Result expected = 3', () => {
    const calcFunc = operate(9, 3, '÷');
    expect(calcFunc).toBe('3');
  });
});

describe('Modulos', () => {
  test('calcFunc: 8 % 2 . Result expected = 0', () => {
    const calcFunc = operate(8, 2, '%');
    expect(calcFunc).toBe('0');
  });
});
