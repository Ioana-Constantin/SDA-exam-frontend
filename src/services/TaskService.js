export async function getAllTasks() {
    const response = await fetch('http://localhost:8000/all-tasks');
    // console.log("response", response);
    return await response.json();
}
export async function createNewTask(data) {
    const response = await fetch('http://localhost:8000/tasks', {
        method: 'POST',
        headers: {
            "Access-Control-Allow-Origin": `*`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return await response.json();
}

export async function updateTask(data, taskId) {
    const response = await fetch(`http://localhost:8000/tasks/${taskId}`, {
        method: 'PUT',
        headers: {
            "Access-Control-Allow-Origin": `*`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return await response.json();
}

export async function deleteTask(taskId) {
    const response = await fetch(`http://localhost:8000/tasks/${taskId}`, {
        method: 'DELETE',
        headers: {
            "Access-Control-Allow-Origin": `*`,
            'Content-Type': 'application/json'
        }
    });
    return await response.json();
}


