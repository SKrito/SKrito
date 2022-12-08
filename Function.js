function Arr(){
   const number = [0,1,2,3,4,5,6,7,8,9];
let text = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
 let a = [];
 for(let i = 0; i < arguments.length; i++){
    a[i] = text[arguments[i]];
 }
 return a;
}
console.log(text(1, 3, 4, 7, 9));
