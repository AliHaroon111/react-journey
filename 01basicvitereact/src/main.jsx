import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react';


const reactElement ={
    type : 'a',
    props: {
        href: "https://google.com",
        target:'_blank',
    },
    children:"click me to visit google"
}

function MyApp(){
    return(
        <div>
            <h1>Custom React App</h1>
        </div>
    )
}

const AnotherElement = (
    <a href='http://google.com' target='_blank'>Visit Google</a>
)

const reactElementUingRL = React.createElement(
    'a', //element
    {href:"http://google.com", target:"_blank"}, //attribute
    'click to visit google (Obj version by react)' // children
    
    // , if(username) === 'hiteseh' ? 'yes':'no' // this doesn't work
    ,2+2  // this works
)

createRoot(document.getElementById('root')).render(
  
    // <App />      //Now here After using custom react we can us MyApp() instead of <App />
    // MyApp()    // This is not recemmende ------> Only for learning purpose

    // <MyApp />
   reactElementUingRL
)