import parent from "./parent.js";
let h1=React.createElement('h1',null,'Hello, I am Ashish Chandel')
let h2=React.createElement('h2',null,'Hello, I am a Software Engineer')
let container=React.createElement('container',null,[h1,h2,parent()])
let root=ReactDOM.createRoot(document.querySelector('main'));
root.render(container);

