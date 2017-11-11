import parseValues from './parseValues';
import Promise from 'bluebird';

const storageSetSync = (values, defaultValue = null) => {
  const parsedValues = parseValues(values);
  parseValues(values)
    .map(v => [
      v, 
      typeof values[v] !== 'undefined' ? 
        typeof values[v] === 'string' ? values[v] : JSON.stringify(values[v]) : 
        defaultValue
    ])
    .forEach(v => localStorage.setItem(...v));

  return parsedValues.reduce((p, v) => ({
    ...p,
    [v]: values[v] || defaultValue
  }), {});
};

const storageGetSync = values => parseValues(values)
  .reduce((p, key) => {
      let value = localStorage.getItem(key);
      try {
        value = JSON.parse(rawValue);
      } 
      catch(e) {}

    return {
      ...p,
      [key]: value
    }
  }, {})

const storageRemoveSync = values => {
  const parsedValues = parseValues(values);
  parsedValues
    .forEach(v => localStorage.removeItem(v));
    
  return parsedValues.reduce((p, v) => ({
    ...p,
    [v]: null
  }), {});
};

const execAsync = (f, ...params) => new Promise((resolve, reject) => {
  try {
    resolve(f(...params));
  } catch(e) {
    reject(e)
  }
}) 

const storageSet = (values, defaultValue) => 
  execAsync(storageSetSync, values, defaultValue);

const storageGet = values => 
  execAsync(storageGetSync, values);

const storageRemove = values => 
  execAsync(storageRemoveSync, values);

export {
  storageGet,
  storageSet,
  storageRemove
}

export default {
  storageGet,
  storageSet,
  storageRemove
}
