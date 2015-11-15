document.addEventListener('DOMContentLoaded', function(event){
  app.view = new App.View(document.getElementById('task-list'));
  app.todoList = new App.TodoList();
  app.todoList.loadTasks();
  app.controller = new App.Controller(app.todoList, app.view);
  app.view.controller = app.controller;
  app.controller.renderView();
});

