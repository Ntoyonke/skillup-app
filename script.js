function showSkills() {
const skills = `
<h2>Learn These Skills</h2>
<ul>
<li><strong>🍞 Baking:</strong> Learn to bake bread <a href="https://www.youtube.com/watch?v=8jZ9Pq3YpO0" target="_blank">Watch</a></li>
<li><strong>👕 Sewing:</strong> Make a basic T-shirt <a href="https://www.youtube.com/watch?v=FUZ4YAJU3kQ" target="_blank">Watch</a></li>
<li><strong>💻 Coding:</strong> Create your first webpage <a href="https://www.youtube.com/watch?v=UB1O30fR-EE" target="_blank">Watch</a></li>
</ul>
`;
document.getElementById("content").innerHTML = skills;
}

function showJobs() {
const jobs = `
<h2>Find Local Jobs</h2>
<ul>
<li><strong>🌿 Farm Helper</strong> – KwaMashu – Call: 082 555 1234</li>
<li><strong>💇 Hair Braider</strong> – Umlazi – Call: 083 987 4567</li>
<li><strong>🧁 Bakery Assistant</strong> – Soweto – Call: 081 345 6789</li>
</ul>
`;
document.getElementById("content").innerHTML = jobs;
}
