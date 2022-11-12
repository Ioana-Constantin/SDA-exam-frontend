export async function getAllUsers() {
    const response = await fetch('http://localhost:8000/all-users');
    return await response.json();
}