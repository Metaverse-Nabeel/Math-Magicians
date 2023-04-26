import operate from './operate';

const isNumber = (item) => !/[^0-9]/.test(item);

const calculate = (obj, clickedBtn) => {
  if (clickedBtn === 'AC') {
    return {
      result: 0,
      next: null,
      function: null,
    };
  }
  if (isNumber(clickedBtn)) {
    if (clickedBtn === '0' && obj.next === '0') {
      return {
        result: 0,
        next: null,
        function: null,
      };
    }
    if (obj.function) {
      if (obj.next && obj.next !== '0') {
        return { ...obj, next: obj.next + clickedBtn };
      }
      return { ...obj, next: clickedBtn };
    }
    if (obj.next && obj.next !== '0') {
      return {
        next: obj.next + clickedBtn,
        result: 0,
      };
    }
    return {
      next: clickedBtn,
      result: 0,
    };
  }
  if (clickedBtn === '.') {
    if (obj.next) {
      if (obj.next.includes('.')) {
        return { ...obj };
      }
      return { ...obj, next: `${obj.next}.` };
    }
    if (obj.function) {
      return { ...obj, next: '0.' };
    }
    if (obj.result) {
      if (obj.result.includes('.')) {
        return {};
      }
      return { ...obj, next: `${obj.result}.` };
    }
    return { ...obj, next: '0.' };
  }
  if (clickedBtn === '=') {
    if (obj.next && obj.function) {
      return {
        result: operate(obj.result, obj.next, obj.function),
        next: null,
        function: null,
      };
    }
    return {};
  }
  if (clickedBtn === '+/-') {
    if (obj.next) {
      return { ...obj, next: (-1 * parseFloat(obj.next)).toString() };
    }
    if (obj.result) {
      return { ...obj, result: (-1 * parseFloat(obj.result)).toString() };
    }
    return {};
  }
  if (!obj.next && obj.result && !obj.function) {
    return { ...obj, function: clickedBtn };
  }
  if (obj.function) {
    if (obj.result && !obj.next) {
      return { ...obj, function: clickedBtn };
    }
    if (!obj.result) {
      return { result: 0, function: clickedBtn };
    }
    return {
      result: operate(obj.result, obj.next, obj.function),
      next: null,
      function: clickedBtn,
    };
  }
  if (!obj.next) {
    return { function: clickedBtn };
  }
  return {
    result: obj.next,
    next: null,
    function: clickedBtn,
  };
};

export default calculate;
