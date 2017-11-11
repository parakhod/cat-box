# Cat-box

Unique wrapper for web localStorage and React-Native's AsyncStorage

## Installation

__npm install -s cat-box__

## Usage

```
import {
  storageGet,
  storageSet,
  storageRemove
} from 'cat-box';
```
### storageSet(keys, defaultValue)
`keys` should be object with values, also it's possilbe to pass array with keys or just a key name
Promise is returned.

```
storageSet({
  a: 'Some value'
}).then(v => console.log(v)); // {a: 'Some value'}
```
```
storageSet(['c', 'd'], -1).then(v => console.log(v)); // {c: -1, d: -1}
```
```
storageSet('myKey', 100).then(v => console.log(v)); // {myKey: 100}
```
### storageGet(keys)
`keys` can be array of the keys, object with any values (keys will be used) or just a key name
Promise is returned, you should use `.then` to get the values

```
storageGet({
  a: true,
  b: true,
  myKey: true
}).then(v => console.log(v)); // {a: 'Some value', b: null, myKey: 100}
```
```
storageGet(['a','c'])
  .then(v => console.log(v)); // {a: 'Some value', c: -1}
```
```
storageGet('a')
  .then(v => console.log(v)); // {a: 'Some value'}
```
### storageRemove(keys)
`keys` can be array of the keys, object with any values (keys will be used) or just a key name
Promise is returned

```
storageRemove({
  a: true,
  b: true,
  myKey: true
}).then(v => console.log(v)); // {a: null, b: null, myKey: null}
```
```
storageRemove(['c','d'])
  .then(v => console.log(v)); // {a: null, c: null}
```
```
storageRemove('a')
  .then(v => console.log(v)); // {a: null}
```