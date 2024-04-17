# FirestoreTest

This is a test project used to reproduce a Firestore problem with `experimentalAutoDetectLongPolling`.

___

There's 3 ways of using Firestore written in this project:

1. Use `namespaced/compat` api:

- File `01_compat.js`
- Enable this import line in `ForestoreTest.jsx`:
```js
    import fetchDocs from './01_compat'
```
    
2. Use normal `modular` api:

- File `02_modular.js`
- Enable this import line in `ForestoreTest.jsx`:
```js
    import fetchDocs from './02_modular'
```

3. Use `lite` modular api:

- File `03_lite.js`
- Enable this import line in `ForestoreTest.jsx`:
```js
    import fetchDocs from './02_lite'
```

---

It's supposed that all Firestore requests work without any problem, though `experimentalAutoDetectLongPolling` is activated explicitly or implicitly default by SDK. But it's not. The actuality runs as below:

1. With `compat` api, we need this line for Firestore to work:
```js
    firebase.firestore().settings({ experimentalAutoDetectLongPolling: true })
```

2. With `modular` api, **none** of these 2 firestore initializations work:
```js
    // 1
    const firestore = getFirestore(app)

    // 2
    const firestore = initializeFirestore(app, {
    experimentalAutoDetectLongPolling: true,
    })
```

3. With `lite` api, **both** of these 2 firestore initializations work:
```js
    // 1
    const firestore = getFirestore(app)

    // 2
    const firestore = initializeFirestore(app, {
    experimentalAutoDetectLongPolling: true,
    })
```

It's weird that `lite` api works, normal `modular` api does not work.

And `compat` api work only if we activate `experimentalAutoDetectLongPolling` (`experimentalForceLongPolling`) explicitly.

___

## Get started
- Clone this project
- Run `npm install`
- Determine which Firestore version to use (compat, modular, lite) by toggling the corresponding import in `FirestoreTest.jsx` file
```js
// NOTE: Use one of the following imports to test the different versions
// 1
import fetchDocs from './01_compat'

// 2
import fetchDocs from './02_modular'

// 3
import fetchDocs from './03_lite'
```
- Run `npm run dev`
- Open browser `http://localhost:5173/`