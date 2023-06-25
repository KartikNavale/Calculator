// Blank string use for blank input tag
let string = "";
// select all query that have button class
let buttons = document.querySelectorAll("button");
// create arr from button, add for each for add arrow ()=> function
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    // add = or evalvate is equal to (Calculate)
    if (e.target.innerHTML == "=") {
      string = eval(string);
      document.querySelector("input").value = string;
    }
    // for activiting C (cancel)
    else if (e.target.innerHTML == "C") {
      string = "";
      document.querySelector("input").value = string;
    }
    // removing the (=)
    else {
      console.log(e.target);
      //   for add number in input tag (input blank box)
      string = string + e.target.innerHTML;
      document.querySelector("input").value = string;
    }
  });
});

// 22.1
