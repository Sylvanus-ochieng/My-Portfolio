<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Portfolio</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Welcome to My Portfolio</h1>
    </header>

    <section class="profile">
        <img src="Images/picture1.jpeg" alt="My Photo" class="profile-pic">
        <h2>Sylvanus Ochieng</h2>
        <p>Hi! I'm a passionate data analyst. Here is one of the projects I'm working on with my colleague.</p>
    </section>

    <section class="projects">
        <h2>My Projects</h2>
        <div class="project-container">
            <div class="project-card">
                <img src="Images/project1.jpeg" alt="Project 1">
                <h3>Data Visualization Dashboard</h3>
                <p>Built an interactive dashboard using Python, Pandas, and Power BI for real-time data insights.</p>
            </div>
            <div class="project-card">
                <img src="Images/project2.jpeg" alt="Project 2">
                <h3>Machine Learning Model</h3>
                <p>Developed a predictive model to analyze customer trends using Scikit-Learn.</p>
            </div>
            <div class="project-card">
                <img src="Images/project3.jpg" alt="Project 3">
                <h3>Web Scraping Tool</h3>
                <p>Automated web scraping with BeautifulSoup and Selenium to collect market data.</p>
            </div>
        </div>
    </section>

    <button id="toggleDarkMode">Toggle Dark Mode</button>

    <script src="script.js"></script>
</body>
</html>

####css
body {
    font-family: Arial, sans-serif;
    text-align: center;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
    color: #333;
    transition: background 0.5s, color 0.5s;
}

header {
    background-color: #222;
    color: white;
    padding: 20px;
    font-size: 24px;
}

.profile {
    margin: 20px 0;
}

.profile-pic {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 4px solid #333;
}

.projects {
    margin: 20px;
}

.project-container {
    display: flex;
    justify-content: center;
    gap: 20px;
}

.project-card {
    background: white;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    width: 200px;
    transition: transform 0.3s;
}

.project-card img {
    width: 100%;
    border-radius: 5px;
}

.project-card:hover {
    transform: scale(1.05);
}

button {
    margin: 20px;
    padding: 10px 20px;
    font-size: 16px;
    background: #333;
    color: white;
    border: none;
    cursor: pointer;
    transition: background 0.3s;
}

button:hover {
    background: #555;
}

/* Dark Mode */
.dark-mode {
    background-color: #333;
    color: white;
}

.dark-mode header {
    background-color: black;
}

.dark-mode .project-card {
    background: #444;
    color: white;
}
