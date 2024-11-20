var toggleSkills = document.getElementById('toggle-skills');
var skillsSection = document.getElementById('skills');
// Add a click event listener to the toggle button
toggleSkills.addEventListener('click', function () {
    if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
        // Show the skills section
        skillsSection.style.display = 'block';
    }
    else {
        // Hide the skills section
        skillsSection.style.display = 'none';
    }
});
