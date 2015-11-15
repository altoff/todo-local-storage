app.storage = (function(){
  var KEY = 'todo_list';

  function generateUUID() {
      var d = new Date().getTime();
      if(window.performance && typeof window.performance.now === "function"){
          d += performance.now();; //use high-precision timer if available
      }
      var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = (d + Math.random()*16)%16 | 0;
          d = Math.floor(d/16);
          return (c=='x' ? r : (r&0x3|0x8)).toString(16);
      });
      return uuid;
  };

  function assignId(task) {
    if (!task.id) {
      task.id = generateUUID();
    }
  }

  function StorageProvider(){

  }

  StorageProvider.prototype.saveList = function(todoList) {
    todoList.tasks.forEach(function(ele){
      assignId(ele);
    });
    var json = JSON.stringify(todoList);
    localStorage.setItem(KEY, json);
  };

  StorageProvider.prototype.retrieveList = function() {
    var json = localStorage.getItem(KEY);
    var stored = JSON.parse(json);
    stored.tasks.forEach(function(ele){
      assignId(ele);
    });
    return stored;
  }

  return new StorageProvider();


})();