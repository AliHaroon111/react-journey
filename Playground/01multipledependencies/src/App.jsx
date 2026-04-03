import React,{ useState, useEffect } from 'react'

/**
// --------------USING console.log---------------
function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("")

    useEffect(()=>{
      console.log("Will change the count or name")
    },[count,name]
  )

  return (
    <div>
      <h1>Count: {count}</h1>
      <h1>Name: {name}</h1>

    <button onClick={()=> setCount(count+1)} >Increase Count</button>

    <br /><br />

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
    </div>
      )
    }
    // --------------USING console.log---------------     
     */
    
    // --------------BELOW USING console.log---------------
    function App() {
      const [count, setCount] = useState(0);
      const [name, setName] = useState("");
    
      useEffect(() => {
        document.title = `${name || "User"} - Count: ${count}`;
      }, [name, count]);
    
      return (
        <div>
          <h2>Name: {name || "No Name"}</h2>
          <h2>Count: {count}</h2>
    
          <input
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
    
          <br /><br />
    
          <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>
      );
    }

export default App
