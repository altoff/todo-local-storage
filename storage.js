app.storage = (function(){
  var KEY = 'todo_list';

  function StorageProvider(){

  }

  StorageProvider.prototype.saveList = function(todoList) {
    var json = JSON.stringify(todoList);
    localStorage.setItem(KEY, json);
  };

  StorageProvider.prototype.retrieveList = function() {
    var json = localStorage.getItem(KEY);
    return JSON.parse(json);
  }

  return new StorageProvider();


})();