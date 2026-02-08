// ===== Footer ===== 
const body = document.querySelector("body");

// Create footer
const footer = document.createElement("footer");
body.appendChild(footer);

// Create date
const today = new Date();
const thisYear = today.getFullYear();

// Create copyright
const copyright = document.createElement("p");
copyright.innerHTML = `© Sean Warren ${thisYear}`;

// Add copyright to footer
footer.appendChild(copyright);

// ===== Skills Array =====
const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "GitHub",
  "Responsive Desigh",
  "Flexbox & Grid",
  "Accessibility (WCAG)",
  "UI/UX Design",
  "VS Code",
  "Problem Solving"
];

// ===== Add skills to page =====
const skillsSection = document.querySelector("#skills");
const skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.innerText = skills [i];
  skillsList.appendChild(skill);
}