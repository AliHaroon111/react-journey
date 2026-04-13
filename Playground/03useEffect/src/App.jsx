import { useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [data,setData] = useState("Ali")

  const incremnet = () =>{
    setCount(count+1)
  }

  const decrement = ()=>{
    if(count==0){
      return `Not possible`
    } else{
      setCount(count-1)
    }
  }

  const change = ()=>{
    setData("Haroon")
  }
  useEffect(()=>{
    alert("Use Effect run")
  },[change])
  return (

    <>
      <div>
        <h1>Check {count}</h1>
        <h1>Data {data}</h1>
        <button onClick={incremnet}>Increament</button>
        <button onClick={decrement} >Decreament </button>

        <button onClick={change}>Change</button>
      </div>
    </>
  )
}

export default App
