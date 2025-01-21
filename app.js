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
   formValidation();
});


//Contains if else statement inside formValidation function. 
let formValidation = () => {
    if(input.value === "") {
        msg.innerHTML = "Post cannot be blank";
    } else {
        msg.innerHTML = "";
        acceptData();
    }
};

let data = {};

let acceptData = () => {
    data["text"] = input.value;
    console.log(data);
    
    createPost();
};

let createPost = () => {
    posts.innerHTML += `  
     <div>
    <p>${data.text}</p>
    <span class="options">
      <i onClick="editPost(this)" class="fas fa-edit"></i>
      <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
    </span>
  </div>`;
  input.value = "";
}