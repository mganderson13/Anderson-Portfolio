import visualCalPicture from "../assets/visualCalPicture.png";
//import cashRegisterPicture from "../assets/cashRegisterPicture.jpg";

function HomeProjects() {
    return(
        <>
        <p id="largeGreyText">Take a look and play around!</p>
        
        <div className="projectArea" id="visualCalculator">
            <img className="projectImage" src={visualCalPicture} alt="visual calculator application"/>
            <div className="projectText">
            <p className="projectTitle">Visual Aid Calculator</p>
            <p className="projectDescription">is a fully functional calculator with visual representations of addition, subtraction, multiplication, and division 
                to support and reinforce elementary level math skills</p>
            <p className="projectStack">Animations showcase the power of vanilla Javascript and CSS</p>
            </div>
        </div>

        <div className="projectDivide"></div>

        <div className="projectArea" id="classroomCashRegister">
            <img className="projectImage" alt="cash register application"/>
            <div className="projectText">
            <p className="projectTitle">Classroom Cash Register</p>
            <p className="projectDescription">is assitive technology to practice money and counting change, role play 
                career skills, or educators can use Classroom Cash Register as a tool at school events</p>
            <p className="projectStack">Developed with React, Nodejs, and SQLite, allowing educators to create accounts with personalize store inventory</p>
            </div>
        </div>

        <div className="projectDivide"></div>

        <div className="projectArea" id="bookBranch">
        <img className="projectImage" alt="book branch application"/>
        <div className="projectText">
        <p className="projectTitle">Book Branch</p>
        <p className="projectDescription">is a way for book lovers to explore new titles, track their reads, and review books</p>
        <p className="projectStack">Google Books API provides an extensive library <br></br> MongoDB helps store user data and book preferences</p>
        </div>
        </div>
        </>
    )
}

export default HomeProjects;