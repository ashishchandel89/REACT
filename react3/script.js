    import {navBarFunc,achievementFunc,HelloImgDiv} from "./app.js";
    let container=React.createElement('div',{className:'container'},navBarFunc(),achievementFunc(),HelloImgDiv());
    let root = ReactDOM.createRoot(document.querySelector("main"));
    root.render(container)
