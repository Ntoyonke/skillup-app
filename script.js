// script.js

const skillForm = document.getElementById('skill-form');
const skillList = document.getElementById('skill-list');

skillForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('skill-name').value.trim();
  let level = parseInt(document.getElementById('skill-level').value);

  if (!name || isNaN(level) || level < 0 || level > 100) {
    alert('Please enter a valid skill name and level (0-100).');
    return;
  }

  const li = document.createElement('li');

  const skillName = document.createElement('span');
  skillName.textContent = name;

  const progressContainer = document.createElement('div');
  progressContainer.className = 'progress-container';

  const progressBar = document.createElement('div');
  progressBar.className = 'skill-progress';
  progressBar.style.width = level + '%';

  progressContainer.appendChild(progressBar);
  li.appendChild(skillName);
  li.appendChild(progressContainer);

  skillList.appendChild(li);

  skillForm.reset();
});
