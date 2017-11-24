const storageFunctions = navigator.product === 'ReactNative' ? 
  require('./reactNativeStorage') : 
  require('./browserStorage');

const {
  storageGet,
  storageSet,
  storageRemove
} = storageFunctions;

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
