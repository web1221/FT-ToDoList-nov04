//business logic starts here
function ToDoList(){
  this.tasks = []
  this.currentId = 0
}

ToDoList.prototype.addTask = function(task) {
  task.id = this.assignId();
  this.tasks.push(task);
}

ToDoList.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}


function Task(item, due, start, notes) {
  this.item = item,
  this.due = due,
  this.start = start,
  this.notes = notes
}

// for(var i = 0; i <= myToDoList.tasks.length; i++){
//   $('.listItems').append('<li>' + myToDoList.tasks[i] + '</li>');
// }
//
// $('.listItems').append('<li>' + "Due date: " + myToDoList.tasks[0].due + ", Start date: " + myToDoList.tasks[0].start + ", Notes: " + myToDoList.tasks[0].notes + '</li>');


//User logic starts here
$(document).ready(function (){
  var myToDoList = new ToDoList();
  // $('.listItems').text("")

  $("form#form").submit(function(event){
    event.preventDefault();
    var itemInput = $('input#item').val();
    var dueInput = $('input#due').val();
    var startInput = $('input#start').val();
    var notesInput = $('input#notes').val();

    var myTask = new Task(itemInput, dueInput, startInput, notesInput);
    myToDoList.addTask(myTask);


    for(var i = 0; i <= myToDoList.tasks.length; i++){
      $('.listResult').append('<h3>' + myToDoList.tasks[i].item + '</h3>');
      $('.listResult').append('<li>' + myToDoList.tasks[i].due + '</li>');
      $('.listResult').append('<li>' + myToDoList.tasks[i].start + '</li>');
      $('.listResult').append('<li>' + myToDoList.tasks[i].notes + '</li>');
      console.log(myToDoList.tasks[i].item);
      console.log(myToDoList.tasks[i].due);
    };
    alert('passed loop');

      console.log(myToDoList);
      console.log(myTask);
      console.log(itemInput, dueInput, startInput, notesInput);
    });
});
