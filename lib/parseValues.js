const parseValues = values => 
  Array.isArray(values) ? values :
  typeof values === 'object' ? Object.keys(values) :
  typeof values === 'string' ? [values] :
  [];

export default parseValues;
