// import { produce } from "immer";
//  //mutation
//   const employee = 
//   {
//     name : "Rubel",
//     address : {
//         city : "Dinajpur",
//         country : "Bangladesh"
//     }
//   }
// //using immer
// const employee2 = produce(employee, (draft) => {
//     draft.name = "Raju";
//     draft.address.city = "Sylet"
// })

// //   const employee2 = {
// //     ...employee,
// //     name : "Rana",
// //     address : {
// //         ...employee.address,
// //         city : "rangpur"
// //     }
// //   }
// //   employee2.address.city = "Dhaka"
//   console.log(employee);
//   console.log(employee2);

// //pure function
// const add = (a, b) =>{
//     return a + b;
// }

// add(1,2)
// add(2,4)

// //impure function 
// let total = 0;
// const adToTotal =(amount) => {
//     return total = total + amount;
// }
//  adToTotal(10);
// //  console.log(total);

//  const updateDate = () =>{
//     new Data()
//  }

//  const rendomNumber = (amount) => {
//     return amount.Math.random();
//  }



//curring/ function curring
//normal
// const add = (a,b) => {
//     return a + b
// };

//curried
// const add =(a) =>(b) => a +b;
// console.log(add(3)(5))

function add (a) {
    return function (b) {
        return a + b

    }

}

console.log(add(5)(3)) ;

const totalPrice = (discount) => (amount) => amount - amount * discount;
console.log(totalPrice(.3)(100))
const withdiscount = totalPrice(.3);
console.log(withdiscount(100))