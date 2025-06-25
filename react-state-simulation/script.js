const React = (() => {
    
    let state   = []
    let index = 0;    
    
    const useState = (initialValue) => {
   let hookIndex = index;
   index++
   if(state[hookIndex] === undefined){
    state[hookIndex] = initialValue
   }
    const setter = (newState) => {
        state[hookIndex] = newState;
        console.log("Updated state inside setter:", state[hookIndex]); // just to show it's changed
    };
    return [state[hookIndex], setter];
};
const resetIndex = () => {
    index = 0;
}
return {useState, resetIndex};
})()
const {useState, resetIndex} = React;
const Component = () => {
    const [count, setCount] = useState(1);
    const [name , setName] = useState("Rubel");
    console.log("Current count:", count);
    console.log("Current name:", name);

    // Only update if values are different
    if (count === 1) setCount(2);
    if (name === "Rubel") setName("Hasan");
};

// First render
Component(); 
resetIndex(); // reset hook index
// Second render
Component(); 
