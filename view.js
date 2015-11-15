App.View = function View(element) {
  this.element = element;
  this.addEventListeners();
};

App.View.prototype.addEventListeners = function() {
    var form = document.getElementById('new_task_form');

    var handleSubmit = function(event) {
      event.preventDefault();
      var name = document.getElementById('task_name').value;
      var done = document.getElementById('task_done').checked;
      this.controller.addTask({taskName: name, done: done});
    };

    var handleCheckbox = function(event) {
      if (event.target.dataset.taskId) {
        this.controller.updateTask({id: event.target.dataset.taskId, done:event.target.checked });
      }
    };

    form.addEventListener('submit', handleSubmit.bind(this));
    this.element.addEventListener('change', handleCheckbox.bind(this));

};

App.View.prototype.drawList = function(todoList) {
  var html = '';
   if (todoList.tasks) {
      for (var i = 0; i < todoList.tasks.length; i++) {
        var task = todoList.tasks[i];
        html += '<li><span class="task-name">';
        html += task.taskName;
        html += '</span><span class="task-done">';
        html += '<input data-task-id="';
        html += task.id;
        html += '" class="cb-done" type="checkbox" ';
        html += task.done ? 'checked="checked" >' : ' >';
        html += '</span></li>';
      }
   }
   this.element.innerHTML = html;
};

