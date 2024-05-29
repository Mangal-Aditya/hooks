import React, { useEffect, useReducer } from "react";
import { useState } from "react";
function AllHooks() {
  // const [count, setcount] = useState(10)
  // const [windowheight, setwindowheight] = useState(window.screen.height)

  // const currentWindowSize=()=>{
  //   setwindowheight(()=>window.innerHeight)
  // }
  // useEffect(()=>{
  //   document.title = count
  // }, [] )

  // useEffect(()=>{
  //   window.addEventListener('resize',currentWindowSize)
  //   window.removeEventListener('resize',currentWindowSize)
  // })
  // const [windowwidth, setwindowwidth] = useState(window.screen.width)

  // const currentWindowSizeInwidth=()=>{
  //   setwindowwidth(()=>window.innerWidth)
  // }
  // useEffect(()=>{
  //   document.title = count
  // }, [] )

  // useEffect(()=>{
  //   window.addEventListener('resize',currentWindowSizeInwidth)
  // })
  const first=(state ,action)=>{
if (action.type==="inc") {
  return(state = state+1 )
}
if (action.type === "dec") {
  
  return(state = state-1 )
}
return state
}
let second = 0 
  const [count, dispatch] = useReducer(first, second);

  

  return (
    <>
      {/* <button onClick={()=>{setcount(count-1)}} >Decrease</button>
   <h1>{count}</h1>
  <button onClick={()=>{setcount(count+1)}}>Increase</button> */}

      {/* <h1>My window's height is {windowheight}</h1>
   <h1>My window's width is {windowwidth}</h1> */}

      <button onClick={()=>dispatch({ type: "dec" })}>Decrease</button>
      <h1>{count}</h1>
      <button onClick={ ()=> dispatch({ type: "inc" })}>Increase</button>
    </>
  );
}

export default AllHooks;
