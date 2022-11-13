export async function getAllUsers() {
    const response = await fetch('http://localhost:8000/all-users');
    return await response.json();
}

export async function createNewUser(data) {
    const response = await fetch('http://localhost:8000/users', {
        method: 'POST',
        headers: {
            "Access-Control-Allow-Origin": `*`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return await response.json();
}

export async function editUser(data, userId) {
    const response = await fetch(`http://localhost:8000/users/${userId}`, {
        method: 'PUT',
        headers: {
            "Access-Control-Allow-Origin": `*`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return await response.json();
}

export async function deleteUser(userId) {
    const response = await fetch(`http://localhost:8000/users/${userId}`, {
        method: 'DELETE',
        headers: {
            "Access-Control-Allow-Origin": `*`,
            'Content-Type': 'application/json'
        }
    });
    return await response.json();
}