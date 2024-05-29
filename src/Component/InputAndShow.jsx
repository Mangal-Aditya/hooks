import React from 'react'
import {useState} from 'react'
function InputAndShow() {
  const [first, setfirst] = useState("show the text here")



  const [list, setlist] = useState("")
// let handleonChange =(e)=>{
//   // setfirst(e.target.value)
//   // console.log(e.target.value)
  
// }

// let handleonChange =(e)=>{
//   if(e.keyCode === 13) {
//     setfirst(e.target.value)
//   }

// }
let onkeyup =(event)=>{
  //   // setfirst(event.target.value)
  //   // console.log(event.target.value)


  if(event.keyCode === 13) {
    
    setfirst(event.target.value);
    
    let newf = event.target.value ;
    // let newitem = [...list, newf ," " ];
if (!isNaN(newf)|| ['+', '-', '*', '/']) {
  
  let newitem = eval(newf)
  setlist(newitem);
}
else{
  setlist("not a number");
}

    event.target.value = '';
}
}
// let onkeydown =(event)=>{
  //   // setfirst(event.target.value)
  //   // console.log(event.target.value)
// }
  return (
    <>
    <div className="contanier" style={{display:'inline-block' , border:'20px solid red' }}>
    <h1 >Calculator</h1>
   <input type="text" onKeyUp={onkeyup} onKeyDown={onkeydown}  style={{marginLeft:50 ,display:'inline-block'}}/>
   <p style={{marginLeft:50 }} >={first}</p>
   <p style={{marginLeft:50}} > = {list}</p>

   </div>

<div className="newone" style={{display:'inline-block'}}>
 
</div>

    </>
  )
}

export default InputAndShow