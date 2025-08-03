async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');
    
    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const users = await response.json();
        
        // Clear the loading message
        dataContainer.innerHTML = '';
        
        const userList = document.createElement('ul');

        // Loop over the 'users' array, NOT 'userList'
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Append the completed list to the data container
        dataContainer.appendChild(userList);

    } catch (error) {
        // Use console.error for logging errors, it's better practice
        console.error('Error fetching user data:', error);
        
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data';
    }
}

// It tells the browser to run the 'fetchUserData' function once the page is ready.
document.addEventListener('DOMContentLoaded', fetchUserData);