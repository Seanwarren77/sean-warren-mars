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
copyright.textContent = `© Sean Warren ${thisYear}`;

// Add copyright to footer
footer.appendChild(copyright);

// ===== Skills Array =====
const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "GitHub",
  "Responsive Design",
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
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
}

const messageForm = document.querySelector(`form[name="leave_message"]`);

messageForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const usersName = event.target.usersName.value;
  const usersEmail = event.target.usersEmail.value;
  const usersMessage = event.target.usersMessage.value;

  console.log(usersName, usersEmail, usersMessage);

const messageSection = document.querySelector("#messages");
const messageList = messageSection.querySelector("ul");

const newMessage = document.createElement("li");
newMessage.innerHTML = `<a href="mailto:${usersEmail}">${usersName}</a>
<span> wrote: ${usersMessage}</span>`;

const removeButton = document.createElement("button");
removeButton.innerText = "remove";
removeButton.type = "button";


removeButton.addEventListener("click", function () {
  const entry = this.parentNode;
  entry.remove();
  });

  newMessage.appendChild(removeButton);
messageList.appendChild(newMessage);

  messageForm.reset();
});




