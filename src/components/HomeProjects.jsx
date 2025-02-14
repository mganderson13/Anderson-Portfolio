//import visualCalPicture from "../assets/visualCalPicture.jpg";
//import cashRegisterPicture from "../assets/cashRegisterPicture.jpg";

function HomeProjects() {
    return(
        <>
        <div>
        <h1>Personal Projects</h1>
        <h2>Educator & Coder = intuitive, helpful, and fun</h2>
        <p>Combining my background in education with my developer skills I have created several applications
            that aid students in math skills, engage book lovers, and provide teachers with classroom support.
        </p>
        <p>Take a look and play around!</p>
        </div>
        <div className="visualCalculator">
            <img alt="visual calculator application"/>
            <p>Fully functional calculator</p>
            <p>with visual representations of addition, subtraction, multiplication, and division 
                to support and reinforce elementary level math skills</p>
            <p>Animations showcase the power of vanilla Javascript and CSS</p>
        </div>
        <div className="classroomCashRegister">
            <img alt="cash register application"/>
            <p>Classroom Cash Register</p>
            <p>is assitive technology to practice money and counting change, role play 
                career skills, or educators can use Classroom Cash Register as a tool at school events</p>
            <p>Developed with React, Nodejs, and SQLite, allowing educators to create accounts with personalize store inventory</p>
        </div>
        <div className="bookBranch">
        <img alt="book branch application"/>
        <p>Book Branch</p>
        <p>is a way for book lovers to explore new titles, track their reads, and review books.</p>
        <p>Google Books API provides an extensive library
        <p>MongoDB helps store user data and book preferences</p>
        </p>
        </div>
        </>
    )
}

export default HomeProjects;