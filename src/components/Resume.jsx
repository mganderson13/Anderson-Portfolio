function Resume() {
    return (
        <>
        <div className="resumeContainer">
        <div className="resumeTop">
        <h1>Marianne G. Anderson</h1>
        <h2>Full-Stack Developer     -     Chicago, IL</h2>
        </div>

        <div className="resumeDivide"></div>
    <div className="resumeSection">
        <h3>EDUCATION</h3>
        <div className="resumeTitleDate">
        <h4>Fullstack Academy</h4>
        <p>September 2023 - December 2023</p>
        </div>
        <p>Software Engineering Certificate | Full-time, Full Stack Javascript Web Development Immersive</p>
        <div className="resumeTitleDate">
        <h4>Middlebury College</h4>
        <p>September 2010 -  May 2014</p>
        </div>
        <p>Bachelor of Arts in Gender Studies and Education</p>
    </div> 
    <div className="resumeDivide"></div>

    <div className="resumeSection">
        <h3>TECHNICAL SKILLS</h3>
        <ul className="resumeSkills">
            <li>JavaScript (ES6+)</li>
            <li>CSS</li>
            <li>HTML</li>
            <li>Typescript</li>
            <li>React</li>
            <li>Next.js</li>
            <li>Redux</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>C#</li>
            <li>ASP.NET</li>
            <li>Git</li>
            <li>MongoDB</li>
            <li>SQL/relational databases</li>
            <li>NoSQL/MongoDB</li>
            <li>AWS</li>
            <li>Google Cloud Platform</li>
            <li>Docker</li>
        </ul>
    </div>
    <div className="resumeDivide"></div>

    <div className="resumeSection">
        <h3>EXPERIENCE</h3>
        <div className="resumeTitleDate">
        <h4>Teacher | Chicago Public Schools | Chicago, IL</h4>
        <p>August 2015 - present</p>
        </div>
        <ul>
            <li>Used data from standardized, summative, and formative assessments to create unit plans for literacy, science, and social studies with extra supports and extension activities for varying levels in the classroom</li>
            <li>Conducted 4 weekly small groups of 4-5 students specifically targeting learning gaps created during distanced learning, increased student reading levels by an average of 3 Fountas and Pinnell reading levels </li>
            <li>Collaborated with councilor and 3 special education teachers to provide extra emotional support to 10 students</li>
        </ul>
        <div className="resumeTitleDate">
        <h4>Web Content Manager | CERA Ear Clinic | Chicago, IL</h4>
        <p>May 2025 - present</p>
        </div>
        <ul>
            <li>Designed and built the CERA Ear Clinic website in collaboration with the founder</li>
            <li>Manage and update website landing pages/content using a Content Management System (CMS)</li>
            <li>Wrote custom code scripts to integrate an electronic medical record (EMR) system into the website</li>
            <li>Launched SEO and social media strategy, securing the website’s first 100 visits from Google and Facebook</li>
        </ul>
        <div className="resumeTitleDate">
        <h4>Intern | Alter Learning | Chicago, IL</h4>
        <p>June 2024 - September 2024</p>
        </div>
        <ul>
            <li>Facilitated Agile/Scrum meetings and sprint planning, to ensure team alignment and project momentum</li>
            <li>Collaborated closely on a cross-functional team with engineers, designers, product managers, and educators to deliver interactive components of a VR classroom experience, focusing on usability and functionality</li>
            <li>Helped define sprint goals, track progress, and assign tasks using a Kanban board to maintain workflow</li>
        </ul>
    </div>

    <div className="resumeDivide"></div>

    <div className="resumeSection">
        <h3>TECHNICAL PROJECTS</h3>
            <div className="resumeTechnicalProjects">
            <div className="resumeTitleDate">
            <h4>Deal Finder Browser Extension | Developer | <a href="https://chromewebstore.google.com/detail/deal-finder-for-community/nnkmcobdablmjepfholbkhgjlgnnllgl">https://chromewebstore.google.com/deal-finder/</a></h4>
            <p>October 2025</p>
            </div>
            <ul>
                <li>Deal Finder is a Chrome browser extension using JavaScript to detect and display deal alerts</li>
                <li>Integrated scraped data from partner websites to dynamically notify users of available discounts and benefits in real time based on the active domain</li>
                <li>Authored the Manifest V3 configuration and successfully published the extension to the Chrome Web Store, managing the full lifecycle from concept to deployment</li>
            </ul>
            </div>
            <div className="resumeTechnicalProjects">
            <div className="resumeTitleDate">
            <h4>Visual Aid Calculator | Co-Developer | <a href="https://maribeth2024.github.io/VisualCalculator/">https://maribeth2024.github.io/VisualCalculator/</a></h4>
            <p>January 2025</p>
            </div>
            <ul>
                <li>Visual Aid Calculator is an educational web-based application that reinforces math operations for elementary students by displaying visual representations of addition/subtraction/multiplication/division</li>
                <li>Developed in collaboration with a fellow engineer/educator inception and planning to deployment, utilizing tools like Figma, Github, and Inkscape</li>
                <li>Frontend app built with HTML, CSS, and Javascript, this project showcases the power of vanilla Javascript</li>
                <li>Animations created using scripts that create and move visuals within the DOM and on JavaScript canvases</li>
            </ul>
            </div>
            <div className="resumeTechnicalProjects">
            <div className="resumeTitleDate">
            <h4>Book Branch | Developer | <a href="https://book-branch-454719.uc.r.appspot.com/">https://book-branch.com/</a></h4>
            <p>February 2024</p>
            </div>
            <ul>
                <li>Book Branch is a book browsing website where readers can explore titles by genre, search using a keyword, and access the books they like on Google Books</li>
                <li>React.js frontend makes requests to the Google’s Book API to display book information and facilitates account creation and login through Firebase Auth</li>
                <li>Developed a RESTful API using Node.js / Express.js with robust CRUD endpoints to allow users to create an account, submit book reviews, and save books to their profile</li>
                <li>Utilized MongoDB to securely store account information</li>
                <li>Integrated middleware for authentication to protect API routes and ensure only authorized users can access personal data</li>
            </ul>
            </div>
            <div className="resumeTechnicalProjects">
            <div className="resumeTitleDate">
            <h4>Classroom Cash Register | Co-Developer</h4>
            <p>December 2023</p>
            </div>
            <ul>
                <li>Change Calculator is an educational app designed to support students in learning and practicing monetary denominations, counting change, and job skills like using a cash register</li>
                <li>Collaborated throughout software development lifecycle with team members to write efficient, reusable code</li>
                <li>Created SQLite database and seeded initial data for default store using Prisma</li>
                <li>Configured backend router API requests and frontend endpoints using RTK Query and Express</li>
                <li>Designed user friendly interface using SCSS, keeping accessibility in mind for students</li>
            </ul>
            </div>
        </div>
        </div>
    </>
    )
}

export default Resume;