//business logic starts here
function ToDoList(){
  this.tasks = []
}

ToDoList.prototype.addTask = function(task) {
  this.tasks.push(task);
}


function Task(item, due, start, notes) {
  this.item = item,
  this.due = due,
  this.start = start,
  this.notes = notes
}



//User logic starts here
$(document).ready(function (){
  $("form#form").submit(function(event){
    event.preventDefault();
    var itemInput = $('input#item').val();
    var dueInput = $('input#due').val();
    var startInput = $('input#start').val();
    var notesInput = $('input#notes').val();

    var myTask = new Task(itemInput, dueInput, startInput, notesInput);
    var myToDoList = new ToDoList();
    myToDoList.addTask(myTask);

    $('.listItems').append('<h3>' + myToDoList.tasks[0].item + '</h3>');

    $('h3').click(function(){
        $('.listItems').append('<li>' + "Due date: " + myToDoList.tasks[0].due + ", Start date: " + myToDoList.tasks[0].start + ", Notes: " + myToDoList.tasks[0].notes + '</li>');
      });
    });
    // console.log(myToDoList);
    // console.log(myTask);
    // console.log(itemInput, dueInput, startInput, notesInput);
});
