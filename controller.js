App.Controller = function Controller(todoList, view) {
  this.todoList = todoList;
  this.view = view;
};

App.Controller.prototype.renderView = function() {
  this.view.drawList(this.todoList);
}

App.Controller.prototype.updateTask = function(args) {
  console.log(args);
  this.todoList.updateTask(args);
  this.renderView();
}

App.Controller.prototype.addTask = function(args) {
  console.log(args);
  var t = new App.Task(args);
  this.todoList.addTask(t);
  this.renderView();
};

