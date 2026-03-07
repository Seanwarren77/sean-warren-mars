# sean-warren-mars

## Overview

This project is a personal portfolio website built with HTML, CSS, and JavaScript. It showcases my background, experience, skills and projects while allowing visitors to leave messages through an interactive form. 

The site also connects to the GItHub API to automatically display repositories from my GitHub account. 

## Features

* Reponsive portfolio layout
* Dynamic skills list generated with JavaScript
* Message form that allows users to leave messages
* Ability to remove messages from the message list
* Dynamic footer that automatically displays the curren year
* GitHub API integration that fetches and displays repositories
* Responsive design using Flexbox, Grid, and Media Queries

## Technologies Used

* HTML
* CSS
* JavaScript
* Git & GitHub
* GitHub REST API

## How to Run the Project Locally

  1. Clone the repository
    git clone https://github.com/Seanwarren77/your-repository-name.git

  2. Navigate into the project folder

    cd your-repository-name

  3. Open the project

    Open the index.html file in your web browser.

    You can do this by:

    * Double clicking the index.html file, or
    * Opening it with a code editor like VS Code and using Live   Server     

## Project Structure

portfolio-project/

index.html
README.md
css/
  index.css
js/
  index.js

## JavaScript Functionality

### Footer Creation

JavaScript dynamically creates a footer that displays the current year.

### Skills Section

An array of skills is looped through and added to the page dynamically.

### Message Form 

Users can submit a message using the form:

  * Name
  * Email
  * Message 

Submitted messages appear on the page and can be removed using a remove button. 


### GitHub API Integration

The project fetches repositories from:

  https://api.github.com/users/Seanwarren77/repos

 Repository names are than dynamically displayed in the Projects section. 

 ### Author

 Sean Warren 
 Software Developer

 GitHub:https://github.com/Seanwarren77 
    


[Sean's Open API Project Code The Dream](https://github.com/Seanwarren77/sean-open-api-project)