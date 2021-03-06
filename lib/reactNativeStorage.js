import parseValues from './parseValues';

let AsyncStorage = null;

try {
  if (__webpack_modules__[require.resolveWeak('react-native')]) {
    AsyncStorage = require('react-native').AsyncStorage;
  }
}
catch(err) {
  console.log('Module react native does not exist, ignoring');
}

const storageSet = (values, defaultValue = null) => {
  const parsedValues = parseValues(values);
  return AsyncStorage.multiSet(
    parsedValues.map(v => [
      v, 
      typeof values[v] !== 'undefined' ? 
        typeof values[v] === 'string' ? values[v] : JSON.stringify(values[v]) : 
        defaultValue
    ])).then(() => parsedValues.reduce((p, v) => ({
      ...p,
      [v]: values[v] || defaultValue
    }), {}));
}

const storageRemove = values => {
  const parsedValues = parseValues(values);
  return AsyncStorage.multiRemove(parsedValues)
    .then(() => parsedValues.reduce((p, v) => ({
      ...p,
      [v]: null
    }), {}));
  }

const storageGet = values => AsyncStorage
  .multiGet(parseValues(values))
  .then(v => v.reduce(
    (p, [key, rawValue]) => {
      let value = rawValue;
      try {
        value = JSON.parse(rawValue);
      } 
      catch(e) {}

      return {
        ...p,
        [key]: value
      }
    }, {}));

export {
  storageGet,
  storageSet,
  storageRemove
}
