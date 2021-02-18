# dmveasy-frontend

<br />
<p align="center">
  <a href="https://trash-panda-shehacks.web.app/">
    <img src="https://i.imgur.com/s46tITR.png" alt="DMVeasy logo" width="auto" height="200">
  </a>
  <h3 align="center">DMVeasy</h3>
  <p align="center">
    DMVEasy is a innovative web-based application geared towards cutting back on paper waste by enabling users to upload and fill out documents online. 
    <br />
    <br />
    <a href="https://trash-panda-shehacks.web.app/">View Website</a>
    ·
    <a href="https://www.youtube.com/watch?v=-CKjlRJCqoM&feature=youtu.be">View Demo Video</a>
    ·
    <a href="https://github.com/tiffanynk/trash-panda-fe/issues">Report Bug</a>
    ·
    <a href="https://github.com/tiffanynk/trash-panda-fe/issues">Request Feature</a>
  </p>
</p>
<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
    </li>
    <li><a href="#future-plans">Future Plans</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

<br></br>
<h2>About the Project</h2>
<p>
  Welcome to DMVeasy, the newest way to make your day a little easier. It’s an easy way to make sure all your paperwork is in order before heading to the DMV! All you have to do is sign up, submit photos of all your required documents and fill out one form. After you’ve uploaded all of this information a DMV employee will make sure everything is in order before approving your appointment. Never get sent home for more paperwork from the DMV again!
  This project was created for Developer Week’s Hackathon 2021. We utilized Anvil’s API to fill our Driver’s License Renewal Form PDF and saved this PDF to our Firebase storage. You can view the code for our backend here.
  -Make sure to mention
  -Anvil API 
  -Tailwind Css
  -Firebase
<br>:laptop:</br>
</p>

<h2>Built With</h2>

<ul>
 <li>Node: version 2.6.5</li>
 <li>Anvil: 1.19.0</li>
 <li>React: version 17.0.1</li>
 <li>Tailwind: version 2.0.1</li>
 <li>Firebase: version 8.2.6</li>
 <li>Firestore: version 4.9.3</li>
 <li>Firebase-Auth: version 9.2.0</li>
 <li>Firebase-functions: version 3.11.0</li>
</ul>

<h2>Getting Started</h2>
To run this project, create a folder on your local environment where you can clone the <a href="https://github.com/sydneygold/dmveasy-frontend">DMVeasy-frontend</a> and <a href="https://github.com/MusicMeier/DMVeasy-backend">DMVeasy-backend</a> GitHub repositories. Open both in your code editor.<br><br>

From your backend folder perform the following commands:<br>
<li>Use the command to install: <code>npm install</code></li>
<li>In your terminal, install express: <code>npm install express</code></li>
<li>You don't want to send your node-modules to github, in terminal: <code>touch .gitignore</code></li>
<li>require express in your index.js folder</li><br>
<li>Use terminal to install knex: <code>npm i knex</code></li><br>
<li>go to knexfile and delete all but development seciton. </li><br>
<li>Use terminal to install Postgres: <code>npm install postgres</code></li><br>
<li>go to knexfile and change client to 'pg', change filename to: <code>'postgres:///db_table_name'</code></li><br>
<li>use knex to migrate: <code>npx knex migrate:make filename-table</code></li><br>
<li>Use knex to migrate the tables you just made: <code>npx knex migrate:latest</code></li><br>
<li>Make your seeds using: <code>npx seed:make</code></li><br>
<li>Plant your seeds using: <code>npx knex seed:run</code></li><br>
<li>Use terminal to install cors: <code>npm install cors</code></li><br>
<li>last but not least install objection: <code>npm install objection</code></li><br>

From your frontend folder perform the following command: <code>npm install</code><br><br>
Then you should: <code>npm start</code><br><br>
You are now ready to start using the first iteration of Note-Set-Match!<br>

<i>*Please note that some features are still a work in progress.</i>

<h2>Instructions</h2>
<ol>
 <li>Sign up!</li>
 <li>Or if you prefer to stay anonymous, hit the 'Start Game' button to begin.</li>
 <li>Once you're on the game page, click on the cards and start your journey.</li>
 <li>Once you've completed the game, you may play again or simply exit.</li>
</ol>

<h2>Future Plans</h2>

We're looking forward to rolling-out the following features:
<li>Create a user login workflow.</li>
<li>Levels: beginner, intermediate, and advanced</li>
<li>Options to practice musical terminology</li>

 <h2>Contact</h2>
<a href="https://www.linkedin.com/in/musicmeier/"><img src="https://user-images.githubusercontent.com/68958970/97038321-a07f9600-1538-11eb-90f4-baa2d81a0664.png" alt="Music Meier" style="width:10px;height:10px;"></a>Music Meier :musical_score:<br>
<a href="https://www.linkedin.com/in/jrmedina1412/"><img src="https://user-images.githubusercontent.com/68958970/97038321-a07f9600-1538-11eb-90f4-baa2d81a0664.png" alt="Junior Medina" style="width:10px;height:10px;"></a>Junior Medina :turtle:<br>
<a href="https://www.linkedin.com/in/tiffany-kanjanabout"><img src="https://user-images.githubusercontent.com/68958970/97038321-a07f9600-1538-11eb-90f4-baa2d81a0664.png" alt="Tiffany Kanjanabout" style="width:10px;height:10px;"></a>Tiffany Kanjanabout :octocat:<br>
<a href="https://www.linkedin.com/in/kyletrahan/"><img src="https://user-images.githubusercontent.com/68958970/97038321-a07f9600-1538-11eb-90f4-baa2d81a0664.png" alt="Kyle Trahan" style="width:10px;height:10px;"></a>Kyle Trahan :bear:<br>

<h2>Acknowledgements<h2>
  <a href="https://www.useanvil.com/">Anvil API</a>
  <a href="https://www.developerweek.com/">DeveloperWeek</a>
