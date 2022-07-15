//Create examples to explain promise.all function


let promise_1 = new Promise((resolve, reject) => {
    resolve("first");
    reject("failed1");
  });
  let promise_2 = new Promise((resolve, reject) => {
    resolve("second");
    reject("failed2");
  });
  let promise_3 = new Promise((resolve, reject) => {
    resolve("third");
    reject("failed3");
  });
  let promise_4 = new Promise((resolve, reject) => {
    resolve("fourth");
    reject("failed4");
  });
  let promise_5 = new Promise((resolve, reject) => {
    resolve("fifth");
    reject("failed5");
  });
  Promise.all([promise_1, promise_2, promise_3, promise_4, promise_5])
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });