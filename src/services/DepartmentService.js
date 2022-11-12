export async function getAllDepartments() {
    const response = await fetch('http://localhost:8000/all-departments');
    return await response.json();
}

export async function assignDepartmentsToTask(departmentIds, taskId) {
    const response = await fetch(`http://localhost:8000/departments-assign/${taskId}`, {
        method: 'POST',
        headers: {
            "Access-Control-Allow-Origin": `*`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ departmentIds })
    });
    return await response.json();
}
