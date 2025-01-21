//Targets the ID selectors from HTML in Javascript

let form = document.getElementById("form");
let textInput = document.getElementById("textInput");
let dateInput = document.getElementById("dateInput");
let msg = document.getElementById("msg");
let tasks = document.getElementById("tasks");
let add = document.getElementById("add");


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
    if(textInput.value === "") {
        console.log("failure");
        msg.innerHTML = "Task cannot be blank";
    } else {
        console.log("success");
        msg.innerHTML = "";

        acceptData();
        add.setAttribute("data-bs-dismiss", "modal");
        add.click();

        (() => {
            add.setAttribute("data-bs-dismiss", "");
        })();
    }
};

let data = [];

let acceptData = () => {
  data.push({
    text: textInput.value,
    date: dateInput.value,
    description: textarea.value,
  });

  localStorage.setItem("data", JSON.stringify(data));

  console.log(data);

  createTasks();
};

//Create functionality 
let createTasks = () => {
    tasks.innerHTML = "";
    data.map((x, y) => {
         return (tasks.innerHTML += ` <div id=${y}>
          <span class="fw-bold">${x.text}</span>
          <span class="small text-secondary">${x.date}</span>
          <p>${x.description}</p>

          <span class="options">
            <i onClick= "editTask(this)" data-bs-toggle="modal" data-bs-target="#form" class="fas fa-edit"></i>
            <i onClick ="deleteTask(this);createTasks()" class="fas fa-trash-alt"></i>
          </span>
        </div>`);
    });

   resetForm();
}

//Delete functionality 
//The first line of code will delete HTML element from the screen
//The second line will remove the targeted task from the data array
//The third line will update the local storage with new data
let deleteTask = (e) => {
    e.parentElement.parentElement.remove();
  
    data.splice(e.parentElement.parentElement.id, 1);
  
    localStorage.setItem("data", JSON.stringify(data));
  
    console.log(data);
};

//Edit functionality 
let editTask = (e) => {
    let selectedTask = e.parentElement.parentElement;
  
    textInput.value = selectedTask.children[0].innerHTML;
    dateInput.value = selectedTask.children[1].innerHTML;
    textarea.value = selectedTask.children[2].innerHTML;
  
    deleteTask(e);
  };

//For getting data from local storage. This is called an IIFE, a 
//function expression used to retrieve data from local storage.
//This allows you to keep your data in local storage even upon refreshing.

(() => {
    data = JSON.parse(localStorage.getItem("data")) || [];
    console.log(data);
    createTasks();
  })();


let resetForm = () => {
    textInput.value = "";
    dateInput.value = ""; 
    textarea.value = "";
}