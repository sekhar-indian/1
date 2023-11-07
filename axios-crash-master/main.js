// GET REQUEST
function getTodos() {
  console.log(' ok GET Request');

  axios
    .get("https://crudcrud.com/api/454f1d1f198e43b3b8e8da98bfba3eab/s")
    .then(res=>showOutput(res))
    .catch(err=>console.log(err))
}

// POST REQUEST
function addTodo() {
  console.log('POST Request');
    axios
      .post("https://crudcrud.com/api/454f1d1f198e43b3b8e8da98bfba3eab/s",{
            name:"ram",
            id:"08"
      })
      .then(res=>showOutput(res))
      .catch(err=>console.log(err))
    }

// PUT/PATCH REQUEST
function updateTodo() {
  console.log('PUT/PATCH Request');
  axios
    .put("https://crudcrud.com/api/454f1d1f198e43b3b8e8da98bfba3eab/s/6548f7692e0fb203e8543f3a",{
      name:"vaibav sir",
      id:"07"
      
    })
    .then(res=>showOutput(res))
    .catch(err=>console.log(err))
}

// DELETE REQUEST
function removeTodo() {
  console.log('DELETE Request');
  axios 
    .delete("https://crudcrud.com/api/454f1d1f198e43b3b8e8da98bfba3eab/s/6548f7692e0fb203e8543f3a")
    .then(res=>showOutput(res))
    .catch(err=>console.log(err))


}

// SIMULTANEOUS DATA
function getData() {
  console.log('Simultaneous Request');
}

// CUSTOM HEADERS
function customHeaders() {
  console.log('Custom Headers');
}

// TRANSFORMING REQUESTS & RESPONSES
function transformResponse() {
  console.log('Transform Response');
}

// ERROR HANDLING
function errorHandling() {
  console.log('Error Handling');
}

// CANCEL TOKEN
function cancelToken() {
  console.log('Cancel Token');
}

// INTERCEPTING REQUESTS & RESPONSES

// AXIOS INSTANCES

// Show output in browser
function showOutput(res) {
  document.getElementById('res').innerHTML = `
  <div class="card card-body mb-4">
    <h5>Status: ${res.status}</h5>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Headers
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.headers, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Data
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.data, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Config
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.config, null, 2)}</pre>
    </div>
  </div>
`;
}

// Event listeners
document.getElementById('get').addEventListener('click', getTodos);
document.getElementById('post').addEventListener('click', addTodo);
document.getElementById('update').addEventListener('click', updateTodo);
document.getElementById('delete').addEventListener('click', removeTodo);
document.getElementById('sim').addEventListener('click', getData);
document.getElementById('headers').addEventListener('click', customHeaders);
document
  .getElementById('transform')
  .addEventListener('click', transformResponse);
document.getElementById('error').addEventListener('click', errorHandling);
document.getElementById('cancel').addEventListener('click', cancelToken);
