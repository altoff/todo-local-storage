App.Controller = function Controller(todoList, view) {
  this.todoList = todoList;
  this.view = view;
};

App.Controller.prototype.addTask = function(args) {
  console.log(args);
  var t = new App.Task(args);
  this.todoList.addTask(t);
  this.view.drawList(this.todoList);
};

