![npm](https://img.shields.io/npm/v/object-iter) ![NPM](https://img.shields.io/npm/l/object-iter) [![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/donate?hosted_button_id=ZD8RGXSEHGKAW) ![Twitter Follow](https://img.shields.io/twitter/follow/MhlunguSfundo?style=social)

# Object iterator 

## installation

```
npm i object-iter

```



# Usage
## sync iterator
### ES
```typescript


import ObjectIter from "object-iter"


 let Myobj = {
     group: {icon: "torch.svg", name: "light"}, 
     group1:  {icon: "landscape.svg", name: "land"}
     
     }


let [iterator, keys]  = ObjectIter(Myobj)

     or 

let iterator = ObjectIter(Myobj)[0]
let keys = ObjectIter(Myobj)[1]


/*Objectiter returns 

 iterator - this is a [Symbol.iterator] meaning you can now loop over the object with NB:***for of loop***, 

 keys - an array of strings(keys) in order of iteration
  eg  ["group", "group1"]
 

 */

// looping 


for(let val of iterator) {
    console.log(val)     // now you can what you want with your object
}

```
### CommonJS

```javascript
const ObjectIter = require("object-iter")

 let Myobj = {
     group: {icon: "torch.svg", name: "light"}, 
     group1:  {icon: "landscape.svg", name: "land"}
     
     }

let [iterator, keys]  = ObjectIter.default(Myobj)


  or 

let iterator = ObjectIter.default(Myobj)[0]
let keys = ObjectIter.default(Myobj)[1]



for(let val of iterator) {
    console.log(val)     // now you can what you want with your object
}


```

## async iterator
### ES
```typescript


import {asyncObjectIterator} from "object-iter"


 let Myobj = {
     group: {icon: "torch.svg", name: "light"}, 
     group1:  {icon: "landscape.svg", name: "land"}
     
     }


let [iterator, keys]  = asyncObjectIterator(Myobj)

     or 

let iterator = asyncObjectIterator(Myobj)[0]
let keys = asyncObjectIterator(Myobj)[1]


/*Objectiter returns 

 iterator - this is a [Symbol.iterator] meaning you can now loop over the object with NB:***for of loop***, 

 keys - an array of strings(keys) in order of iteration
  eg  ["group", "group1"]
 

 */

// looping 
NB the ";" before the IIFE is important

;(async function() {
  for await (let val of iterator) {
    console.log(val)
}
})()


```
### CommonJS

```javascript
const ObjectIter = require("object-iter")

 let Myobj = {
     group: {icon: "torch.svg", name: "light"}, 
     group1:  {icon: "landscape.svg", name: "land"}
     
     }

let [iterator, keys]  = ObjectIter.asyncObjectIterator(Myobj)


  or 

let iterator = ObjectIter.asyncObjectIterator(Myobj)[0]
let keys = ObjectIter.asyncObjectIterator(Myobj)[1]



;(async function() {
  for await (let val of iterator) {
    console.log(val)
}
})()


```




## note 


- it should work for all es versions now, i added common js support, so ```require()``` should work fine
- i tested the package on all major frameworks, react, angular, ionic, and ofcourse commonJS
- glimpse of the ts config :
- "target": "es2015",
    "module": "es2020",
    "lib": ["es2018", "dom"]
- "downlevelIteration": true 


## contributions 

be open soon for them, 



## License 
 MIT


## Socials  or ask a question 
 ![Twitter Follow](https://img.shields.io/twitter/follow/MhlunguSfundo?style=social)