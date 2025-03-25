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
        <h4>Fullstack Academy Web Development Bootcamp</h4>
        <p>September/2023 - December/2023</p>
        </div>
        <p>Software Engineering Certificate | Full-time, Full Stack Javascript Web Development Immersive</p>
        <div className="resumeTitleDate">
        <h4>Middlebury College</h4>
        <p>September/2010 -  May/2014</p>
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
            <li>React</li>
            <li>Next.js</li>
            <li>Redux</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Git</li>
            <li>MongoDB</li>
            <li>SQL</li>
        </ul>
    </div>
    <div className="resumeDivide"></div>

    <div className="resumeSection">
        <h3>EXPERIENCE</h3>
        <div className="resumeTitleDate">
        <h4>Teacher | Chicago Public Schools | Chicago, IL</h4>
        <p>August/2021 - present</p>
        </div>
        <ul>
            <li>Used data from standardized, summative, and formative assessments to create unit plans for literacy, science, and social studies with extra supports and extension activities for varying levels in the classroom</li>
            <li>Conducted 4 weekly small groups of 4-5 students specifically targeting learning gaps created during distanced learning, increased student reading levels by an average of 3 Fountas and Pinnell reading levels </li>
            <li>Collaborated with councilor and 3 special education teachers to provide extra emotional support to 10 students</li>
        </ul>
        <div className="resumeTitleDate">
        <h4>English Teacher | Colegio Británico | Cartagena, Colombia</h4>
        <p>August/2019 - June/2020</p>
        </div>
        <ul>
            <li>Adapted Cambridge English curriculum by assessing student levels, modifying the curriculum, and supplementing resources from English as a Second Language curriculums, for 40 6th grade native Spanish speaking students</li>
            <li>Improved student language competency by an average of 1.5 levels through literacy and content specific curriculum </li>
            <li>Led classroom community building games, reflections, and student driven conversations on a daily basis which led to improved respect and communication among students inside and out of the classroom</li>
        </ul>
        <div className="resumeTitleDate">
        <h4>Teacher | Acero Charter Schools | Chicago, IL</h4>
        <p>August/2017 - June/2018</p>
        </div>
        <ul>
            <li>Increased student standardized NWEA scores by an average of 10 percentiles through 4 weekly small group intensives</li>
            <li>Organized and ran 3 community events throughout the school year that brought 350 family members to the school to facilitate family and school relationships as well as relationships between families</li>
            <li>Implemented and taught after-school tutoring for 2 groups of 10 students over the course of 4 weeks</li>
        </ul>
    </div>

    <div className="resumeDivide"></div>

    <div className="resumeSection">
        <h3>TECHNICAL PROJECTS</h3>
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
            <h4>Book Branch | Developer | <a href="https://book-branch-454719.uc.r.appspot.com/">https://book-branch-454719.uc.r.appspot.com/</a></h4>
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