const storageSet = values => {
  Object.keys(values)
    .map(v => [v, typeof values[v] === 'string' ? values[v] : JSON.stringify(values[v])])
    .forEach(v => localStorage.setItem(...v));
    return values;
  };


const storageRemove = values => {
  Object.keys(values)
    .forEach(v => localStorage.removeItem(v));
    return values;
  };

const storageGet = values => Object.keys(values)
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

export {
  storageGet,
  storageSet,
  storageRemove
}
