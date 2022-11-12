export async function getAllUsers() {
    const response = await fetch('http://localhost:8000/all-users');
    console.log("response", response);
    return await response.json();
}