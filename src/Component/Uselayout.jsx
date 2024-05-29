import React, { useEffect , useLayoutEffect, useState}  from 'react'

function Uselayout() {
const [randomvalue, setrandomvalue] = useState(0)

// useEffect(()=>{
//         if (randomvalue === 0 ) {
//             setrandomvalue(Math.random() * 100)
//         }
    
// },[randomvalue])

useLayoutEffect(()=>{
        if (randomvalue === 0 ) {
            setrandomvalue(Math.random() * 100)
        }
    
},[randomvalue])
  return (
    <>
    <h1>{randomvalue}</h1>
<button
onClick={()=>setrandomvalue(0)}> Random Number Generator </button>

    </>
  )
}

export default Uselayout