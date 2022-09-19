import React, {useState, useRef} from 'react'

export default function App() {

const [number, setNumber] = useState(10)
const refNumber = useRef()

function Start(){
  refNumber.current = setInterval(() =>{
      setNumber(prevState => prevState > 0 ? prevState - 1: prevState)
   }, 1000)

  }

  return (
    <>
    <h1>{number}</h1>
    <button onClick={() =>{Start()}}>Start</button>
    <button onClick={() =>{clearInterval(refNumber.current)}}>Stop</button>
    </>
  )
}

// import React, {useState, useRef} from 'react'

// export default function App(){

//  const [input, setInput] = useState()
//  const refInput1 = useRef()

//   function Marcar(){
//     refInput1.current.focus()
//   }

//   return(
//     <>
//     <input onChange={e => setInput(e.target.value)}/>
//     <input ref={refInput1} />
//     <button onClick={() =>{Marcar()}}>Clique</button>
//     </>
//   )
// }
