let count = 0; //state
const render = () =>{
    document.getElementById("count").innerText = count;
}
const increment = () => {
    count ++
    console.log(count)
    render()
};
const decrement = () => {
    count --;
    console.log(count)
    render();
};
document.getElementById('increment').addEventListener("click", increment);
document.getElementById('decrement').addEventListener("click", decrement);
