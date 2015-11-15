App.TodoList = function TodoList(){
  this.tasks = [];
};

App.TodoList.prototype.addTask = function (task) {
  this.tasks.push(task);
  app.storage.saveList(this);
};

App.TodoList.loadTasks = function() {
  var stored = app.storage.retrieveList();
  this.tasks = stored.tasks;
}

App.Task = function Task(args) {
  this.taskName = args.taskName || '';
  this.done = args.done || false;
};
