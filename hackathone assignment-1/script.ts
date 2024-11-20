const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement;
const skills = document.getElementById('skills') as HTMLElement;

// Add a click event listener to the toggle button
toggleButton.addEventListener('click', () => {
    if (skills.style.display === 'none' || skills.style.display === '') {
        // Show the skills section
        skills.style.display = 'block';
    } else {
        // Hide the skills section
        skills.style.display = 'none';
    }
});