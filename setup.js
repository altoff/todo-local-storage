document.addEventListener('DOMContentLoaded', function(event){
  app.view = new App.View(document.getElementById('task-list'));
  app.todoList = new App.TodoList();
  app.controller = new App.Controller(app.todoList, app.view);
  app.view.controller = app.controller;

  app.controller.addTask({taskName: 'Buy milk', done:false});
  app.controller.addTask({taskName: 'Buy dog food', done:true});
  app.controller.addTask({taskName: 'Get new job', done:false});

});

