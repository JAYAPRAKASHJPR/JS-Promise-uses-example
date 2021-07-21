var promise = new Promise((resolve, reject) => {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      resolve(xhttp.responseText);
    } else if (this.readyState == 4 && this.status == 200) {
      reject('Not found');
    }
  };

  xhttp.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);
  xhttp.send();
});

promise
  .then(data => console.log(data))
  .catch(error => console.log(error))
  .finally(() => console.log('completed'));
