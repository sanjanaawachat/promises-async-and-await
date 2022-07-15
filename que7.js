//Create examples to explain promises function
// here if conditon will be satisfied to the promise then response will be executed otherwise reject function will be executed.Response will give result using function call(Result()).then((argument)) and reject will give result in .catch

function student(marks) {
  return new Promise((response, reject) => {
    if (marks >= 50) {
      response("passed");
    } else {
      reject("failed");
    }
  });
}
student(60).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err)
  }) 
  
  