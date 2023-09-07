var displayForm = document.querySelector("#display-form");
var form = document.querySelector("#form");
var hide = document.querySelector("#hide");
var files = document.querySelector("#files");
console.log(files);
var folder = document.querySelectorAll(".folder");
console.log(folder);

var flag = false;
displayForm.addEventListener("click", () => {
  form.style.display = "initial";
});
hide.addEventListener("click", () => {
  form.style.display = "none";
});

folder.forEach((data) => {
  data.addEventListener("click", () => {
    if (flag === false) {
      files.style.display = "initial";
      flag = true;
    } else {
      files.style.display = "none";
      flag = false;
    }
  });
});


const myForm = document.getElementById('myForm');
  const submitButton = document.getElementById('submitButton');

  // Add an event listener to the external submit button
  submitButton.addEventListener('click', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Submit the form programmatically
    myForm.submit();
  });

// folder.addEventListener("click", () => {
//     if(flag === false){
//         files.style.display = "initial"
//         flag = true
//     }else{
//         files.style.display = "none"
//         flag = false
//     }
// })
