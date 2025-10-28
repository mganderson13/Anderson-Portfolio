import visualCalPicture from "../assets/visualCalPicture.png";
import bookBranchPicture from "../assets/bookBranchPicture.png";
import cashRegisterPicture from "../assets/cashRegisterPicture.png";
import projectsPageImage from "../assets/projectsPageImage.png";
import projectsPageTitle from "../assets/projectsPageTitle.png";
import { useNavigate } from "react-router-dom";

function Projects() {
    const navigate = useNavigate();

    return (
        <>
    <div className="projectsTop">
        <div className="projectsTitleContainer">
            <img src={projectsPageTitle} alt="Websites and Applications"/>
        </div>
        <div className="projectsPicContainer">
            <img id="codePic" src={projectsPageImage} alt="code"/>
        </div>
        </div>

        <div className="projectsMiddle">
        <p>With an in depth knowledge of HTML, CSS, and JavaScript I have created applications that incorporate APIs, SQL and NoSQL databases, and authentication. 
            My websites and applications are visually pleasing, educational and fun!
        </p>
        <br></br>
        <p>I have worked collaboratively with fellow software engineers providing me with ample experience with Git, managing merge conflicts, and writing clear and succinct code.
        My diverse skills make me an excellent and unique software developer, and a perfect member for any team.
        </p>
        </div>

    <div className="projectsPageMain">
        <div className="projectsPageDiv" id="visualCalculator">
            <img className="projectsPageImage" src={visualCalPicture} alt="visual calculator application"
            onClick={() => window.open("https://maribeth2024.github.io/VisualCalculator/", "_blank")}/>
            <div className="projectsPageText">
            <p className="projectsPageName">Visual Aid Calculator</p>
            <p className="projectsPageDescription">Our Visual Calculator was designed by two teacher-programmers who wanted to create a method for students in grades 1-5 to visualize the math processes 
            that they are currently exploring. Using our personal expertise and established curriculum guidelines, we chose representations of the four main operations - addition, subtraction, multiplication, and division -
            to take the calculator from an abstract tool to something more concrete that reinforces common math models.
            </p>
            <br></br>
            <p className="projectsPageStack">This project is developed using only HTML, CSS, and JavaScript, with sprite sheets to aid in the arrow animations. It is a showcase of the serviceability of vanilla JavaScript.
            Because the animations are dynamic, the DOM elements are created in JavaScript functions based on the input from the calculator. The functions create, design, adjust, and place 
            divs to illustrate the operations using vanilla JavaScript - no animation expertise here! Just two teachers using the skills they have to help students!
            </p>
            </div>
        </div>
   
        <div className="projectsPageDiv" id="bookBranch">
        <img className="projectsPageImage" src={bookBranchPicture} alt="book branch application"
        onClick={() => window.open("https://book-branch-454719.uc.r.appspot.com", "_blank")}/>
        <div className="projectsPageText">
        <p className="projectsPageName">Book Branch</p>
        <p className="projectsPageDescription">This book exploration app allows users to search for books by title, author, or keywords using the Google Books API. Users can save and rate their favorite books and write reviews. 
        Users can view detailed information about each book, including title, author, description, and cover image. Or visit their profile to see the books they have saved and reviewed.
        </p>
        <br></br>
        <p className="projectsPageStack">Created using React and Nodejs, this JavaScript app incorporates a public API and the NoSQL database MongoDB, 
        which stores user data and book preferences. Firebase Auth makes for a secure and easy sign in process.</p>
        </div>
        </div>

    <div className="projectsPageDiv" id="classroomCashRegister">
            <img className="projectsPageImage" src={cashRegisterPicture} alt="cash register application"
            onClick={() => navigate("/cashregister")}/>
            <div className="projectsPageText">
            <p className="projectsPageName">Classroom Cash Register</p>
            <p className="projectsPageDescription">This classroom tool is assitive technology to practice money and counting change, role play 
                career skills, or educators can use Classroom Cash Register as a tool at school events. The realistic Cash Register Interface mimics the layout 
                and functionality of actual cash registers. The Administrator Control Panel enables educators to customize the app creating their own store and adding or editing inventory items 
                to cater to individual needs and learning objectives.
            </p>
            <br></br>
            <p className="projectsPageStack">The Counter Amounter application is built using a combination of technologies chosen for their specific strengths and suitability for the project's objectives:
                React: Provides a dynamic and interactive user interface, allowing for a smooth and engaging user experience.
                Express and Node: Power the backend server, enabling data storage and manipulation, and facilitating communication between the front-end and the database.
                SQLite: Serves as the lightweight database, providing efficient storage for inventory and user information. With an engineer created authentication system.
            </p>
            </div>
        </div>
        </div>
        </>
    )
}

export default Projects;