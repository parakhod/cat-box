import { AsyncStorage } from 'react-native';

const storageSet = values => AsyncStorage.multiSet(
  Object.keys(values).map(v => [v, typeof values[v] === 'string' ? values[v] : JSON.stringify(values[v])]));

const storageRemove = values => AsyncStorage.multiRemove(Object.keys(values));

const storageGet = values => AsyncStorage
  .multiGet(Object.keys(values))
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