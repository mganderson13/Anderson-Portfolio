import gitHubImage from "../assets/github.png";
import linkedInImage from "../assets/linkedIn.jpg";
import emailImage from "../assets/email.jpeg";

function Contact() {
    return(
        <>        
        <h1 className="contactTitle">{"<Contact me />"}</h1>

        <div className="contactGreenRect"></div>

        <div className="contactWrapper">
        <p className="contactLargeGreyText">Want to check out the code behind my projects? <br></br>Take a look at my GitHub:</p>
        <img className="contactImage" src={gitHubImage} alt="GitHub"/>
        </div>

        <div className="projectDivide"></div>

        <div className="contactWrapper">
        <p className="contactLargeGreyText">Think I would be a great addition to your team? <br></br>Connect with me on LinkedIn:</p>
        <img className="contactImage" src={linkedInImage} alt="LinkedIn"/>
        </div>

        <div className="projectDivide"></div>

        <div className="contactWrapper">
        <p className="contactLargeGreyText">Curious about my work or want to collaborate? <br></br>Send me a message through Email:</p>
        <img className="contactImage" src={emailImage} alt="Email"/>
        </div>

        <div className="projectDivide"></div>

        </>
    )
}

export default Contact;