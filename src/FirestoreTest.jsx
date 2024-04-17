// YourComponent.jsx
import { useEffect, useState } from 'react'

// NOTE: Use one of the following imports to test the different Firestore versions
// 1
import fetchDocs from './01_compat'

// 2
// import fetchDocs from './02_modular'

// 3
// import fetchDocs from './03_lite'

function FireStoreTest() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const asyncWrapper = async () => {
      try {
        let docs = await fetchDocs()
        docs.forEach((doc) => {
          console.log(doc.id, '=>', doc.data())
        })
        setCount(docs.length)
      } catch (error) {
        console.error('Error getting documents', error)
      }
    }
    asyncWrapper()
  }, [])

  return (
    <div>
      <h1>Firestore Test</h1>
      <h3>Count: {count}</h3>
    </div>
  )
}

export default FireStoreTest
