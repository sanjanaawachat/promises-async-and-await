//Create examples to explain callback hell function


// Callback Hell is essentially nested callbacks stacked below one another forming a pyramid structure.
function hell(a, b, c) {
    setTimeout((a) => {
      console.log("Welcome to all");
      setTimeout(
        (a) => {
          console.log(a + "friends");
          setTimeout(
            (c) => {
              console.log(c);
            },
            2000,
            c
          );
        },
        2000,
        b
      );
    }, 2000);
  }
  hell(4, 5, 6);