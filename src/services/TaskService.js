export async function getAllTasks() {
    const response = await fetch('http://localhost:8000/all-tasks');
    console.log("response", response);
    return await response.json();
}