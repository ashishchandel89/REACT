import circle from "./app.js";
import box from "./test.js";

const parent=()=>{
    return React.createElement('div',{id:'parent'},circle(),box())
}
export default parent