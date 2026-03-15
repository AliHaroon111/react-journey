function customRender(reactElement,container){
   /* const domElement = document.createElement(reactElement.type)// is slct element which avail in reactElement
    domElement.innerHTML = reactElement.children
    // Now we have to set attribute
    domElement.setAttriute('href', reactElement.props.href)
    domElement.setAttriute('target',reactElement.props.target)
    //now i need to utilise the container that above passed
    container.appendChild(domElement)                           // this is not React basic JS revision
    */
   const domElement = document.createElement(reactElement.type)
   domElement.innerHTML = reactElement.children
   for (const prop in reactElement.props) {
       if(prop === 'children') continue
      domElement.setAttribute(prop, reactElement.props[prop])
   }
   container.appendChild(domElement)
    }

const reactElement={
    type : 'a',
    props: {
        href: "https://google.com",
        target:'_blank',
    },
    children:"click me to visit google"
}

const mainContianer = document.querySelector('#root')

customRender(reactElement,mainContianer) // where and what do you want to inject