//Targets the ID selectors from HTML in Javascript

let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");


//This method attaches an event handler to an element without overwriting
//existing event handlers. This method is versatile and can be used to add multiple
//event handlers of the same or different types to a single element.

//This event listener will submit the data being entered
//from the form.
form.addEventListener("submit", (e) => {
   e.preventDefault();
   console.log("button clicked");

   formValidation();
});

let formValidation = () => {
    if(input.value === "") {
        msg.innerHTML = "Post cannot be blank";
        console.log("failure");
    } else {
        console.log("success");
        msg.innerHTML = "";
    }
};

