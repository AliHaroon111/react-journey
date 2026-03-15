import Youtube from "./Youtube"

function App() {
const username = 'Aliharoon'
  return (
   <>
   <h1>Vite React App {2+2} </h1>, 
   <h1>Vite React App {username}</h1>,
   {/* <h1>Vite React App {if(username) === 'hiteseh' ? 'yes':'no'}</h1>, */}     {/* tis doesnt work */}
   <Youtube/>
   </>
  )
}

export default App
