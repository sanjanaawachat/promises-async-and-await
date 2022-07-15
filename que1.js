
//que1

//Write one example explaining how you can write a callback function ?

function add(a, b) {
  sub(a, b); //Callback function,when we call a function inside a function or passes function as an argument while calling a function is called as callback function.
}
const sub = (a, b) => {
  console.log(a - b);
};
add(10, 4);
  