App.TodoList = function TodoList(){
  this.loadTasks();
};

App.TodoList.prototype.addTask = function (task) {
  this.tasks.push(task);
  app.storage.saveList(this);
};

App.TodoList.prototype.loadTasks = function() {
  var stored = app.storage.retrieveList();
  if (stored) {
    this.tasks = stored.tasks;
  } else {
    this.tasks = [];
  }
}

App.TodoList.prototype.updateTask = function(args) {
  var target = this.tasks.find(function(ele){
    return ele.id == args.id;
  });
  if (target) {
    target.done =args.done;
    app.storage.saveList(this);
  } else {
    alert('Could not find task with id ' + args.id);
  }
}

App.Task = function Task(args) {
  this.taskName = args.taskName || '';
  this.done = args.done || false;
};
