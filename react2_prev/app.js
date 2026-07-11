import func from './test.js';
export let  name="Ashish Chandel";

const parent = ()=>{
    return React.createElement('div',{id:'parent'},[func]);
}

export default parent;