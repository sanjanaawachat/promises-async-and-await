//Create examples to explain callback function

//Here when a() has been called then b has been called inside a so there will be callback and b will execute first then a will end;
function hi(){
    friends();
}
function friends(){
    console.log('Callback funtion');
}
hi();