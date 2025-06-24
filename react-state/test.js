const Counter = {
    count : 0,
    increment(){
    this.count ++
        console.log(this.count)

    }
}
Counter.increment();
Counter.increment();
Counter.increment();


const counter = (newCount) => {
    let count = 0;
    return count ++
}

console.log(counter());
console.log(counter());
console.log(counter());
