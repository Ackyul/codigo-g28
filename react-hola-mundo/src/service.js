const BASE_URL = "https://6932247311a8738467d19c4f.mockapi.io/tasks";

// Metodo: GET (Defualt)
export async function getTaskFromAPI() {
  const response = await fetch(BASE_URL);
  const data = await response.json();
  return data;
}

// Metodo: POST
// task: Es el objeto que contiene el json con la data
export async function createTaskToAPI(task) {
  const response = await fetch(BASE_URL, {
    method: "POST",
    // OJO: Los objetos no puedes viajar usando fetch
    // debemos convertir ese objeto json a un json string
    body: JSON.stringify(task),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
}

// Metodo: PUT -> `BASE_URL/id` (Actualizar)
export async function updateTaskFromAPI(id, task) {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    body: JSON.stringify(task),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
}

// Metodo: DELETE -> `BASE_URL/id`
// id: es el identificador unico de cada tarea
export async function deleteTaskFromAPI(id) {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
  const data = await response.json();
  return data;
}