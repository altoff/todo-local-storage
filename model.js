App.TodoList = function TodoList(){
  this.tasks = [];
};

App.TodoList.prototype.addTask = function (task) {
  this.tasks.push(task);
  app.storage.saveList(this);
};

App.TodoList.prototype.loadTasks = function() {
  var stored = app.storage.retrieveList();
  console.log(stored);
  this.tasks = stored.tasks;
}

App.TodoList.prototype.updateTask = function(args) {
  var target = this.tasks.find(function(ele){
    return ele.id == args.id;
  });
  if (target) {
    target.done =args.done;
    app.storage.saveList(this);
  } else {
    console.log('Could not find id ' + args.id);
  }
}

App.Task = function Task(args) {
  this.taskName = args.taskName || '';
  this.done = args.done || false;
};
